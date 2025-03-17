import React, { useEffect, useRef, useState } from "react";
import ComboboxMain from '../../components/ComboboxMain';
import { useAdmin } from "../../contexts/AdminContext";
import { Field } from "@headlessui/react";
import { Tooltip } from '../../components/Tooltip';

//NOTE: Currently unused

const ComboboxEmp = () => {
	
	const {
		requestTypes, 
		isFetchingReq, 
		selectedRequestType, 
		setSelectedRequestType,

		employees, 
		isFetchingEmp, 
		selectedEmployee,
		setSelectedEmployee,

		offices, 
		isFetchingOff,
		selectedOffice,
		setSelectedOffice, 

		channels, 
		isFetchingChan, 
		selectedChannels,
		setSelectedChannels,

		designations, 
		isFetchingDes, 
		selectedDesignation,
		setSelectedDesignation,

		selectedOpt,
		setSelectedOpt 
	} = useAdmin();

	const [selectedOption, setSelectedOption] = useState(isFetchingEmp ? 'Loading...' : employees[2].first_name.toUpperCase() + ' ' + employees[2].last_name.toUpperCase());
	const [query, setQuery] = useState('');

	const filteredOptions =
		query === ''
			? employees
			: employees.filter((employee) => {
				return (employee.last_name.toLowerCase().includes(query.toLowerCase()) 
				|| employee.first_name.toLowerCase().includes(query.toLowerCase()));
			});	

	if (!isFetchingEmp) { setSelectedEmployee(employees[2].first_name.toUpperCase() + ' ' + employees[2].last_name.toUpperCase()) };

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
						<div className="group">
							<Field disabled>
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

							<span className="text-orange-800">(Default final person to receive the letter request has been pre-selected.)</span>
						</div>
			}
		</>
	);
};

export default ComboboxEmp;
