import React, { useState, useEffect } from "react";
import { useAdmin } from "../../contexts/AdminContext";

// import { postChannels } from "../../api/Admin/api";
import { useAdminMutation } from "../../hooks/useAdminMutation";
import { Loading } from "../Loading";
import ComboboxNames from "./ComboboxNames";

import { Tooltip } from 'react-tooltip';
import "react-datepicker/dist/react-datepicker.css";
import { useUser } from "../../contexts/UserContext";

const BoxContentOC = () => {
	const token = document.getElementById('container').getAttribute('token');
	// const { requestTypes, employees, selectedEmployee, selectedEmployeeOIC } = useAdmin();
	const { employees, bufferEmpList, setBufferEmpList, isFetchingBufferEmp, selectedBufferEmployee, setSelectedBufferEmployee } = useAdmin();
	const { bufferEmployeeSubmit, isSubmitting, success, setSuccess, error, setError } = useAdminMutation();
	const { user_id } = useUser();

	// const [ bufferEmpList, setBufferEmpList ] = useState(bufferEmployees);

	// useEffect(() => {
	// 	console.log(bufferEmpList);
	// }, [bufferEmpList]);

	return (
		<>
			<input type="hidden" name="_token" value={token} />
			<form encType="multipart/form-data">
				<table className="table table-bordered" id="type" encType="multipart/form-data">
					<thead>
						<tr>
							<th className="active" colSpan="3">
								All employees listed below have access to the letters sent to the Chancellor.
								<br /> Special powers to approve or disapprove letters are available upon selection.
							</th>
						</tr>
					</thead>

					<col width="45%" /> <col width="40%" /> <col width="5%" />
					
					<tbody>
						{
							isFetchingBufferEmp && bufferEmpList[0] == null ? <Loading type={"bubbles"} height={70} width={70} /> :
								bufferEmpList.map((employee, index) => {
									return (
										<>
											<tr>
												<td id="selected_employee" className="border">
													<ComboboxNames isSelectingBuffer={true} isSelectingOIC={false} selected={employee} />
												</td>

												<td>
													<input type="radio" id={`read-only-` + index} name={`access-type-` + index}
													checked={employee.has_full_permissions === false}
													onClick={() => setBufferEmpList([...bufferEmpList].map((emp, index2) => 
														(index === index2 ? { ...emp, has_full_permissions: false } : emp)))} />
													<label htmlFor={`read-only-` + index} className="align-center">Can only read letters</label>

													<br />

													<input type="radio" id={`read-and-edit-` + index} name={`access-type-` + index}
													checked={employee.has_full_permissions === true}
													onClick={() => setBufferEmpList([...bufferEmpList].map((emp, index2) => 
														(index === index2 ? { ...emp, has_full_permissions: true } : emp)))} />
													<label htmlFor={`read-and-edit-` + index}>Can both read and approve or disapprove letters</label>
												</td>

												<td>
													<i className="fa fa-trash fa-lg text-iit-red hover:cursor-pointer mt-7" data-tooltip-id="tooltip-trash"
													data-tooltip-content="Remove Employee" key={index + '-trash'} 
													onClick={() => setBufferEmpList([...bufferEmpList.filter((emp, index3) => index != index3)])}>
														<Tooltip id="tooltip-trash" key={index + '-tooltip'} />	
													</i> 
												</td>
											</tr>

											
										</>
									);
								})
						}

						<tr>
							{
								isFetchingBufferEmp && bufferEmpList[0] == null ? '' :
									<td width="100%" colSpan="3">
										<button className="btn btn-default" 
										onClick={(e) => { e.preventDefault(); setBufferEmpList(
											[...bufferEmpList, { 
												id: bufferEmpList.length + 1, 
												buffer_employee_id: '', 
												has_full_permissions: null, 
												added_by_employee_id: user_id 
											}] 
											) }}>

											<i className="fa fa-plus mr-2"></i> Add Employee

										</button>
									</td>
							}
						</tr>
																
						<tr>
							{/* <td></td> */}
							<td width="100%" colSpan="3">
								<button className="btn btn-primary right-0" onClick={(e) => { e.preventDefault(); bufferEmployeeSubmit(); }}>Save</button>
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

export default BoxContentOC;