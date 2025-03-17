import React, { useEffect, useRef, useState } from "react";
import ComboboxMain from '../../components/ComboboxMain';
import { Field } from '@headlessui/react';
import { useAdmin } from "../../contexts/AdminContext";

const ComboboxOffices = () => {
	const [selectedOption, setSelectedOption] = useState('Start typing or select an office...');
	const [query, setQuery] = useState('');

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

	const filteredOptions =
		query === ''
			? offices
			: offices.filter((office) => {
				return office.address.toLowerCase().includes(query.toLowerCase())
					|| office.initials.toLowerCase().includes(query.toLowerCase());
			});	

	return (
		<>
			<div className="row-span-1 col-span-7">
				{
					isFetchingOff 
						? 
							<div className="relative">
								<div className="form-control disabled text-gray-400">
									Loading...
								</div>
							</div>
						: 
							<Field disabled={selectedRequestType === '' ? true : false}>
								<ComboboxMain 
									type="office"
									filteredOptions={filteredOptions}
									selectedOption={selectedOption}
									setSelectedOption={setSelectedOption}
									setSelectedOpt={null}
									query={query}
									setQuery={setQuery}
									setSelectedOffice={setSelectedOffice}
									setSelectedDesignation={null}
									setSelectedEmployee={null}
									setSelectedField={null}
								/>
							</Field>
				}
			</div>
		</>
		
	);
};

export default ComboboxOffices;
