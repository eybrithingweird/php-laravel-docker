import React, { useEffect, useRef, useState } from "react";
import ComboboxMain from '../../components/ComboboxMain';
import { useAdmin } from "../../contexts/AdminContext";
import { Field } from "@headlessui/react";

const ComboboxNames = ({ isSelectingOIC, isSelectingBuffer, selected }) => {
	
	const {
		employees, 
		isFetchingEmp, 
		selectedEmployee,
		setSelectedEmployee,
		selectedEmployeeOIC,
		setSelectedEmployeeOIC,
		// selectedBufferEmployee,
		// setSelectedBufferEmployee,
		bufferEmpList,
		setBufferEmpList,

		channels, 
		isFetchingChan, 
		selectedChannels,
		setSelectedChannels,

		designations, 
		filteredDesignations,
		selectedDesignation,
		setSelectedDesignation,

		selectedOpt,
		setSelectedOpt,
		
		addChannel
	} = useAdmin();

	console.log(selected);

	const [selectedBufferEmployee, setSelectedBufferEmployee] = useState('');

	const [selectedOption, setSelectedOption] = useState('Start typing or select an employee...');
	const [query, setQuery] = useState('');

	const filteredOptions =
		query === ''
			? employees
			: employees.filter((employee) => {
				return (employee.last_name.toLowerCase().includes(query.toLowerCase()) 
				|| employee.first_name.toLowerCase().includes(query.toLowerCase()));
			});	

	useEffect(() => {
		// console.log('not oic');
		console.log(selectedEmployee);
		if (selectedEmployee != null &&selectedEmployee[0] != null && isSelectingOIC === false && isSelectingBuffer === false) {
			setSelectedOption(selectedEmployee);
		}
	}, [selectedEmployee]);

	useEffect(() => {
		// console.log('oic');
		if (selectedEmployee != null && selectedEmployee[0] != null && isSelectingOIC === true) {
			setSelectedOption(selectedEmployeeOIC);
		}
	}, [selectedEmployeeOIC]);

	useEffect(() => {
		// console.log('buffer');
		if (selectedBufferEmployee != '' && isSelectingBuffer === true) {
			console.log('here');
			setSelectedOption(selectedBufferEmployee);
			const res = employees.filter((emp) => (emp.first_name.toUpperCase() + ' ' + emp.last_name.toUpperCase()) === selectedBufferEmployee)[0];
			console.log(res);
			setBufferEmpList([...bufferEmpList].map((emp) => {
				if (emp.id === selected.id) {
					return {
						...emp,
						buffer_employee_id: res.id
					}
				} else return emp;
			}));
		}
	}, [selectedBufferEmployee]);

	useEffect(() => {
		console.log(selected);
		if (selected != null && selected.buffer_employee_id != '') {
			const res = employees.filter((emp) => emp.id === selected.buffer_employee_id)[0];
			setSelectedOption(res.first_name.toUpperCase() + ' ' + res.last_name.toUpperCase());
			setSelectedBufferEmployee(res.first_name.toUpperCase() + ' ' + res.last_name.toUpperCase())
		}
	}, [bufferEmpList]);

	// useEffect(() => {
	// 	// console.log('buffer');
	// 	if (selectedBufferEmployee != '' && isSelectingBuffer === true) {
	// 		setSelectedOption(selectedBufferEmployee);
	// 	}
	// }, [selectedBufferEmployee]);

	// useEffect(() => {
	// 	// console.log(selectedBufferEmployee);
	// 	if (selectedBufferEmployee != '') {
	// 		console.log('change detected');
	// 	}
	// }, [selectedBufferEmployee]);

	return (
		<>
			{
				isFetchingEmp 
					? 
						<div className="relative">
							<div className="form-control disabled text-gray-400">
								Loading...
							</div>
						</div>
					: 
						// <Field disabled={ selectedEmployee === '' ? true : false }>
							<ComboboxMain 
								type="employee"
								filteredOptions={filteredOptions}
								selectedOption={selectedOption}
								setSelectedOption={setSelectedOption}
								setSelectedOpt={null}
								query={query}
								setQuery={setQuery}
								setSelectedOffice={null}
								setSelectedDesignation={null}
								setSelectedEmployee={ isSelectingOIC ? setSelectedEmployeeOIC : isSelectingBuffer ? setSelectedBufferEmployee : setSelectedEmployee}
								setSelectedField={null}
							/>
						// </Field>
			}
		</>
	);
};

export default ComboboxNames;
