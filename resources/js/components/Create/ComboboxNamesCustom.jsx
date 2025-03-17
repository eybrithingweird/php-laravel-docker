import React, { useEffect, useRef, useState } from "react";
import ComboboxMain from '../../components/ComboboxMain';
import { Field } from "@headlessui/react";
import { useCreate } from "../../contexts/CreateContext";

const ComboboxNamesCustom = () => {
	
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
		draftChannels,
		setDraftChannels
		// addCustomChannel,
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

	// useEffect(() => {
	// 	if (selectedEmployee !== '') {
	// 		setSelectedOption(selectedEmployee);
	// 	}
	// }, [selectedEmployee]);

	const addCustomChannel = (selectedEmp) => {
		if (selectedEmp !== '') {
			const selected = employees.filter((emp) => {
				if (emp.first_name.toUpperCase() + ' ' + emp.last_name.toUpperCase() === selectedEmp){
					return emp;
				}
			});
			if (selected[0] !== undefined) {
				setDraftChannels([...draftChannels, [{
					id: selected[0].id,
					first_name: selected[0].first_name,
					last_name: selected[0].last_name,
					middle_initial: selected[0].middle_initial,
					prenominal_title: selected[0].prenominal_title,
					postnominal_title: selected[0].postnominal_title,
					office_id: selected[0].office_id,
					designation: selected[0].designation,
				}]]);
			}
			
		}
	}

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
						<div className="input-group w-full grid grid-cols-18 gap-2">
							<div className="col-span-16">
								<Field disabled={ selectedEmployee === '' ? true : false }>
									<ComboboxMain 
										type="channels"
										filteredOptions={filteredOptions}
										selectedOption={selectedOption}
										setSelectedOption={setSelectedOption}
										setSelectedOpt={null}
										query={query}
										setQuery={setQuery}
										setSelectedOffice={null}
										setSelectedDesignation={null}
										setSelectedEmployee={null}
										setSelectedField={null}
									/>
								</Field>
							</div>
							<span className="input-group-btn">
								<button disabled={ selectedEmployee === '' ? true : false } className="add_field_button btn btn-success btn-flat" 
								type="button" onClick={() =>addCustomChannel(selectedOption)}>Add</button>
							</span>
						</div>
			}
		</>
	);
};

export default ComboboxNamesCustom;
