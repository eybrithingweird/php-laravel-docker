import React, { useEffect, useRef, useState } from "react";
import ComboboxMain from '../ComboboxMain';

// import { useCreate } from '../../contexts/CreateContext';
import { useAdmin } from "../../contexts/AdminContext";
import { use } from "react";

const ComboboxReqFields = ({selected}) => {
	const {
		allFields,
		isFetchingField,
		selectedRequestType,
		requestTypes,
		currentFields,
		setCurrentFields
	} = useAdmin();
	const [selectedOption, setSelectedOption] = useState('Start typing or select request field...');
	const [query, setQuery] = useState('');
	const [ selectedField, setSelectedField ] = useState('');
	const [ customField, setCustomField ] = useState(false);

	// const [ fieldName, setFieldName ] = useState('');
	// const [ fieldType, setFieldType ] = useState('');
	// const [ fieldOptions, setFieldOptions ] = useState([]);
	// const [ numberOfOptions, setNumberOfOptions ] = useState(0);

	const incrementDecrement = (targetValue) => {
		// console.log(stateSent);
		// const newValue = parseInt(stateSent.value);
		if (targetValue > selected.newNumberOfOptions) {
			console.log('increment');
			// setFieldOptions([...fieldOptions, {
			// 	id: numberOfOptions + 1,
			// 	optionName: ''
			// }])
			setCurrentFields([...currentFields].map((field) => {
				if (field.id == selected.id){
					return {
						...field,
						newFieldOptions: [...field.newFieldOptions, ''],
						newNumberOfOptions: selected.newNumberOfOptions + 1
					}
				} else return field;
			}))
			// setNumberOfOptions(numberOfOptions + 1);
		} else if (targetValue < selected.newNumberOfOptions) {
			console.log('decrement');
			setCurrentFields([...currentFields].map((field) => {
				if (field.id == selected.id){
					return {
						...field,
						newFieldOptions: field.newFieldOptions.slice(0, -1),
						newNumberOfOptions: selected.newNumberOfOptions - 1
					}
				} else return field;
			}));
			// setFieldOptions(fieldOptions.slice(0, -1));
			// setNumberOfOptions(numberOfOptions - 1);
		}
	}

	// const onChangeOption = (id, value) => {
	// 	setFieldOptions([...fieldOptions].map((option) => {
	// 		if (option.id === id) {
	// 			return {
	// 				...option,
	// 				optionName: value
	// 			}
	// 		} else return option;
	// 	}));
	// }

	// useEffect(() => {
	// 	console.log(fieldType);
	// }, [fieldType]);

	useEffect(() => {
		console.log(currentFields);

		console.log(selected);
		if (selected != null && selectedRequestType != '' && selected.all_field_id != null) {
			const res = allFields.filter((option) => option.id === selected.all_field_id)[0];
			// console.log(allFields);
			console.log(res);
			setSelectedOption(res.field + ' [' + res.field_type + ']' + (res.field_type == 'radio' ? ' [' + res.field_options + ']' : ''));
			setSelectedField(res.field + ' [' + res.field_type + ']' + (res.field_type == 'radio' ? ' [' + res.field_options + ']' : ''));
		}
	}, [currentFields]);

	// useEffect(() => {
	// 	console.log(selected);
	// 	if (selected != null && selectedRequestType != '' && selected.all_field_id != null) {
	// 		const res = allFields.filter((option) => option.id === selected.all_field_id)[0];
	// 		// console.log(allFields);
	// 		console.log(res);
	// 		setSelectedOption(res.field + ' [' + res.field_type + ']');
	// 		setSelectedField(res.field + ' [' + res.field_type + ']');
	// 	}
	// }, [selectedRequestType]);

	useEffect(() => {
		console.log(selected);
		console.log(selectedOption);
		if (selectedOption != 'Start typing or select request field...' && selectedOption != null) {
			if (selectedOption == 'Other (Add a new Request Field) []') {
				setCustomField(true);
			} else {
				setCustomField(false);
			}
			const res = allFields.filter((option) => 
				option.field + ' [' + option.field_type + ']' + (option.field_type == 'radio' ? ' [' + option.field_options + ']' : '') === selectedOption)[0];
			console.log(res, selectedOption);
			setCurrentFields([...currentFields].map((field) => {
				if (field.id === selected.id) {
					return {
						...field,
						all_field_id: res.id,
					}
				} else return field;
			}));
		}
	}, [selectedOption]);

	// useEffect(() => {
	// 	if (selected != null && selectedField != null){
	// 		console.log('replace');
	// 		const res = allFields.filter((option) => option.field + ' [' + option.field_type + ']' === selectedOption)[0];
	// 		setCurrentFields([...currentFields].map((field) => {
	// 			if (field.id === selected.id) {
	// 				return {
	// 					...field,
	// 					all_field_id: res.id
	// 				}
	// 			} else return field;
	// 		}))
	// 	}
	// }, [selectedField]);

	const filteredOptions =
		query === ''
			? allFields
			: allFields.filter((option) => {
				return option.field.toLowerCase().includes(query.toLowerCase()) || option.field.toLowerCase().includes('new');
			});	 //|| option.field.toLowerCase().includes('other')

	return (
		<>
			{
				isFetchingField 
					? 
						<div className="relative">
							<div className="form-control disabled text-gray-400">
								Loading...
							</div>
						</div>
					: 
						<span className="col-span-20">
							<ComboboxMain 
								type="requestfields"
								filteredOptions={filteredOptions}
								selectedOption={selectedOption}
								setSelectedOption={setSelectedOption}
								query={query}
								setQuery={setQuery}
								setSelectedRequestType={null}
								setSelectedOffice={null}
								setSelectedDesignation={null}
								setSelectedEmployee={null}
								setSelectedField={setSelectedField}
							/>
						</span>
			}
			{
				customField ? (
					<>
					<span className="col-span-20 grid grid-cols-20 mt-4 justify-items-center">
						<span className="col-span-1"></span>
						<span className="col-span-4 mt-2">
							Field name: <span className="text-danger text-3xl">*</span>
						</span>
						<input type="text" name="fieldName" id="request_field_name" 
							className="form-control grid w-full col-span-14" 
							placeholder="Request field name" required value={selected.newFieldName} 
							onChange={(e) => 
								setCurrentFields([...currentFields].map((field) => {
									if (field.id == selected.id){
										return {
											...field,
											newFieldName: e.target.value
										}
									} else return field;
								}))
							 } /> 
						<span className="col-span-1"></span>
					</span>
					
					<span className="col-span-20">
						<span className="flex space-x-1 justify-center mt-3">
							<span className="mr-3">
								Field type: <span className="text-danger text-3xl">*</span>
							</span> 
							<span className="grid place-items-center">
								<input type="radio" className="col-start-1 row-start-1 peer shrink-0 !m-0 appearance-none w-5 h-5 border-[1px] border-black 
								rounded-full cursor-pointer" required id='text' name="fieldType" value='text' checked={selected.newFieldType == 'text' ? true : false}
								onChange={() => 
									setCurrentFields([...currentFields].map((field) => {
										if (field.id == selected.id){
											return {
												...field,
												newFieldType: 'text',
												newFieldOptions: []
											}
										} else return field;
									}))
								} />
								<div className="col-start-1 row-start-1 absolute w-3 h-3 rounded-full peer-checked:bg-green-700 transition-all pointer-events-none" />
							</span>
							<label htmlFor='text' className="font-normal cursor-pointer pr-4 !mb-0 !pb-0"> Text </label>

							<span className="grid place-items-center">
								<input type="radio" className="col-start-1 row-start-1 peer shrink-0 !m-0 appearance-none w-5 h-5 border-[1px] border-black 
								rounded-full cursor-pointer" required id='file' name="fieldType" value='file' checked={selected.newFieldType == 'file' ? true : false}
								onChange={() => 
									setCurrentFields([...currentFields].map((field) => {
										if (field.id == selected.id){
											return {
												...field,
												newFieldType: 'file',
												newFieldOptions: []
											}
										} else return field;
									}))
								} />
								<div className="col-start-1 row-start-1 absolute w-3 h-3 rounded-full peer-checked:bg-green-700 transition-all pointer-events-none" />
							</span>
							<label htmlFor='file' className="font-normal cursor-pointer pr-4 !mb-0 !pb-0"> File </label>

							<span className="grid place-items-center">
								<input type="radio" className="col-start-1 row-start-1 peer shrink-0 !m-0 appearance-none w-5 h-5 border-[1px] border-black 
								rounded-full cursor-pointer" required id='radio' name="fieldType" value='radio' checked={selected.newFieldType == 'radio' ? true : false}
								onChange={() => 
									setCurrentFields([...currentFields].map((field) => {
										if (field.id == selected.id){
											return {
												...field,
												newFieldType: 'radio',
												newFieldOptions: []
											}
										} else return field;
									}))
								} />
								<div className="col-start-1 row-start-1 absolute w-3 h-3 rounded-full peer-checked:bg-green-700 transition-all pointer-events-none" />
							</span>
							<label htmlFor='radio' className="font-normal cursor-pointer pr-4 !mb-0 !pb-0"> Select from options (radio button) </label>
						</span>
					</span>

					{
						selected.newFieldType === 'radio' && (
							<span className="col-span-20 grid grid-cols-20 mt-3 content-center justify-items-center">
								<span className="col-span-4"></span>
								<label htmlFor="numberOfOptions" className="font-normal cursor-pointer mt-2 !mb-0 !pb-0 col-span-6"> 
									Number of options: <span className="text-danger text-3xl">*</span>
								</label>
								<input type="number" className="form-control col-span-5" id="numberOfOptions" max="10" 
								name="numberOfOptions" value={selected.newNumberOfOptions} 
								onChange={(e) => incrementDecrement(e.target.value)} />
							</span>
						)
					}

					{
						selected.newFieldOptions[0] != null &&
						selected.newFieldOptions.map((option, index) => {
							return (
								<span className="col-span-20 grid grid-cols-20 mt-4 justify-items-center" key={index}>
									<span className="col-span-1"></span>
									<span className="col-span-4 mt-2">
										Option # {index + 1}: <span className="text-danger text-3xl">*</span>
									</span>
									<input type="text" name={'requestOption' + String(index + 1)} id={'requestOption' + String(index + 1) + 'ID'}
										className="form-control grid w-full col-span-14" 
										placeholder="Request option" required value={option} 
										onChange={(e) => 
											setCurrentFields([...currentFields].map((field) => {
												if (field.id == selected.id){
													return {
														...field,
														newFieldOptions: [...field.newFieldOptions].map((option, indexInner) => {
															if (index == indexInner){
																return e.target.value
															} else return option;
														})
													}
												} else return field;
											}))
										} /> 
									<span className="col-span-1"></span>
								</span>
							);
						})
					}
					</>
				) : ''
			}
		</>
	);
};

export default ComboboxReqFields;
