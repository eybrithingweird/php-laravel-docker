import React, { useEffect, useRef, useState } from "react";
import { useCreate } from '../../contexts/CreateContext';
import ComboboxReqType from "./ComboboxReqType";
import ComboboxNames from "./ComboboxNames";
import AdditionalFields from "./AdditionalFields";
import { useCreateMutation } from "../../hooks/useCreateMutation";
import { Loading } from "../Loading";
import { TableChannels } from "./TableChannels";
import { useUser } from "../../contexts/UserContext";
import ComboboxNamesCustom from "./ComboboxNamesCustom";
import { useNavigate } from "react-router-dom";

const LetterForm = ({ token }) => {
	const navigate = useNavigate();

	const { filterSubmit, isSubmitting, success, error } = useCreateMutation();

	const {
		selectedRequestType,
		selectedChannels,
		selectedEmployee,
		addFieldsValue,
		allChannels,

		subjectValue,
		setSubjectValue,
		additionalNotes,
		setAdditionalNotes,
		supportingDocs,
		setSupportingDocs,

		resultLetterID,

		employeesOIC,
	} = useCreate();

	useEffect(() => {
		if (success != '') {
			setTimeout(() => { 
				navigate(`/mysulat`);
			}, 2000);
		}
	}, [success]);
	// const {
	// 	user_id
	// } = useUser();

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
							<td className="warning">
								Request For <span className="text-danger text-3xl">*</span>
							</td>
							<td>
								<ComboboxReqType />
							</td>
						</tr>

						<tr>
							<td className="warning">
								To <span className="text-danger text-3xl">*</span>
							</td>
						
							<td>
								<ComboboxNames />
							</td>
						</tr>
						
						<tr>
							<td className="warning">
								Thru Channel <span className="text-danger text-3xl">*</span> <br />
								<small>Offices/persons to be sent for the letter request.</small> <br />
								<small>Add the offices/persons from first to second-to-the-last.</small>
							</td>

							<td>
								{/* <div className="input_fields_wrap"> */}
									<ComboboxNamesCustom />
									
									<div className="input-group w-full grid grid-cols-12 gap-2">
										<div className="col-span-12" id="displayAddedChannels">
											<>
												{
													allChannels.length > 0 ?
														<TableChannels /> : ''
												}
											</>
										</div>
									</div>
								{/* </div> */}
							</td>
						</tr>
						
						<tr>
							<td className="warning"> SUBJECT 
								<small>(Summary of Request)</small>
								<span className="text-danger text-3xl">*</span>
							</td>
							
							<td>
								<input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" 
									disabled={selectedRequestType == '' ? true : false}
									value={subjectValue}
									onChange={(e) => setSubjectValue(e.target.value)} required />
							</td>
						</tr>

						<AdditionalFields />

						<tr>
							<td className="warning"> Additional Notes / Other Details </td>
							
							<td>
								<input type="text" name="notes" id="notes" className="form-control" placeholder="Additional Notes" 
									disabled={selectedRequestType == '' ? true : false}
									value={additionalNotes}
									onChange={(e) => setAdditionalNotes(e.target.value)} />
							</td>
						</tr>

						<tr>
							<td className="warning"> Other Supporting Documents 
								<br /> <small>(Upload it in a Google Drive and paste the link on the field)</small>
								<br /> <small className="text-danger">[Make sure that the link is accessible]</small>
							</td>
							
							<td>
								<input type="url" name="link" id="link" className="form-control" placeholder="http://drive.google.com...." 
									disabled={selectedRequestType == '' ? true : false}
									value={supportingDocs}
									onChange={(e) => setSupportingDocs(e.target.value)} />
							</td>
						</tr>
																
						<tr>
							<td></td>
							<td>
								{ success === '' && !isSubmitting ? <button className="btn btn-primary" onClick={(e) => filterSubmit(e)}>Save</button> : '' }
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

export default LetterForm;