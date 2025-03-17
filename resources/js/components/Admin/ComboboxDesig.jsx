import React, { useEffect, useRef, useState } from "react";
import ComboboxMain from '../../components/ComboboxMain';
import { Field } from '@headlessui/react';
import { Tooltip } from '../../components/Tooltip';
import { useAdmin } from "../../contexts/AdminContext";
import { TableAddChannels } from "./TableAddChannels";

const ComboboxDesig = () => {
	const [selectedOption, setSelectedOption] = useState('Start typing or select a designation...');
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
		filteredDesignations,
		selectedDesignation,
		setSelectedDesignation,

		selectedOpt,
		setSelectedOpt,
		
		addChannel
	} = useAdmin();

	const filteredOptions =
		query === ''
			? filteredDesignations
			: filteredDesignations.filter((designation) => {
				return designation.toLowerCase().includes(query.toLowerCase());
			});	

	return (
		<>
			<div className="row-span-1 col-span-4">
			{ 
				// isFetchingDes
				// 	? 
				// 		<div className="relative">
				// 			<div className="form-control disabled text-gray-400">
				// 				Loading...
				// 			</div>
				// 		</div> 
				// 	: 
				selectedOffice == ''
					?
						<>
								<div className="group">
									<Field disabled>
										<ComboboxMain 
											type="designation"
											filteredOptions={filteredOptions}
											selectedOption={selectedOption}
											setSelectedOption={setSelectedOption}
											setSelectedOpt={null}
											query={query}
											setQuery={setQuery}
											setSelectedOffice={null}
											setSelectedDesignation={setSelectedDesignation}
											setSelectedEmployee={null}
											setSelectedField={null}
										/>
									</Field>

									<Tooltip content="Select an office first before selecting a designation." />
								</div>
						</>
					:
						<ComboboxMain 
							type="designation"
							filteredOptions={filteredOptions}
							selectedOption={selectedOption}
							setSelectedOption={setSelectedOption}
							setSelectedOpt={null}
							query={query}
							setQuery={setQuery}
							setSelectedOffice={null}
							setSelectedDesignation={setSelectedDesignation}
							setSelectedEmployee={null}
							setSelectedField={null}
						/>
			}
			</div>

			<span className="input-group-btn">
				<button className="add_field_button btn btn-success btn-flat" 
					type="button" onClick={addChannel}>Add</button>
			</span>

			<div className="col-span-12" id="displayAddedChannels">
				<>
					{
						selectedChannels.length > 0
							?
								<TableAddChannels /> 
							:
								null
					}
				</>
			</div>
		</>
	);
};

export default ComboboxDesig;
