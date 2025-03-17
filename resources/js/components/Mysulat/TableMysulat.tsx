import React, { useEffect, useState } from "react";
import { DataTable } from "../DataTable";
import { useMysulat } from "../../contexts/MysulatContext";
import { ColumnDef } from '@tanstack/react-table';
import { LetterFormWithId } from "../../api/types";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
  } from '../Dropdown/dropdown-menu';
import { useSelectedLetter } from "../../contexts/SelectedLetterContext";
import LetterFormAnswered from "./LetterFormAnswered";
import { useUser } from "../../contexts/UserContext";
import { Modal } from "../Modal";
import { useModal } from "../../contexts/ModalContext";
import { Loading } from "../Loading";
import FormHistory from "../FormHistory";
import { fetchFormHistory } from "../../api/Incoming/api";
import { useQuery } from "@tanstack/react-query";
// import DropdownMenu from "../DropdownMenu";

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

export default function TableMysulat() {
	const {
		letters,
		isFetchingLetters
	} = useMysulat();

	const { 
		selectedLetterForm, 
		setSelectedLetterForm,
		openLetterForm,
		setOpenLetterForm
	} = useSelectedLetter();

	const {
		user_id
	} = useUser();

	// const [ modalLoading, setModalLoading ] = useState(false);
	const { isOpen, openModal, closeModal } = useModal();
	// const [ formHistory, setFormHistory ] = useState({});
	const [ letterFormID, setLetterFormID ] = useState('');

	const cols: ColumnDef<LetterFormWithId>[] = [
		{
			id: 'letterform_id',
			accessorKey: 'id',
			size: 40,
			header: () => {
				return <div className="flex justify-center">LR. #</div>;
			},
			cell: ({ row }) => {
				return <div className="flex justify-center">{row.original[0].id}</div>;
			},
		},
		{
			accessorKey: 'subject',
			header: () => <div className="flex justify-center">Subject</div>,
			size: 100,
			cell: ({ row }) => {
				return <div className="flex">{
					<a onClick={() => { setSelectedLetterForm(row.original); setOpenLetterForm(true); }} className="cursor-pointer">
						{row.original[0].subject}
					</a>
				}</div>;
			},
		},
		{
			accessorKey: 'letter_date',
			header: () => <div className="flex justify-center">Date Created/Sent</div>,
			size: 40,
			cell: ({ row }) => {
				return <div className="flex justify-center">{row.original[0].letter_date}</div>;
			},
		},
		{
			accessorKey: 'is_sent',
			size: 20,
			header: () => <div className="flex justify-center">Is Sent?</div>,
			cell: ({ row }) => {
				return (
					<div className="flex justify-center">
						{/* <div className="flex flex-row items-center gap-2">
							{row.original.product.brand && (
								<span className="text-xs font-light">
									({row.original.product.brand})
								</span>
							)}
							<span className="text-xs font-bold">
								{row.original.product.name}
							</span>
							•
							<span className="text-xs font-medium capitalize">
								{row.original.product.size}
							</span>
							•
							<span className="text-xs font-bold uppercase">
								{row.original.product.color}
							</span>
						</div> */}
						{row.original[0].is_sent === true ? (
							<i className="fa fa-check text-iit-green mt-1" />
						) : (
							<i className="fa fa-close text-iit-red mt-1" />
						)}
					</div>
				);
			},
		},
		{
			accessorKey: 'status',
			size: 30,
			header: () => <div className="flex justify-center">Status</div>,
			cell: ({ row }) => {
				// console.log(row);
				return (
					<div className={`flex justify-center 
						${row.original[1].status.toLowerCase() === 'in progress' 
							? 'text-yellow' 
							: 
								row.original[1].status === 'approved' 
								? 'text-green' 
								: 'text-red'}`}>
						{row.original[1].status.charAt(0).toUpperCase() + row.original[1].status.slice(1)}
					</div>
				);
			},
		},
		{
			id: 'actions',
			size: 10,
			cell: ({ row }) => {
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
								<DropdownMenuItem className="hover:cursor-pointer" onClick={() => { setSelectedLetterForm(row.original); setOpenLetterForm(true); }}>
									{ row.original[0].is_sent ? 'View' : 'Edit' }
								</DropdownMenuItem>
								{
									row.original && row.original[0].id !== null && row.original[0].id !== undefined ? 
									<DropdownMenuItem className="hover:cursor-pointer"
										onClick={() => window.open(`/pdf-preview/${row.original[0].src_employee_id}/${row.original[0].id}`, 
													'_blank', "resizable=yes,width=950,height=625,top=20,scrollbars=yes,left=10")?.focus()}>
											Preview
									</DropdownMenuItem> : ''
								}
							</DropdownMenuContent>
						</DropdownMenu>

					</div>
				);
			},
		},
	];

	return (
		<div className="">
			{
				openLetterForm ?
					<LetterFormAnswered type={'mysulat'} /> :
					<DataTable
						columns={cols}
						data={letters}
						isLoading={isFetchingLetters}
						filterWhat="id"
						hideFilter
						hidePagination={letters.length < 10}
						dataType="mysulat"
						isBufferEmp={false}
						markReceived={() => {}}
					/>
			}
		</div>
	);
}
// TODO: Add cancel function in all Mysulat letters