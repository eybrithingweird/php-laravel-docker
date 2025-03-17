import React, { useEffect, useRef, useState } from "react";
import ComboboxMain from '../../components/ComboboxMain';
import { useAdmin } from "../../contexts/AdminContext";
import { Field } from "@headlessui/react";
import { useCreate } from "../../contexts/CreateContext";

const AdditionalFields = () => {
	
	const { 
		allFields,
		isFetchingAllFields,

		requestFields,
		isFetchingReqFields,

		requestTypes,
		selectedRequestType,

		additionalFields,
		setAdditionalFields,

		addFieldsValue,
		setAddFieldsValue
	} = useCreate();

	const [reqTypeDetails, setReqTypeDetails] = useState({});
	// const [additionalFields, setAdditionalFields] = useState({});
	const [display, setDisplay] = useState();

	useEffect(() => {
		if (selectedRequestType != '') {
			setAdditionalFields({});
			setAddFieldsValue({});
			setDisplay();
			const request = requestTypes.find(
				(req) => req.reqtype === selectedRequestType,
			)
			setReqTypeDetails(request);
		}
	}, [selectedRequestType]);

	useEffect(() => {
		if (reqTypeDetails != {} && reqTypeDetails != null) {
			const id = reqTypeDetails.id;
			const fields = requestFields.filter((option) => option.request_type_id === id);
			const fieldDetails = allFields.filter((option) => {
				const filtered = fields.filter((field) => field.all_field_id === option.id);
				if (filtered.length > 0) {
					return {
						field: option.field,
						field_type: option.field_type
					}
				}
			});
			setAdditionalFields(fieldDetails);
		}
	}, [reqTypeDetails]);

	return (
		additionalFields.length > 0 && additionalFields.map((field) => {
			return (
				<tr id={`${field.field.split(' ')[0].toLowerCase()}`}>
					<td className="warning"> {field.field} 
						<span className="text-danger text-3xl">*</span>
					</td>

					<td>
						<span className="flex space-x-1">
							{field.field_type === 'text' ? (
								<input 
									required
									type="text" 
									name={`${field.field.split(' ')[0].toLowerCase()}`} 
									id={`${field.field.split(' ')[0].toLowerCase()}`} 
									className="form-control" 
									placeholder={`${
										field.field.split(" ").length > 3 ? 
											field.field.split(" ")[0] + " " + field.field.split(" ")[1] + " " + field.field.split(" ")[2] + '...' : 
											field.field
										}`} 
									onChange={(e) => { setAddFieldsValue({...addFieldsValue, [field.field]: e.target.value}) }}
								/>
							) : 
							
							field.field_type === 'file' ? (
								<input type="file" name={`${field.field}`} id={`${field.field}`} 
									onChange={(e) => { setAddFieldsValue({...addFieldsValue, [field.field]: e.target.value}) }} required /> 
							) : 
							
							field.field_type === 'radio' ? 
								field.field_options.map((option) => { 
									return (
										<>
											<span className="grid place-items-center">
												<input type="radio" className="col-start-1 row-start-1 peer shrink-0 !m-0 appearance-none w-5 h-5 
												border-[1px] border-black rounded-full cursor-pointer" required name={`${field.field}`} 
												id={`${option}`} value={`${option}`} 
												onChange={(e) => { setAddFieldsValue({...addFieldsValue, [field.field]: e.target.value}) }} />
												
												<div className="col-start-1 row-start-1 absolute w-3 h-3 rounded-full peer-checked:bg-green-700 
												transition-all pointer-events-none" />
											</span>

											<label htmlFor={`${option}`} className="font-normal cursor-pointer pr-4 !mb-0 !pb-0"> {`${option}`} </label>
										</>
									) 
								})
							:
							// field.field_type === 'checkbox'
							field.field_options.map((option) => { 
									return (
										<>
											<span className="grid place-items-center">
												<input type="checkbox" className="z-10 col-start-1 row-start-1 relative !mt-0 peer flex shrink-0 appearance-none w-5 h-5 border-[1px] border-black rounded bg-transparent checked:bg-cyan-700 cursor-pointer" name={`${field.field}`} id={`${option}`} />
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="z-20 col-start-1 row-start-1 size-6 opacity-0 peer-checked:opacity-100 pointer-events-none">
													<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
												</svg>
											</span>

											<label htmlFor={`${option}`} className="!mb-0 font-normal pr-6 cursor-pointer"> {`${option}`} </label>
										</>
									) 
								})
							}
						</span>
					</td>
				</tr>
			);
		})
	);
};

export default AdditionalFields;
