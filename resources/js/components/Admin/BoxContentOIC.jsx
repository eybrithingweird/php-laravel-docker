import React, { useState, useEffect } from "react";
import { useAdmin } from "../../contexts/AdminContext";

import ComboboxReqAdm from './ComboboxReqAdm';
import ComboboxEmp from './ComboboxEmp';
import ComboboxOffices from './ComboboxOffices';
import ComboboxDesig from './ComboboxDesig';

// import { postChannels } from "../../api/Admin/api";
import { useAdminMutation } from "../../hooks/useAdminMutation";
import { Loading } from "../Loading";
import ComboboxNames from "./ComboboxNames";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useUser } from "../../contexts/UserContext";

import { DataTable } from "../DataTable";
// import { ColumnDef } from "@tanstack/react-table";


const BoxContentOIC = () => {
	const token = document.getElementById('container').getAttribute('token');
	const { offices, employeesOIC, isFetchingOic, isFetchingOff, employees, selectedEmployee, selectedEmployeeOIC } = useAdmin();
	const { newOICData, setNewOICData, addOICEmployeeSubmit, isSubmitting, success, setSuccess, error, setError } = useAdminMutation();
	const { user_id } = useUser();

	useEffect(() => {
		if ( newOICData.oic_start_date != null && newOICData.oic_end_date != null ) { //meaning if below code is completed
			// addRequestTypeSubmit();
			addOICEmployeeSubmit();
			// console.log(newOICData);
		}
	}, [newOICData]);

	const sendSubmit = (e) => {
		e.preventDefault();

		console.log(document.getElementById('selected_employee').classList);
		console.log(document.getElementById('selected_oic').classList);

		if (document.getElementById('selected_employee').classList) {document.getElementById('selected_employee').classList.remove('bg-red-300');}
		if (document.getElementById('selected_oic').classList) {document.getElementById('selected_oic').classList.remove('bg-red-300');}

		setError(null);
		setSuccess('');
		if ( selectedEmployee[0] != null && selectedEmployeeOIC[0] != null && endDate - startDate >= 0 ) {
			const selectedEmp = employees.filter((option) => option.first_name.toUpperCase() + ' ' + option.last_name.toUpperCase() === selectedEmployee)[0].id;
			const selectedOIC = employees.filter((option) => option.first_name.toUpperCase() + ' ' + option.last_name.toUpperCase() === selectedEmployeeOIC)[0].id;
			setNewOICData({
				employee_id: selectedEmp,
				oic_employee_id: selectedOIC,
				oic_start_date: startDate.toLocaleDateString(),
				oic_end_date: endDate.toLocaleDateString(),
				added_by: user_id
			});
		} else {
			if (selectedEmployee[0] == null) {
				document.getElementById('selected_employee').classList.add('bg-red-300');
				setError('All fields are required.');
			}
			if (selectedEmployeeOIC[0] == null) {
				document.getElementById('selected_oic').classList.add('bg-red-300');
				setError('All fields are required.');
			}
			if (selectedEmployee === selectedEmployeeOIC) {
				document.getElementById('selected_employee').classList.add('bg-red-300');
				document.getElementById('selected_oic').classList.add('bg-red-300');
				setError('OIC and Employee cannot be the same.');
			}
		}
	};

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const cols = [
		{
			id: 'oic_of_employee_id',
			accessorKey: 'oic_of_employee_id',
			// size: 40,
			header: () => {
				return <div className="flex justify-center">Employee</div>;
			},
			cell: ({ row }) => {
				console.log(row.original);
				const emp = employees.filter((option) => option.id === row.original.oic_of_employee_id)[0];
				return <div className="flex justify-center">{emp.first_name + ' ' + emp.last_name}</div>;
				// return <div className="flex justify-center">{row.original[0].id}</div>;
			},
		},
		{
			id: 'full_name',
			// accessorKey: 'oic_of_employee_id',
			// size: 40,
			header: () => {
				return <div className="flex justify-center">Officer-in-charge</div>;
			},
			cell: ({ row }) => {
				// const emp = employees.filter((option) => option.id === row.original[0].oic_of_employee_id)[0];
				return <div className="flex justify-center">{row.original.first_name + " " + row.original.last_name}</div>;
				// return <div className="flex justify-center">{row.original[0].id}</div>;
			},
		},
		{
			id: 'office',
			// accessorKey: 'office_id',
			// size: 40,
			header: () => {
				return <div className="flex justify-center">Office</div>;
			},
			cell: ({ row }) => {
				const emp = employees.filter((option) => option.id === row.original.oic_of_employee_id)[0];
				console.log(emp);
				const office = offices.filter((option) => option.id === emp.office_id)[0];
				console.log(office);
				return <div className="flex justify-center">{office ? office.address : ''}</div>;
				// const emp = employees.filter((option) => option.id === row.original[0].oic_of_employee_id)[0];
				// return <div className="flex justify-center">{emp.first_name + ' ' + emp.last_name}</div>;
				// return <div className="flex justify-center">{row.original[0].id}</div>;
			},
		},
		{
			id: 'oic_start_date',
			accessorKey: 'oic_start_date',
			// size: 40,
			header: () => {
				return <div className="flex justify-center">Start Date</div>;
			},
			cell: ({ row }) => {
				return <div className="flex justify-center">{row.original.oic_start_date}</div>;
				// const emp = employees.filter((option) => option.id === row.original[0].oic_of_employee_id)[0];
				// return <div className="flex justify-center">{emp.first_name + ' ' + emp.last_name}</div>;
				// return <div className="flex justify-center">{row.original[0].id}</div>;
			},
		},
		{
			id: 'oic_end_date',
			accessorKey: 'oic_end_date',
			// size: 40,
			header: () => {
				return <div className="flex justify-center">End Date</div>;
			},
			cell: ({ row }) => {
				return <div className="flex justify-center">{row.original.oic_end_date}</div>;
				// const emp = employees.filter((option) => option.id === row.original[0].oic_of_employee_id)[0];
				// return <div className="flex justify-center">{emp.first_name + ' ' + emp.last_name}</div>;
				// return <div className="flex justify-center">{row.original[0].id}</div>;
			},
		},
	];

	// useEffect(() => {
	// 	setEndDate(startDate);
	// }, [startDate]);

	// console.log(employeesOIC);

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
								Employee <span className="text-danger text-3xl">*</span>
							</td>
							<td id="selected_employee" className="border">
								<ComboboxNames isSelectingOIC={false} isSelectingBuffer={false} />
							</td>
						</tr>

						<tr>
							<td className="warning">
								Officer-in-Charge <span className="text-danger text-3xl">*</span> <br />
							</td>
						
							<td id="selected_oic" className="border">
								<ComboboxNames isSelectingOIC={true} isSelectingBuffer={false} />
							</td>
						</tr>

						<tr>
							<td className="warning">
								OIC Start Date <span className="text-danger text-3xl">*</span> <br />
							</td>

							<td>
								<DatePicker
									showIcon
									selected={startDate}
									onChange={(date) => setStartDate(date)}
									icon="fa-solid fa-calendar fa-lg mt-5"
									className="flex form-control"
									minDate={new Date()}
									/>
							</td>
						</tr>

						<tr>
							<td className="warning">
								OIC End Date <span className="text-danger text-3xl">*</span> <br />
							</td>

							<td>
								<DatePicker
									showIcon
									selected={endDate}
									onChange={(date) => setEndDate(date)}
									icon="fa-solid fa-calendar fa-lg mt-5"
									className="flex form-control"
									minDate={new Date()}
									/>
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
			
			<DataTable
				columns={cols}
				data={employeesOIC}
				isLoading={isFetchingOic && isFetchingOff}
				filterWhat="id"
				hideFilter
				hidePagination={employeesOIC.length < 10}
				dataType="oic"
				isBufferEmp={false}
				markReceived={() => {}}
			/>
		</>
	);
};

export default BoxContentOIC;