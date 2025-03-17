import React, { useEffect, useRef, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { Loading } from "../Loading";
import { fetchAddFields, fetchCommentLetter, fetchBufferEmployees, fetchFormHistory } from "../../api/Incoming/api";
import AdditionalFieldsAnswered from "../Letters/AdditionalFieldsAnswered";
import ConvertToFromEdit from "../Letters/ConvertToFromEdit";
import { useSelectedLetter } from "../../contexts/SelectedLetterContext";
import { fetchFormStatus } from "../../api/Mysulat/api";
import { Modal } from "../Modal";
import { useModal } from "../../contexts/ModalContext";
import { useIncomingReceivedOutgoingMutation } from "../../hooks/useIncomingReceivedOutgoingMutation";
import { useUser } from "../../contexts/UserContext";
import CommentForm from "../CommentForm";
import PDFPreview from "../PDFPreview";
import FormHistory from "../FormHistory";
import { Tooltip } from "react-tooltip";
import { useLetters } from "../../contexts/LettersContext";

const LetterFormAnswered = ({ type }) => {

	const token = document.getElementById('container').getAttribute('token');

	const { user_id } = useUser();

	const { 
		requestTypes,
		employees,
		isFetchingEmp,
		employeesOIC,
		isFetchingOic,
		offices,
		isFetchingOff,
		selectedLetterForm, 
		setSelectedLetterForm,
		openLetterForm,
		setOpenLetterForm
	} = useSelectedLetter();
	const { bufferEmployees } = useLetters();
	const isBufferEmp = bufferEmployees.filter((emp) => emp.buffer_employee_id === user_id)[0] != null ? true : false;

	const letterFormID = selectedLetterForm[0].id;
	console.log(letterFormID);
	console.log(employeesOIC);

	const letterOwner = employees.find((emp) => emp.id === selectedLetterForm[0].src_employee_id);
	const LetterOwnerName = letterOwner.first_name.toUpperCase() + ' ' + letterOwner.last_name.toUpperCase()
	const isSent = selectedLetterForm[0].is_sent;
	const isLast = selectedLetterForm != null ? 
			(selectedLetterForm[1].dst_employee_id[selectedLetterForm[1].dst_employee_id.length - 1][1] === user_id || 
			selectedLetterForm[1].next_employee_id === selectedLetterForm[1].dst_employee_id[selectedLetterForm[1].dst_employee_id.length - 1][1] ? 
				true : false) : false;
	const isOic = employeesOIC.filter((emp) => emp.id === user_id)[0] != null ? true : false;
	const isApprovable = requestTypes.filter((type) => type.id === selectedLetterForm[0].request_type_id)[0].is_approvable_by_oic;
	const [hasOic, setHasOic] = useState(false);
	const [oicOC, setOicOC] = useState({});

	console.log(isApprovable);

	const [ channels, setChannels ] = useState({});
	const [ finalChannel, setFinalChannel ] = useState('');

	const [ numberTimesClicked, setNumberTimesClicked ] = useState(0);

	// const [oicEmployees, setOicEmployees] = useState([]);
	
	useEffect(() => {
		if (selectedLetterForm[0] != null) {
			setChannels(selectedLetterForm[1].dst_employee_id);
			console.log(selectedLetterForm[1].dst_employee_id);
			const finalEmp = 
				employees.filter((employee) => {
					const last = selectedLetterForm[1].dst_employee_id[selectedLetterForm[1].dst_employee_id.length - 1];
					// if (ty)
					if (typeof last === 'string'){
						if (employee.id === last){
							return employee;
						}
					} else {
						if (employee.id === last[last.length - 1]){
							return employee;
						}
					}
					// if (employee.id === selectedLetterForm[1].dst_employee_id[selectedLetterForm[1].dst_employee_id.length - 1]){
					// 	return employee;
					// }
				});
			setFinalChannel(finalEmp[0].first_name.toUpperCase() + ' ' + finalEmp[0].last_name.toUpperCase());
			// console.log(employeesOIC);
			const oicCheck = employeesOIC.filter((emp) => emp.oic_of_employee_id === finalEmp[0].id)[0];
			// console.log(oicCheck);
			if (oicCheck != null) {
				setHasOic(oicCheck != null ? true : false);
				setOicOC(oicCheck.first_name.toUpperCase() + ' ' + oicCheck.last_name.toUpperCase());
			}
			// const oicOfOC = employees.filter((emp) => emp.id === oicCheck.oic_employee_id)[0];
		}
	}, [selectedLetterForm]);

	const [ addFields, setAddFields ] = useState({});
	const [ comments, setComments ] = useState({});
	const [ formHistory, setFormHistory ] = useState({});
	// const [employeesOIC, setEmployeesOIC] = useState([]);

	// const [ letterFrom, setLetterFrom ] = useState('');
	const [ modalLoading, setModalLoading ] = useState(false);
	const { isOpen, openModal, closeModal } = useModal();
	const [ loading, setLoading ] = useState(false);
	const { sendLetterSubmit, cancelLetterSubmit, updateUrgentLetterForm, finalLetterSubmit } = useIncomingReceivedOutgoingMutation();

	const [ finalStep, setFinalStep ] = useState('');

	// Form additional fields query
	const { isFetching: isFetchingAddFields, data: addFieldsQuery } = useQuery({
		queryKey: ['form-addfields'],
		queryFn: () => fetchAddFields(letterFormID),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const addFieldsData = addFieldsQuery;
		if (addFieldsData) {
			console.log(addFieldsData);
			setAddFields(addFieldsData);
		}
	}, [addFieldsQuery]);

	// Form comments query
	const { isFetching: isFetchingComments, data: commentLetterQuery } = useQuery({
		queryKey: ['comments'],
		queryFn: () => fetchCommentLetter(letterFormID),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const commentLetter = commentLetterQuery;
		if (commentLetter) {
			setComments(commentLetter);
		}
	}, [commentLetterQuery]);

	// Form history query
	const { isFetching: isFetchingHistory, data: formHistoryQuery } = useQuery({
		queryKey: ['form_history'],
		queryFn: () => fetchFormHistory(letterFormID),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const formHistory = formHistoryQuery;
		if (formHistory) {
			console.log(formHistory);
			setFormHistory(formHistory);
		}
	}, [formHistoryQuery]);

	

	// // Channel status query
	// const { isFetching: isFetchingFormStatus, data: formStatusQuery } = useQuery({
	// 	queryKey: ['form-status'],
	// 	queryFn: () => fetchFormStatus(letterFormID),
	// 	refetchOnWindowFocus: false,
	// });

	// useEffect(() => {
	// 	const formStatusData = formStatusQuery;
	// 	console.log(formStatusData);
	// 	if (formStatusData) {
	// 		console.log(formStatusData.dst_employee_id);
	// 		setChannels(formStatusData.dst_employee_id);

	// 		const finalChannel = 
	// 			employees.filter((employee) => {
	// 				if (employee.id === formStatusData.dst_employee_id[formStatusData.dst_employee_id.length - 1]){
	// 					return employee;
	// 				}
	// 			});
	// 		setFinalChannel(finalChannel[0].first_name.toUpperCase() + ' ' + finalChannel[0].last_name.toUpperCase());
	// 		// setLetterFrom()
	// 	}
	// }, [formStatusQuery]);
	
	// useEffect(() => {
	// 	console.log(channels.dst_employee_id.length);
	// }, [channels]);

	const innerArrayMapping = (channel, count) => {
		const result = channel.map((chan, index) => {
			const emp = employees.filter((emp) => emp.id === chan)[0];
			const office = offices.filter((off) => off.id === emp.office_id)[0];
			const empOic = employeesOIC.filter((option) => { console.log(option); return option.id === emp.id })[0];
			if (empOic) { var oicFor = employees.filter((option) => { return option.id === empOic.oic_of_employee_id })[0]; }
			return (
				<tr className="grid grid-cols-subgrid col-span-12">
					<td className="grid grid-cols-subgrid col-span-1 text-center">{count + 1}.{index + 1}</td>
					<td className="grid grid-cols-subgrid col-span-5" data-tooltip-id={`tooltip-officename` + index} data-tooltip-content={office.address}>
						{office.initials} ({!empOic ? emp.designation : <>{oicFor.designation}, <strong>OIC</strong></>}) 
						<Tooltip id={`tooltip-officename` + index} className="!z-20" /> 
					</td>
					<td className="grid grid-cols-subgrid col-span-5">
						{emp.prenominal_title + ' ' + emp.first_name + ' ' + emp.last_name} 
						{emp.postnominal_title != '' && ', ' + emp.postnominal_title}
						&nbsp;{empOic ? <u>(Officer-in-charge)</u> : ''}
					</td>
				</tr>
			);
		});
		return result;
	}
	// const sendLetter =() => {
	// 	openModal();
	// }

	console.log(selectedLetterForm);

	// console.log(isLast, isSent);

	return (
		<>
			<div className="col-lg-8 has-table" id="lr-infos">
				<input type="hidden" name="_token" value={token} />
				
				{/* <form encType="multipart/form-data"> */}
					<table className="table table-bordered" id="type" encType="multipart/form-data">
						<thead>
							<tr className="active">
								<th colSpan="2">
									<span className="pull-right">
										<button name="backBtn" className="btn btn-default" onClick={() => {setOpenLetterForm(false); setAddFields({}); }}>
											<i className="fa fa-arrow-left"></i> Back
											{/* TODO: Please don't forget onClick function here */}
											{/* TODO: Do we remove this???? */}
										</button>
									</span>

									{/* <span className="text-success">Letter form successfully saved as draft.</span> */}
									{isSent ? '' : (
										<>
											<br /> You can still edit this letter form. 
											<br /> <span className="text-danger"> After sending this letter form, you will no longer be able to edit it.</span>
										</>) }

									{ isBufferEmp ? (
										<>
											{/* <br /> <button className="text-danger"> Mark as Urgent </button> */}
											<div className="flex justify-start">
												<div className="flex flex-row-reverse">
													<button
														className={`flex flex-row items-center btn ${
															numberTimesClicked === 0 ? 
																	(selectedLetterForm[0].is_urgent ? 'btn-primary' : 'btn-danger') : 
																	(numberTimesClicked % 2 === 0 ? 
																		(selectedLetterForm[0].is_urgent ? 'btn-primary' : 'btn-danger') :
																		(selectedLetterForm[0].is_urgent ? 'btn-danger' : 'btn-primary') )
														}`}
														onClick={() => { 
															setNumberTimesClicked(numberTimesClicked + 1);
															setLoading(true); 
															updateUrgentLetterForm(selectedLetterForm[0].id, 
																{
																	is_urgent: 
																		numberTimesClicked === 0 ? 
																			!selectedLetterForm[0].is_urgent :
																			(numberTimesClicked % 2 === 0 ? 
																				!selectedLetterForm[0].is_urgent :
																				selectedLetterForm[0].is_urgent)
																}, 
																setLoading); 
														}}
													>
														<i className={`fa ${ 
																numberTimesClicked === 0 ? 
																	(selectedLetterForm[0].is_urgent ? 'fa-bell-slash' : 'fa-bell') : 
																	(numberTimesClicked % 2 === 0 ? 
																		(selectedLetterForm[0].is_urgent ? 'fa-bell-slash' : 'fa-bell') :
																		(selectedLetterForm[0].is_urgent ? 'fa-bell' : 'fa-bell-slash') )
															}
															${loading ? 'fa-shake' : ''} fa-lg mr-2`} /> 

															{
																numberTimesClicked === 0 ? 
																	(selectedLetterForm[0].is_urgent ? 'Mark Letter as Not Urgent' : 'Mark Letter as Urgent') : 
																	(numberTimesClicked % 2 === 0 ? 
																		(selectedLetterForm[0].is_urgent ? 'Mark Letter as Not Urgent' : 'Mark Letter as Urgent') :
																		(selectedLetterForm[0].is_urgent ? 'Mark Letter as Urgent' : 'Mark Letter as Not Urgent') )
															}
													</button>
												</div>
											</div>
									</>) : '' }

									{
										isSent && isLast ? (
											<div className="flex justify-start">
												<div className="flex flex-row-reverse">
													{
														selectedLetterForm[0].is_urgent ? (
															<span className="mt-3 text-red font-bold">Marked as Urgent</span>
														) : (
															<span className="mt-3 text-blue font-bold">Not marked as urgent</span>
														)
													}
												</div>
											</div>
										) : ''
									}
								</th>
							</tr>
						</thead>

						<col width="30" /><col width="100" />

						<tbody>
							<tr>
								<td className="warning">
									Letter Request (LR) No.
								</td>
								<td>
									{selectedLetterForm[0].id}
								</td>
							</tr>
							
							<tr>
								<td className="warning">
									Date
								</td>

								<td>
									{selectedLetterForm[0].letter_date}
								</td>
							</tr>

							<tr>
								<td className="warning">
									From
								</td>

								<td>
									{LetterOwnerName}
								</td>
							</tr>

							<tr>
								<td className="warning">
									To
								</td>

								<td>
									{finalChannel} {hasOic ? (<strong>(OIC: {oicOC})</strong>) : ''}
								</td>
							</tr>

							<tr>
								<td className="warning">
									Through
								</td>

								<td>
									<table className="grid grid-cols-12 p-1">
										<thead className="grid grid-cols-subgrid col-span-12 gap-2">
											<tr className="grid grid-cols-subgrid col-span-12">
												<th className="grid grid-cols-subgrid col-span-1 text-center">Step #</th>
												<th className="grid grid-cols-subgrid col-span-5">Office (Designation)</th>
												<th className="grid grid-cols-subgrid col-span-5">Person</th>
											</tr>
										</thead>

										<tbody className="grid grid-cols-subgrid col-span-12 gap-2">
											{
												channels.length != null ?
													channels.map((channel, index) => {
														if (index != channels.length - 1) {
															if (typeof(channel) !== 'string' ) {
																return innerArrayMapping(channel, index);
															} else {
																const emp = employees.filter((emp) => emp.id === channel)[0];
																console.log(emp);
																const empOic = employeesOIC.filter((option) => { 
																	console.log(option.oic_of_employee_id, emp.id); 
																	return option.oic_of_employee_id === emp.id 
																})[0];
																// const office = empOic != null ? offices.filter((off) => off.id === emp.office_id)[0];
																console.log(empOic);
																if (empOic) { 
																	var oicFor = employees.filter((option) => { return option.id === empOic.oic_of_employee_id })[0];
																	var nameDisplay = empOic.prenominal_title + ' ' + empOic.first_name + ' ' + empOic.last_name + '' + (empOic.postnominal_title != '' ? ', ' + empOic.postnominal_title : '');
																} else {
																	var nameDisplay = emp.prenominal_title + ' ' + emp.first_name + ' ' + emp.last_name + '' + (emp.postnominal_title != '' ? ', ' + emp.postnominal_title : '');
																}
																const office = empOic != null ? offices.filter((off) => off.id === oicFor.office_id)[0] : offices.filter((off) => off.id === emp.office_id)[0];
																// const nameDisplay = 
																// 	empOic ?
																// 		empOic.prenominal_title + ' ' + empOic.first_name + ' ' + empOic.last_name + ' ' +
																// 		empOic.postnominal_title != '' && ', ' + empOic.postnominal_title :

																// 		emp.prenominal_title + ' ' + emp.first_name + ' ' + emp.last_name + ' ' +
																// 		emp.postnominal_title != '' && ', ' + emp.postnominal_title;
																console.log(nameDisplay);
																return (
																	<tr className="grid grid-cols-subgrid col-span-12">
																		<td className="grid grid-cols-subgrid col-span-1 text-center">{index + 1}</td>
																		<td className="grid grid-cols-subgrid col-span-5" data-tooltip-id={`tooltip-officename` + index} data-tooltip-content={office.address}>
																			{office.initials} ({!empOic ? emp.designation : <>{oicFor.designation}, <strong>OIC</strong></>}) 
																			<Tooltip id={`tooltip-officename` + index} /> 
																		</td>
																		<td className="grid grid-cols-subgrid col-span-5" data-tooltip-id={`tooltip-oic` + index} data-tooltip-content={oicFor != null ? 'OIC for ' + oicFor.first_name + ' ' + oicFor.last_name : ''}>
																			{ nameDisplay }
																			<Tooltip id={`tooltip-oic` + index} /> 
																			
																			{/* &nbsp;{empOic ? <u>(Officer-in-charge)</u> : ''} */}
																		</td>
																	</tr>
																)
															}
														}
													}) : <Loading type={"bubbles"} height={70} width={70} />
											}
										</tbody>
									</table>
								</td>
							</tr>
							
							<tr>
								<td className="warning"> SUBJECT 
									<small>(Summary of Request)</small>
								</td>
								
								<td>
									{ isSent ? selectedLetterForm[0].subject : 
										<ConvertToFromEdit data={selectedLetterForm[0].subject} type="text" label="subject"
										additionalField={false} key={0} /> }
								</td>
							</tr>

							{/* <AdditionalFields /> */}

							{
								isFetchingAddFields ?
									<Loading type={"bubbles"} height={70} width={70} /> : 
										addFields.length > 0 ? <AdditionalFieldsAnswered additionalFields={addFields} is_sent={isSent} /> : ''
							}

							<tr>
								<td className="warning"> Additional Notes / Other Details </td>
								
								<td>
									{ isSent ? selectedLetterForm[0].notes : 
										<ConvertToFromEdit data={selectedLetterForm[0].notes} type="text" label="notes"
										additionalField={false} key={0} /> }
								</td>
							</tr>

							<tr>
								<td className="warning"> Other Supporting Documents 
									<br /> <small className="text-danger">If the link is inaccessible, contact the owner of the letter.</small>
								</td>
								
								<td>
									{ isSent ? selectedLetterForm[0].supporting_docu : 
										<ConvertToFromEdit data={
										selectedLetterForm[0].supporting_docu === '' ? 
											'No document uploaded.' : 
											<a onClick={() => window.open(selectedLetterForm[0].supporting_docu, '_blank').focus()}>
												{selectedLetterForm.supporting_docu}
											</a>
										} type="file" label="supporting_docu" additionalField={false} key={0} /> }
								</td>
							</tr>
						</tbody>
					</table>

					<span className="flex flex-row space-x-1 justify-end mb-4">
						<button id="btnPrint" name="btnPrint" 
						onClick={() => window.open(`/pdf-preview/${selectedLetterForm[0].src_employee_id}/${selectedLetterForm[0].id}`, 
												'_blank', "resizable=yes,width=950,height=625,top=20,scrollbars=yes,left=10").focus()} 
						type="submit" className="btn btn-primary">
						
						{/* 'lr-print.php?lrno=202501002' ,'resizable=yes,width=950,height=625,top=20,scrollbars=yes,left=10' */}

							<i className="fa fa-print" aria-hidden="true"></i> Preview
							
						</button>
						{isSent && !isLast && selectedLetterForm[1].status != 'withdrawn' && selectedLetterForm[1].status != 'cancelled' ? 
						<button name="btnCancel" type="submit" className="btn btn-danger" onClick={() => openModal('cancel')}>
							<i className="fa fa-close" aria-hidden="true"></i> Cancel
						</button> : '' }
						{isLast ? 
							(isOic && isApprovable) ?
								<button id="btnAction" name="btnAction" type="submit" className="btn btn-success" onClick={() => openModal('final')}>
									<i className="fa fa-flag-checkered" aria-hidden="true"></i> Final Action
								</button> : '' 
							: 
								(type === 'mysulat' && isSent) ? '' :
								(type != 'outgoing' && type != 'withdrawn' && type != 'cancelled') && 
									( <button id="btnForward" name="btnForward" type="submit" className="btn btn-success" onClick={() => openModal('forward')}> 
										<i className="fa fa-paper-plane" aria-hidden="true"></i> Forward
									</button>) }
					</span>
				{/* </form> */}
			</div>

			<Modal 
				title={modalLoading ? 'Sending Letter...' : null} 
				isOpen={isOpen === 'forward'} 
				onClose={() => closeModal} 
				closeButton={false}>
					{modalLoading ? (<Loading type={"bubbles"} height={70} width={70} />) : 
					(<>
						<span>
							Are you sure you want to send this letter? <br />
							{!isSent && <span className="text-danger">You can no longer be able to make changes to this letter after sending it.</span>}
						</span>

						<span className="text-end space-x-1">
							<button name="btnCancel" type="submit" className="btn btn-danger" onClick={closeModal}>
								<i className="fa fa-close" aria-hidden="true"></i> Cancel
							</button>
							<button name="btnSend" type="submit" className="btn btn-success" 
							onClick={() => {setModalLoading(true); sendLetterSubmit(selectedLetterForm[0], isBufferEmp);}}>
								<i className="fa fa-paper-plane" aria-hidden="true"></i> Send
							</button>
						</span>
					</>)}
			</Modal>

			<Modal
				title={modalLoading ? 'Cancelling Letter...' : null} 
				isOpen={isOpen === 'cancel'} 
				onClose={() => closeModal} 
				closeButton={false}>
					{modalLoading ? (<Loading type={"bubbles"} height={70} width={70} />) : 
					(<>
						<span>
							Are you sure you want to cancel this letter? <br />
							{/* <span className="text-danger">You can no longer be able to edit this letter after sending it.</span> */}
						</span>

						<span className="text-end space-x-1">
							<button name="btnNvm" type="submit" className="btn btn-primary" onClick={closeModal}>
								<i className="fa fa-comment" aria-hidden="true"></i> Never mind
							</button>
							<button name="btnSend" type="submit" className="btn btn-danger" 
							onClick={() => {setModalLoading(true); cancelLetterSubmit(selectedLetterForm[0], closeModal, isBufferEmp);}}>
								<i className="fa fa-close" aria-hidden="true"></i> Cancel
							</button>
						</span>
					</>)}
			</Modal>

			<Modal
				title={modalLoading ? 'Final Action...' : null} 
				isOpen={isOpen === 'final'} 
				onClose={() => closeModal} 
				closeButton={false}>
					{modalLoading ? (<Loading type={"bubbles"} height={70} width={70} />) : 
					(<>
						<span className="font-bold">
							Please select action: <br />
							{/* <span className="text-danger">You can no longer be able to edit this letter after sending it.</span> */}
						</span>

						<span>
							<input type="radio" id="for_approve" name="final_action" value="Approved" onClick={() => setFinalStep('approved')} />
							<label htmlFor="for_approve" className="font-normal cursor-pointer">Approve</label><br />
							<input type="radio" id="for_disapprove" name="final_action" value="Disapproved" onClick={() => setFinalStep('disapproved')} />
							<label htmlFor="for_disapprove" className="font-normal cursor-pointer">Disapprove</label><br />
							<input type="radio" id="for_recommendation" name="final_action" value="For recommendation" onClick={() => setFinalStep('for recommendation')} />
							<label htmlFor="for_recommendation" className="font-normal cursor-pointer">For evaluation and recommendation</label><br />
							<input type="radio" id="for_action" name="final_action" value="For evaluation" onClick={() => setFinalStep('for evaluation')} />
							<label htmlFor="for_action" className="font-normal cursor-pointer">For evaluation and final action</label>
						</span>

						<div className="mb-3">
							<label className="form-label">Comment</label>
							<textarea className="form-control" id="final_action_comment" name="final_action_comment" placeholder="Optional comment here.."></textarea>
						</div>

						<span className="text-end space-x-1">
							<button name="btnCancel" type="submit" className="btn btn-danger" onClick={closeModal}>
								<i className="fa fa-close" aria-hidden="true"></i> Cancel
							</button>
							<button name="btnSend" type="submit" className="btn btn-success" 
							onClick={() => {setModalLoading(true); finalLetterSubmit(selectedLetterForm[0], closeModal, finalStep); }}>
								<i className="fa fa-envelope" aria-hidden="true"></i> Confirm
							</button>
						</span>

						{/* <div class="mb-3">
							<p>Please select action:</p>
							
						</div> */}
					</>)}
			</Modal>

			<div className="col-lg-4">
				<CommentForm data={comments} />

				<FormHistory data={formHistory} />
			</div>
		</>
	);
};

export default LetterFormAnswered;