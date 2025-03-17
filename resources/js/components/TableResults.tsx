import React, { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import LetterFormAnswered from "./Mysulat/LetterFormAnswered";
import { useSelectedLetter } from "../contexts/SelectedLetterContext";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
  } from './Dropdown/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from "./DataTable";
import { LetterFormWithId } from "../api/types";
import { useUser } from "../contexts/UserContext";
import { useIncomingReceivedOutgoingMutation } from "../hooks/useIncomingReceivedOutgoingMutation";
import { useLetters } from "../contexts/LettersContext";

const TableResults = ({ type, letterForms, isFetching }) => {

	const { user_id } = useUser();

	const { 
		selectedLetterForm, 
		setSelectedLetterForm,
		openLetterForm,
		setOpenLetterForm,
		employees,
		employeesOIC,
		offices
	} = useSelectedLetter();

	const { bufferEmployees } = useLetters();
	const { markReceived } = useIncomingReceivedOutgoingMutation();

	const isBufferEmp = bufferEmployees.filter((emp) => emp.buffer_employee_id === user_id)[0] != null ? true : false;

	// console.log(letterForms);

	// useEffect(() => {
	// 	console.log(selectedLetterForm);
	// }, [selectedLetterForm]);

	// console.log(employees);

	const cols: ColumnDef<any>[] = [
		{
			id: "select",
			size: 1,
			header: ({ table }) => {
				if (type != 'incoming') return null;
				else return (
					<div className="flex justify-center">
						<input type="checkbox" 
							checked={table.getIsAllPageRowsSelected()}
							onChange={(e) => table.toggleAllPageRowsSelected(!!e.target.checked)}
							aria-label="Select all"
							className="cursor-pointer"
						/>
					</div>
				)
			},
			cell: ({ row }) => {
				if (type != 'incoming') return null;
				else return (
					<div className="flex justify-center">
						<input type="checkbox" 
							checked={row.getIsSelected()}
							onChange={(e) => row.toggleSelected(!!e.target.checked)}
							aria-label="Select row"
							className="cursor-pointer"
						/>
					</div>
				)
			},
			enableSorting: false,
			enableHiding: true,
		},
		{
			id: 'letterform_id',
			accessorKey: 'id',
			size: 40,
			header: () => {
				return <div className="flex justify-center">LR. #</div>;
			},
			cell: ({ row }) => {
				// if (row.original[1].current_employee_id != user_id) 
				return <div className="flex justify-center">{row.original[0].id}</div>;
			},
		},
		{
			accessorKey: 'subject',
			header: () => <div className="flex justify-center">Subject</div>,
			size: 110,
			cell: ({ row }) => {
				// if (row.original[1].current_employee_id != user_id)
					return <div className="flex">{
						type != 'incoming' ? 
						(<a onClick={() => { setSelectedLetterForm(row.original); setOpenLetterForm(true); }} className="cursor-pointer">
							{/* data-tooltip-id="tooltip-markreceived" data-tooltip-content="Clicking this will mark the letter as received"> */}
							
							{row.original[0].subject}
							{/* <Tooltip id="tooltip-markreceived" /> */}

						</a>):
						row.original[0].subject
					}</div>;
			},
		},
		{
			accessorKey: 'sent/received',
			header: () => <div className="flex justify-center">{type === 'outgoing' ? 'Forwarded to' : type === 'incoming' ? 'Received from' : 'Letter Owner'}</div>,
			size: 50,
			cell: ({ row }) => {
				// if (row.original[1].current_employee_id != user_id) {
					if (type === 'outgoing' && employees[0] != null) {
						// console.log(row.original[1].next_employee_id);
						// console.log(typeof row.original[1].next_employee_id);
						// console.log();
						if (!/[-]/.test(row.original[1].next_employee_id) && row.original[1].next_employee_id.length < 3){
							// console.log('should be here');
							// console.log(offices);
							const forwardedTo = offices.filter((office) => office.id === Number(row.original[1].next_employee_id))[0];
							return <div className="flex">{forwardedTo.address.toUpperCase()}</div>;
						} else {
							const forwardedTo = employees.filter((employee) => employee.id === row.original[1].next_employee_id)[0];
							return <div className="flex">{forwardedTo.first_name.toUpperCase() + ' ' + forwardedTo.last_name.toUpperCase()}</div>;
						}
					} else if (type === 'incoming' && employees[0] != null) {
						console.log(row.original);
						console.log(!/[-]/.test(row.original[1].next_employee_id));
						if (!/[-]/.test(row.original[1].current_employee_id) && row.original[1].next_employee_id.length > 3) {
							const receivedFrom = offices.filter((office) => office.id === Number(row.original[1].current_employee_id))[0];
							return <div className="flex">{receivedFrom.address.toUpperCase()}</div>;
						} else {
							const receivedFrom = employees.filter((employee) => employee.id === row.original[1].current_employee_id)[0];
							return <div className="flex">{receivedFrom.first_name.toUpperCase() + ' ' + receivedFrom.last_name.toUpperCase()}</div>;
						}
					} else if ((type === 'withdrawn' || type === 'tagged' || type === 'received') && employees[0] != null) {
						const letterOwner = employees.filter((employee) => employee.id === row.original[0].src_employee_id)[0];
						return <div className="flex">{letterOwner.first_name.toUpperCase() + ' ' + letterOwner.last_name.toUpperCase()}</div>;
					}
				// }
			},
		},
		{
			accessorKey: 'date',
			header: () => 
				<div className="flex justify-center" data-tooltip-id="tooltip-daysprocess" data-tooltip-content="From start of processing">
					Days Process
					<Tooltip id="tooltip-daysprocess" />
				</div>,
			size: 30,
			cell: ({ row }) => {
				// if (row.original[1].current_employee_id != user_id) {
					const date = new Date().valueOf();
					const dateData = new Date(row.original[0].letter_date).valueOf();
					const classNameAdd = Math.round((date - dateData) / (1000 * 60 * 60 * 24)) > 5 ? 'bg-iit-red-2' : '';
					const days = Math.round((date - dateData) / (1000 * 60 * 60 * 24));
					return ( 
						<div className={`${classNameAdd} flex justify-center`}>
							{days}
						</div>
					);
				// }
			},
		},
		{
			id: 'actions',
			size: 10,
			cell: ({ row }) => {
				// console.log(row.original);
				// if (row.original[1].current_employee_id != user_id) {
					return (
						<div className="flex flex-row justify-center font-normal uppercase">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<button className="h-8 w-8 p-0 hover:bg-iit-yellow">
										<i className="fa fa-ellipsis-v"></i>
									</button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuLabel>Actions</DropdownMenuLabel>
									<DropdownMenuSeparator />
									{ type === 'outgoing' && <DropdownMenuItem className="hover:cursor-pointer"
										onClick={() => { setSelectedLetterForm(row.original); setOpenLetterForm(true); }}>Edit</DropdownMenuItem> }

									{
										type != 'incoming' && row.original && row.original[0].id !== null && row.original[0].id !== undefined ? 
										<DropdownMenuItem className="hover:cursor-pointer"
											onClick={() => window.open(`/pdf-preview/${row.original[0].src_employee_id}/${row.original[0].id}`, 
														'_blank', "resizable=yes,width=950,height=625,top=20,scrollbars=yes,left=10")?.focus()}>
												Preview
										</DropdownMenuItem> : ''
									}

									{
										type === 'incoming' && (
											<DropdownMenuItem className="hover:cursor-pointer"
												onClick={() => { markReceived(row.original[0].id, isBufferEmp); }}>Mark as Received</DropdownMenuItem>
										)
									}
								</DropdownMenuContent>
							</DropdownMenu>

						</div>
					);
				// }
			},
		},
	];

	// const tableResults = (
		// <div className="col-lg-12">
		// 	<table className="table border border-table-bordered">
		// 		<thead className="bg-iit-table-header">
		// 			<tr align="center">
		// 				<th>LR No.</th>
		// 				<th width="40%">Subject</th>
		// 				<th>Date</th>
		// 				<th>
		// 					{
		// 						type === 'incoming' ?
		// 							'Received from' :
		// 							'Forwarded to'
		// 					}
		// 				</th>
		// 				<th data-tooltip-id="tooltip-daysprocess" data-tooltip-content="From start of processing">
		// 					Days Process
		// 					<Tooltip id="tooltip-daysprocess" />	
		// 				</th>
		// 				<th>Notes</th>
		// 			</tr>
		// 		</thead>
		// 		<tbody>
		// 			{
		// 				letterForms.length > 0
		// 					?	 
		// 						letterForms.map((letterForm) => {
		// 							const forwardedTo = employees.filter((employee) => employee.id === letterForm[1].next_employee_id)[0];
		// 							return (
		// 								<tr align="left">
		// 									<td>{letterForm[0].id}</td>
		// 									<td>
		// 										<a onClick={() => { setSelectedLetterForm(letterForm[0]); setOpenLetterForm(true); }} className="cursor-pointer">
		// 											{letterForm[0].subject}
		// 										</a>
		// 									</td>
		// 									<td>{letterForm[0].letter_date}</td>
		// 									<td>{forwardedTo.first_name.toUpperCase() + ' ' + forwardedTo.last_name.toUpperCase()}</td>
		// 									<td className={`${Math.round((new Date() - new Date(letterForm[0].letter_date)) / (1000 * 60 * 60 * 24)) > 5 ? 'bg-iit-red-2' : ''}`}>
		// 										{Math.round((new Date() - new Date(letterForm[0].letter_date)) / (1000 * 60 * 60 * 24))}
		// 									</td>
		// 									<td>{letterForm[0].notes}</td>
		// 								</tr>
		// 							);
		// 						})
		// 					: null
		// 			}	
		// 		</tbody>
		// 	</table>
		// </div>
	// );
	// console.log(selectedLetterForm[0]);
	// const isLast = selectedLetterForm[0] != null ? 
	// 				(selectedLetterForm[1].dst_employee_id[selectedLetterForm[1].dst_employee_id.length - 1] === user_id ? 
	// 				true : false) : false;
	// const isSent = selectedLetterForm[0] != null ? selectedLetterForm[0].is_sent : false;
	// console.log(isLast, isSent);
	
	return (
		<>
			{
				openLetterForm ?
					<LetterFormAnswered type={type}  /> : 
					<DataTable
						columns={cols}
						data={letterForms}
						isLoading={isFetching}
						filterWhat="id"
						hideFilter
						hidePagination={letterForms.length < 10}
						dataType={type}
						isBufferEmp={isBufferEmp}
						markReceived={markReceived}
						// showColumns={
						// 	{'select': (type === 'incoming' ? true : false)}
						// }
					/>
			}
			
		</>
	);
};

export default TableResults;