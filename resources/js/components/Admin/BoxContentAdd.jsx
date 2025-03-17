import React, { useState, useEffect } from "react";
import { useAdmin } from "../../contexts/AdminContext";

import ComboboxReqAdm from './ComboboxReqAdm';
import ComboboxEmp from './ComboboxEmp';
import ComboboxOffices from './ComboboxOffices';
import ComboboxDesig from './ComboboxDesig';

// import { postChannels } from "../../api/Admin/api";
import { useAdminMutation } from "../../hooks/useAdminMutation";
import { Loading } from "../Loading";

const BoxContentAdd = () => {
	const token = document.getElementById('container').getAttribute('token');
	const { requestTypes, requestFields } = useAdmin();
	const { 
		newChannelData, 
		setNewChannelData, 
		requestName,
		setRequestName,
		requestDef,
		setRequestDef,
		isApprovableByOIC,
		setIsApprovableByOIC,
		addRequestTypeSubmit, 
		isSubmitting, 
		success, 
		setSuccess, 
		error, 
		setError 
	} = useAdminMutation();

	useEffect(() => {
		if ( newChannelData.definition != null && newChannelData.reqtype != null ) { //meaning if below code is completed
			addRequestTypeSubmit();
		}
	}, [newChannelData]);

	const sendSubmit = (e) => {
		e.preventDefault();
		setError('');
		setSuccess('');
		if ( (requestName != '' && requestDef != '') || (requestName != ' ' && requestDef == ' ') ) {
			const alreadyExists = requestTypes.find((req) => req.reqtype === requestName);
			if ( alreadyExists ) {
				setError('Request type already exists.');
			}
			else {
				setNewChannelData({
					'reqtype': requestName.charAt(0).toUpperCase() + requestName.slice(1),
					'definition': requestDef.charAt(0).toUpperCase() + requestDef.slice(1),
					'is_approvable_by_oic': isApprovableByOIC
				});
			}
		} else {
			setError('All fields are required.');
			if ( requestName == '' || requestName == ' ' ) {
				document.getElementById('request_type_name').style.borderColor = 'red';
			}
			if ( requestDef == '' || requestDef == ' ' ) {
				document.getElementById('request_type_description').style.borderColor = 'red';
			}
		}
	};

	return (
		<>
			<input type="hidden" name="_token" value={token} />
			<form encType="multipart/form-data">
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
								Request Type Name<span className="text-danger text-3xl">*</span>
							</td>
							<td>
								<input type="text" name="price" id="request_type_name" 
									className="form-control block w-full" 
									placeholder="Request type name" required
									value={requestName} onChange={(e) => { 
										setRequestName(e.target.value); 
										document.getElementById('request_type_name').style.borderColor = '#ccc'; 
										}} />
							</td>
						</tr>

						<tr>
							<td className="warning">
								Description <span className="text-danger text-3xl">*</span> <br />
							</td>
						
							<td>
								<textarea className="form-control" 
									rows="10" id="request_type_description" 
									placeholder="Type the request type's description here..." 
									required 
									value={requestDef} onChange={(e) => { 
										setRequestDef(e.target.value); 
										document.getElementById('request_type_description').style.borderColor = '#ccc'; 
										}} />
							</td>
						</tr>

						<tr>
							<td className="warning">
								Can the Chancellor's OIC approve letter requests with this type? <span className="text-danger text-3xl">*</span>
							</td>
						
							<td className="grid justify-center">
								{/* <input type="radio" id="isApprovable" name="oicApprovable"
									checked={isApprovableByOIC === true}
									onClick={() => setIsApprovableByOIC(true)} />
									<label htmlFor="isApprovable" className="align-center">Yes</label>

								<input type="radio" id="notApprovable" name="oicApprovable"
									checked={isApprovableByOIC === false}
									onClick={() => setIsApprovableByOIC(false)} />
									<label htmlFor="notApprovable" className="align-center">No</label> */}
								<span className="flex space-x-1">
									<span className="grid place-items-center">
										<input type="radio" className="col-start-1 row-start-1 peer shrink-0 !m-0 appearance-none w-5 h-5 
										border-[1px] border-black rounded-full cursor-pointer" name="oicApprovable" 
										id="isApprovable" value="true" checked={isApprovableByOIC === true}
										onClick={() => setIsApprovableByOIC(true)} />
										
										<div className="col-start-1 row-start-1 absolute w-3 h-3 rounded-full peer-checked:bg-green-700 
										transition-all pointer-events-none" />
									</span>
									<label htmlFor="isApprovable" className="font-normal cursor-pointer pr-4 !mb-0 !pb-0"> Yes </label>

									<span className="grid place-items-center">
										<input type="radio" className="col-start-1 row-start-1 peer shrink-0 !m-0 appearance-none w-5 h-5 
										border-[1px] border-black rounded-full cursor-pointer" name="oicApprovable" 
										id="notApprovable" value="false" checked={isApprovableByOIC === false}
										onClick={() => setIsApprovableByOIC(false)} />
										
										<div className="col-start-1 row-start-1 absolute w-3 h-3 rounded-full peer-checked:bg-green-700 
										transition-all pointer-events-none" />
									</span>
									<label htmlFor="notApprovable" className="font-normal cursor-pointer pr-4 !mb-0 !pb-0"> No </label>
								</span>
							</td>
						</tr>
																
						<tr>
							<td></td>
							<td>
								<button className="btn btn-primary" onClick={(e) => sendSubmit(e)}>Save</button>
								{ success != '' ? <span className="pl-2 text-iit-green">{success}</span> : '' }
								{ error != null ? <span className="pl-2 text-iit-red">Error occurred: {error}</span> : '' }
								{ isSubmitting ? <span className="absolute pl-2 pt-1"> <Loading height="27px" width="27px" /> </span> : '' }
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</>
	);
};

export default BoxContentAdd;