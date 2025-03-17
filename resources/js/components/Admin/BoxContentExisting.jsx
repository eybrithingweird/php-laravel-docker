import React, { useState, useEffect } from "react";
import { useAdmin } from "../../contexts/AdminContext";

import ComboboxReqAdm from './ComboboxReqAdm';
import ComboboxEmp from './ComboboxEmp';
import ComboboxOffices from './ComboboxOffices';
import ComboboxDesig from './ComboboxDesig';

// import { postChannels } from "../../api/Admin/api";
import { useAdminMutation } from "../../hooks/useAdminMutation";
import { Loading } from "../Loading";

const BoxContentExisting = () => {
	const token = document.getElementById('container').getAttribute('token');
	const { 
		filterSubmit, 
		isSubmitting, 
		success, 
		error, 
		setError 
	} = useAdminMutation();

	const { 
		offices, 
		employees, 
		isFetchingEmp, 
		selectedEmployee, 
		setSelectedEmployee, 
		selectedChannels, 
		setSelectedChannels, 
		selectedRequestType 
	} = useAdmin();
	const [ originalLength, setOriginalLength ] = useState(0); //NOTE: Use for comparing length of selectedChannels array, IDK
	const [sendSubmitCheck, setSendSubmitCheck] = useState(false);

	useEffect(() => {
		if (employees.length != 0) {
			setSelectedEmployee(employees[3]);
		}
	}, [employees]);

	useEffect(() => {
		if (selectedChannels.length != originalLength && sendSubmitCheck) { //meaning below code is completed
			filterSubmit();
			setSendSubmitCheck(false);
		}
	}, [selectedChannels]);

	const sendSubmit = () => {
		// console.log('sendSubmit');
		// setOriginalLength(selectedChannels.length);
		setSendSubmitCheck(true);
		if ( selectedChannels.length != 0 && selectedRequestType != '') {
			setSelectedChannels([...selectedChannels, { 
				id: selectedChannels.length + 1, 
				office_id: 1, 
				office: offices.filter((option) => option.id === selectedEmployee.office_id)[0].address,
				designation: selectedEmployee.designation
				// designation_id: employeeDetails.designation_id,
				// designation: designations.filter((option) => option.id === employeeDetails.designation_id)[0].designation
			}]);
		} else {
			setError('All fields are required.');
		}
	};

	//TODO: Catch function to stop submitting same data to the server
	//TODO: Clear data when selectedRequestType is changed

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
							<ComboboxReqAdm />
							{/* TODO: Accomodate request types with channels already (make it flexible for add or edit) */}
						</td>
					</tr>

					<tr>
						<td className="warning">
							To <span className="text-danger text-3xl">*</span> <br />
							<small>Last and final person to receive the letter request.</small>
						</td>
					
						<td>
							{/* <ComboboxEmp /> */}
							{/* { isFetchingEmp && selectedEmployee.first_name.toUpperCase() + ' ' + selectedEmployee.last_name.toUpperCase() }  */}
							{
								selectedEmployee != null ?
									<>
										{ selectedEmployee.first_name?.toUpperCase() + ' ' + selectedEmployee.last_name?.toUpperCase() }
										<br /> <span className="text-orange-800">(Default final person to receive the letter request has been pre-selected.)</span>
									</> 
									: 'Loading...'
							}
						</td>
					</tr>
					
					<tr>
						<td className="warning">
							Default Thru Channels <span className="text-danger text-3xl">*</span> <br />
							<small>Offices/persons to be sent for the letter request.</small> <br />
							<small>Add the offices/persons from first to second-to-the-last.</small>
						</td>

						<td>
							<div className="input-group grid grid-cols-12 gap-2">
								<ComboboxOffices />
								<ComboboxDesig /> 
							</div>
						</td>
					</tr>
															
					<tr>
						<td></td>
						<td>
							{ success === '' ? <button className="btn btn-primary" onClick={sendSubmit}>Save</button> : '' }
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

export default BoxContentExisting;