import React, { useEffect, useRef, useState } from "react";
import ComboboxMain from '../ComboboxMain';
import { useCreate } from '../../contexts/CreateContext';

const ComboboxReqType = () => {
	const [selectedOption, setSelectedOption] = useState('Start typing or select request type...');
	const [query, setQuery] = useState('');

	const { 
		requestTypes, 
		isFetchingReq, 
		selectedRequestType, 
		setSelectedRequestType, 

		channels,
		isFetchingChan,
		selectedChannels,
		setSelectedChannels,

		employees,
		offices,
		allFields,
		requestFields,

		definition, 
		setDefinition,
		selectedOpt,
		setSelectedOpt 
	} = useCreate();

	useEffect(() => {
		if (selectedOpt != '') {
			const res = 
				requestTypes.filter((option) => {
					return option.reqtype === selectedOpt;
				});

			setDefinition(res[0].definition);
		}
	}, [selectedOpt]);

	const filteredOptions =
		query === ''
			? requestTypes
			: requestTypes.filter((option) => {
				return option.reqtype.toLowerCase().includes(query.toLowerCase()) || option.reqtype.toLowerCase().includes('other');
			});	

	// useEffect(() => {
	// 	console.log(selectedChannels);
	// }, [selectedChannels]);

	return (
		<>
			{
				isFetchingReq && isFetchingChan && employees != null && channels != null && offices != null && allFields != null && requestFields != null
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

export default ComboboxReqType;
