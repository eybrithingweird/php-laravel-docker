import React, { useState, useEffect } from "react";
import { useAdmin } from "../../contexts/AdminContext";

import ComboboxReqAdm from './ComboboxReqAdm';
import ComboboxReqFields from './ComboboxReqFields';

// import { postChannels } from "../../api/Admin/api";
import { useAdminMutation } from "../../hooks/useAdminMutation";
import { Loading } from "../Loading";
import { Tooltip } from 'react-tooltip';
import { isNamedExportBindings } from "typescript";

const BoxContentFields = () => {
	const token = document.getElementById('container').getAttribute('token');
	const { filterSubmit, requestFieldSubmit, isSubmitting, setIsSubmitting, success, setSuccess, error, setError } = useAdminMutation();
	const { 
		requestTypes,
		isFetchingReq,
		requestFields,
		isFetchingField,
		selectedRequestType,
		currentFields,
		setCurrentFields 
	} = useAdmin();
	const [ finishedProcessing, setFinishedProcessing ] = useState(false);
	const [ addField, setAddField ] = useState(0);
	const [ originalState, setOriginalState ] = useState([]);

	// useEffect(() => {
	// 	if (finishedProcessing) {
	// 		setSuccess('Request fields have been saved.');
	// 		setIsSubmitting(false);
	// 	}
	// }, [finishedProcessing]);

	useEffect(() => {
		console.log(selectedRequestType);
		if (selectedRequestType != '' && selectedRequestType != null) {
			setSuccess('');
			setFinishedProcessing(false);
			const id = requestTypes.filter((option) => option.reqtype === selectedRequestType)[0].id;
			const fields = requestFields.filter((field) => field.request_type_id === id);
			// console.log(fields);
			setCurrentFields(
				fields.map((field) => ({
					id: field.id,
					all_field_id: field.all_field_id,
					request_type_id: field.request_type_id,
					created_at: field.created_at,
					updated_at: field.updated_at,
					newFieldName: '',
					newFieldType: '',
					newNumberOfOptions: 0,
					newFieldOptions: []
				}))
			);
			setAddField(fields.length);
			setOriginalState(fields);
			// setOriginalLength(fields.length);
		}
	}, [selectedRequestType]);

	const addFieldAction = (e) => {
		e.preventDefault(); 
		const requestTypeID = requestTypes.filter((option) => option.reqtype === selectedRequestType)[0].id;
		setCurrentFields([...currentFields, {
			id: currentFields.length == 0 ? 1 : currentFields[currentFields.length - 1].id + 1,
			all_field_id: null,
			request_type_id: requestTypeID,
			newFieldName: '',
			newFieldType: '',
			newNumberOfOptions: 0,
			newFieldOptions: []
		}]);
		// setAddField(addField + 1);
	}

	// const [ htmlTags, setHtmlTags ] = useState();
	
	// useEffect(() => {
	// 	console.log(currentFields, fieldToRemove);
	// 	if (fieldToRemove != null) {
	// 		console.log('test');
	// 		const newArray = [];
			
	// 		setHtmlTags(newArray);
	// 	}
	// }, [currentFields, fieldToRemove]);

	// useEffect(() => {
	// 	console.log(htmlTags);
	// }, [htmlTags]);

	// useEffect(() => {
	// 	console.log(currentFields);
	// }, [currentFields]);

	{/* TODO: Accomodate request types with fields already (make it flexible for add or edit) LACKING: API SENDING*/}

	// console.log(addField, currentFields.length);


	return (
		<>
			<input type="hidden" name="_token" value={token} />
			<table className="table table-bordered" id="type" encType="multipart/form-data">
				<thead>
					<tr className="active">
						<th colSpan="2">
							Please fill-in appropriate information. 
							Required fields are marked as <span className="text-danger text-3xl">*</span>
						</th>
					</tr>
				</thead>

				<col width="30" /><col width="100" />

				<tbody>
					<tr>
						<td width="30%" className="warning">
							Request Type <span className="text-danger text-3xl">*</span>
						</td>
						<td>
							{
								isFetchingReq && isFetchingField ? 
									<div className="relative">
										<div className="form-control disabled text-gray-400">
											Loading...
										</div>
									</div> : 
								<ComboboxReqAdm />
							}
						</td>
					</tr>

					<tr>
						<td className="warning">
							Request Fields <span className="text-danger text-3xl">*</span> <br />
							<small>Add fields according to order.</small>
						</td>
					
						<td className="flex flex-col space-y-4">
							{
								currentFields.map((field, index) => {
									// console.log(field);
									return (
									<span className="grid grid-cols-20"> 
										<span className="col-span-19"> 
											<span className="grid grid-cols-20"> <ComboboxReqFields selected={field} key={index} /> </span>
										</span>
										<i className="fa fa-trash fa-lg mt-4 ml-2 text-iit-red hover:cursor-pointer" data-tooltip-id="tooltip-trash"
										data-tooltip-content="Remove Field" key={index + '-trash'} 
										onClick={() => setCurrentFields([...currentFields.filter((currentField) => currentField.id != field.id)])}>
											<Tooltip id="tooltip-trash" key={index + '-tooltip'} />	
										</i> 
									</span>
									)
								})
							}

							{/* {
								addField > currentFields.length && 
								(
									<span className="grid grid-cols-20"> 
										<span className="col-span-19"> 
											<ComboboxReqFields selected={null} key={currentFields.length + 1} /> 
										</span>
										<i className="fa fa-trash fa-lg mt-4 ml-2 text-iit-red hover:cursor-pointer" data-tooltip-id="tooltip-trash"
										data-tooltip-content="Remove Field" key={currentFields.length + 1 + '-trash'} onClick={() => setAddField(addField - 1) }>
											<Tooltip id="tooltip-trash" key={currentFields.length + 1 + '-tooltip'} />	
										</i> 
									</span>
								)
							} */}

							{
								selectedRequestType != '' ? 
									<button className="btn btn-default" onClick={(e) => addFieldAction(e)}>
										<i className="fa fa-plus mr-2"></i> Add New Field
									</button> : 
									<span className="text-iit-red">Please select a request type first.</span>
							}
						</td>
					</tr>
															
					<tr>
						<td></td>
						<td>
							{ success === '' ? <button className="btn btn-primary" onClick={() => requestFieldSubmit(originalState)}>Save</button> : '' }
							{ success != '' ? <span className="pl-2 text-iit-green">{success}</span> : '' }
							{ error != null ? <span className="pl-2 text-iit-red">Error occurred: {error}</span> : '' }
							{ isSubmitting ? <span className="absolute pl-2 pt-1"> <Loading height="27px" width="27px" /> </span> : '' }
						</td>
					</tr>
				</tbody>
			</table>
		
		</>
	);
};

export default BoxContentFields;