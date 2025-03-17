import React from "react";
import { useSelectedLetter } from "../contexts/SelectedLetterContext";

const FormHistory = ({ data }) => {

	const token = document.getElementById('container').getAttribute('token');
	const { employees } = useSelectedLetter();

	return (
		<>
			<input type="hidden" name="_token" value={token} />
			<div className="box box-default direct-chat direct-chat-default">
				<div class="box-header border">
					<h3 class="box-title">Tracking Status</h3>
				</div>
				<div class="box-body">
					<div class="direct-chat-messages h-[250px]">
						<table class="table ">
							<thead>
								<tr>
									<th>Date</th>
									<th>Concern Person</th>
									<th>Action</th>
								</tr>
							</thead>

							<col width="110" />

							<tbody>
								{
									data.length > 0 &&
									data.map((history, index) => {
										const emp = employees.filter((emp) => { if (emp.id === history.src_employee_id) return emp })[0];
										const empDisplay = emp == null ? history.src_employee_id : emp.first_name + " " + emp.last_name;
										return (
											<tr key={index}>
												<td>
													{
														new Intl.DateTimeFormat('en-US', {
															year: 'numeric', 
															month: '2-digit',
															day: '2-digit', 
															hour: '2-digit', 
															minute: '2-digit', 
															second: '2-digit'
															}).format(new Date(history.created_at))
													}
												</td>
												<td>{empDisplay}</td>
												<td>{history.action_description}</td>
											</tr>
										);
									})
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormHistory;