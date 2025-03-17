import React, { useEffect, useRef, useState } from "react";
import ComboboxMain from '../ComboboxMain';

// import { useCreate } from '../../contexts/CreateContext';
import { useAdmin } from "../../contexts/AdminContext";
import { useAdminMutation } from "../../hooks/useAdminMutation";

const ComboboxReqAdm = () => {
	const {
		channels,
		requestTypes, 
		isFetchingReq, 
		selectedRequestType, 
		setSelectedRequestType,
	} = useAdmin();

	const { setSuccess } = useAdminMutation();

	const [selectedOption, setSelectedOption] = useState(selectedRequestType != '' ? selectedRequestType : 'Start typing or select request type...');
	const [query, setQuery] = useState('');

	useEffect(() => {
		if (selectedRequestType != '') {
			setSuccess('');
		}
	}, [selectedRequestType]);

	// console.log(channels);

	// const filteredRequestTypes = 
	// 	requestTypes.map((option) => {
	// 		if (option.id in channels) {
	// 			return null
	// 		} else {
	// 			return option
	// 		}
	// 	});

	// console.log(filteredRequestTypes);

	// const noNullRequestTypes = Object.fromEntries(Object.entries(filteredRequestTypes).filter(([_, v]) => v != null));
	// const noNullRequestTypes = filteredRequestTypes.filter(n => n);
	// console.log(noNullRequestTypes);

	const filteredOptions =
		query === ''
			? requestTypes
			: requestTypes.filter((option) => {
				return option.reqtype.toLowerCase().includes(query.toLowerCase()) || option.reqtype.toLowerCase().includes('other');
			});	

	return (
		<>
			{
				isFetchingReq 
					? 
						<div className="relative">
							<div className="form-control disabled text-gray-400">
								Loading...
							</div>
						</div>
					: 
						<ComboboxMain 
							type="requesttype"
							filteredOptions={filteredOptions}
							selectedOption={selectedOption}
							setSelectedOption={setSelectedOption}
							query={query}
							setQuery={setQuery}
							setSelectedRequestType={setSelectedRequestType}
							setSelectedOffice={null}
							setSelectedDesignation={null}
							setSelectedEmployee={null}
							setSelectedField={null}
						/>
			}
		</>
	);
};

export default ComboboxReqAdm;
