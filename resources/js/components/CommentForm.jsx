import React, { useState } from "react";
import { useIncomingReceivedOutgoingMutation } from "../hooks/useIncomingReceivedOutgoingMutation";
import { useUser } from "../contexts/UserContext";
import { useSelectedLetter } from "../contexts/SelectedLetterContext";
import userLogo from '../../user.png';
import { Tooltip } from "react-tooltip";
// import Mentions from 'rc-mentions';
import { MentionsInput, Mention } from 'react-mentions';
import { useLetters } from "../contexts/LettersContext";

const CommentForm = ({ data }) => {

	const token = document.getElementById('container').getAttribute('token');

	const { addCommentLetterSubmit } = useIncomingReceivedOutgoingMutation();
	const { user_id } = useUser();

	const { selectedLetterForm, employees } = useSelectedLetter();
	const { bufferEmployees } = useLetters();
	const letterFormID = selectedLetterForm[0].id;

	// console.log(selectedLetterForm);
	// console.log(selectedLetterForm[0].src_employee_id == user_id);

	const [ comment, setComment ] = useState('');
	const isBufferEmp = bufferEmployees.filter((emp) => emp.buffer_employee_id === user_id)[0] != null ? true : false;

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(document.getElementById('message').value);
		// const message = comment;
		console.log(comment);
		const splitMessage = comment.split('@');
		var arrEmpPush = [];
		console.log(splitMessage);
		splitMessage.map((section) => {
			// console.log(section);
			if (section.startsWith('[')) {
				// const employee = employees.filter((option) => option.first_name.toUpperCase() + ' ' + option.last_name.toUpperCase() === section.slice(1))[0];
				// if (employee != null) {
				// 	const employeeID = employee.id;
				// 	const employeeName = employee.first_name + ' ' + employee.last_name;
				// 	// console.log(employeeID);
				// }
				const splitSection = section.split('(');
				const secondSplitSection = splitSection[1].split(')');
				console.log(secondSplitSection);
				// const employeeID = splitSection[1].slice(0, -1);
				// console.log(splitSection);
				arrEmpPush.push(secondSplitSection[0]);
			}
		});
		console.log(arrEmpPush);
		if (selectedLetterForm[0].src_employee_id == user_id) {
			const sendData = {
				'comment': comment,
				'src_employee_id': user_id,
				'hidden_from_requester': false,
				'tagged_employee_id': arrEmpPush
			};
			document.getElementById('message').value = '';
			setComment('');
			addCommentLetterSubmit(letterFormID, sendData, isBufferEmp);
		} else {
			const isHidden = document.getElementById('hidden').checked;
			// console.log(isHidden);
			const sendData = {
				'comment': comment,
				'src_employee_id': user_id,
				'hidden_from_requester': isHidden,
				'tagged_employee_id': arrEmpPush
			};
			document.getElementById('message').value = '';
			document.getElementById('hidden').checked = false;
			setComment('');
			addCommentLetterSubmit(letterFormID, sendData, isBufferEmp);
		}
	}

	const defaultStyle=
		{
			control: {
				fontSize: 14,
				fontWeight: 'normal',
				boxSizing: 'border-box',
			},
		  
			'&singleLine': {
				position: 'relative',
				zIndex: 2,
				float: 'left',
				width: '100%',
				marginBottom: 0,
				height: '34px',
				padding: '6px 12px',
				borderColor: '#d2d6de',
				boxSizing: 'border-box',
				input: {
					borderColor: '#d2d6de',
					padding: '6px 12px',
					fontSize: '14px',
					lineHeight: '1.42857143',
					color: '#555',
					border: '1px solid #ccc',
					outline: 0,
				},
			},
		  
			suggestions: {
				list: {
					backgroundColor: 'white',
					fontSize: 14,
				},
				item: {
					padding: '5px 15px',
					borderBottom: '1px solid rgba(0,0,0,0.15)',
					'&focused': {
						backgroundColor: '#cee4e5',
					},
				},
			},
		  }

	return (
		<>
			<input type="hidden" name="_token" value={token} />
			<div className="box box-default direct-chat direct-chat-default">
				<div className="box-header border" id="service-container">
					<h3 className="box-title">Comment(s)/Recommendation(s)</h3>
					<form encType="multipart/form-data">
						<div className="grid grid-cols-12">
							<MentionsInput 
								name="message" id="message" 
								style={defaultStyle}
								singleLine={true}
								placeholder="Type Message ..." 
								value={comment} onChange={(e) => setComment(e.target.value)}
								className="col-span-11"
								allowSpaceInQuery={true}>

								<Mention
									markup="@[__display__](__id__)"
									trigger="@"
									data={employees}
									style={{backgroundColor: '#cee4e5'}}
								/>
							</MentionsInput>

							<span className="input-group-btn">
								<button name="btnSend" className="btn btn-default btn-flat" onClick={handleSubmit}>
									<i className="fa fa-paper-plane" aria-hidden="true"></i>
								</button>
							</span>
						</div>

						{
							selectedLetterForm[0].src_employee_id != user_id && (
								<span className="flex justify-center mt-2">
									<span className="grid place-items-center">
										<input type="checkbox" className="z-10 col-start-1 row-start-1 relative !mt-0 peer flex shrink-0 appearance-none w-6 h-6 border-[1px] border-black rounded bg-transparent checked:bg-orange-700 cursor-pointer" name="hidden" id="hidden" />
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="z-20 col-start-1 row-start-1 size-6 opacity-0 peer-checked:opacity-100 pointer-events-none">
											<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
										</svg>
									</span>

									<label htmlFor="hidden" className="!mb-0 ml-2 font-normal cursor-pointer"> Make the comment hidden from the requester </label>
								</span>
							)
						}
					</form>
				</div>

				<div className="box-body">
					<div className="direct-chat-messages h-[250px]">

						{
							data.length > 0 &&
							data.map((comment, index) => {
								const srcEmp = employees.filter((emp) => { if (emp.id === comment.src_employee_id) return emp })[0];
								if ( comment.hidden_from_requester && selectedLetterForm[0].src_employee_id === user_id ) { return; }
								else {
									console.log(comment);
									const commentSplit = comment.comment.split('@');
									var arrCommentPush = [];
									commentSplit.map((section) => {
										if (section.startsWith('[')) {
											const firstSplit = section.split(']');
											const empName = firstSplit[0].substring(1);

											const secondSplit = firstSplit[1].split(')');
											const trailingMessage = secondSplit[1];

											arrCommentPush.push(
												<>
													<span style={{backgroundColor: '#cee4e5'}}>{empName}</span>
													<span>{trailingMessage}</span>
												</>
											)
										} else {
											arrCommentPush.push(section);
										}
									});
									
									return (
										<div className={`direct-chat-msg right ${comment.hidden_from_requester ? "opacity-70" : ""}`} key={index} 
											data-tooltip-id={comment.hidden_from_requester ? "tooltip-hiddeninfo" : ''} 
											data-tooltip-content={comment.hidden_from_requester ? "This comment is hidden from requester." : ''}>
											
											{comment.hidden_from_requester && ( <Tooltip id="tooltip-hiddeninfo" className="!z-20 !opacity-100" /> ) }

											<div className="direct-chat-info clearfix">
												<span className="direct-chat-name pull-right">{srcEmp.first_name + " " + srcEmp.last_name}</span>
												<span className="direct-chat-timestamp pull-left">
													{
														new Intl.DateTimeFormat('en-US', {
															year: 'numeric', 
															month: '2-digit',
															day: '2-digit', 
															hour: '2-digit', 
															minute: '2-digit', 
															second: '2-digit'
															}).format(new Date(comment.created_at))
													}
												</span>
											</div>
											<img className="fa fa-user direct-chat-img" alt="message user image" src={userLogo} />
											<div className="direct-chat-text">
												{
													arrCommentPush
												}
											</div>

										</div>
									);
								}
							})
						}

						{/* <div className="direct-chat-msg right">
							<div className="direct-chat-info clearfix">
								<span className="direct-chat-name pull-right">Abe Apao</span>
								<span className="direct-chat-timestamp pull-left">01/13/2025 10:39 AM</span>
							</div>

							<img className="direct-chat-img"
								src="http://x4150idp.msuiit.edu.ph/images/employees/timthumb.php?src=2024-308&h=50&w=50&zc=1&q=50"
								alt="message user image" />
							<div className="direct-chat-text">test</div>
						</div> */}

					</div>
				</div>
			</div>
		</>
	);
};

export default CommentForm;