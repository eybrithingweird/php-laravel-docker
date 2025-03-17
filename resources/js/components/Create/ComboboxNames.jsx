import React, { useEffect, useRef, useState } from "react";
import ComboboxMain from '../../components/ComboboxMain';
import { useAdmin } from "../../contexts/AdminContext";
import { Field } from "@headlessui/react";
import { useCreate } from "../../contexts/CreateContext";

const ComboboxNames = () => {
	
	const { 
		employees,
		isFetchingEmp,
		selectedEmployee,
		setSelectedEmployee,

		offices,
		isFetchingOff,
		selectedOffice,
		setSelectedOffice,

		designations,
		isFetchingDes,
		selectedDesignation,
		setSelectedDesignation,
		filteredDesignations,
		setFilteredDesignations,

		channels,
		isFetchingChan,
		selectedChannels,
		setSelectedChannels,
	} = useCreate();

	const [selectedOption, setSelectedOption] = useState(isFetchingEmp ? 'Start typing or select an employee...' : 'Loading...');
	const [query, setQuery] = useState('');

	const filteredOptions =
		query === ''
			? employees
			: employees.filter((employee) => {
				return (employee.last_name.toLowerCase().includes(query.toLowerCase()) 
				|| employee.first_name.toLowerCase().includes(query.toLowerCase()));
			});	

	useEffect(() => {
		if (selectedEmployee !== '') {
			setSelectedOption(selectedEmployee);
		}
	}, [selectedEmployee]);

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
						<Field disabled={ selectedEmployee === '' ? true : false }>
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
								setSelectedEmployee={setSelectedEmployee}
								setSelectedField={null}
							/>
						</Field>
			}
		</>
	);
};

export default ComboboxNames;
