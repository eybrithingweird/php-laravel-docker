import * as React from 'react';
import { Pagination } from './Pagination';

import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { Loading } from './Loading';
import { useIncomingReceivedOutgoingMutation } from '../hooks/useIncomingReceivedOutgoingMutation';
import { useLetters } from '../contexts/LettersContext';
import { useUser } from '../contexts/UserContext';

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	filterWhat: string;
	dataType: string;
	openModal?: () => void;
	isLoading?: boolean;
	hidePagination?: boolean;
	hideFilter?: boolean;
	autoResetPageIndex?: boolean;
	showColumns?: any;
	isBufferEmp: boolean;
	markReceived: (id: string, isBufferEmp: boolean) => void;
}

export function DataTable<TData, TValue>({
	columns,
	data,
	filterWhat,
	dataType,
	openModal,
	isLoading,
	hidePagination,
	hideFilter,
	autoResetPageIndex = false,
	showColumns,
	isBufferEmp,
	markReceived
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	);

	// ! This code below calls the openModal function,
	// ! making some pages to open the modal when DataTable is mounted
	// ! Check other pages that use DataTable and see if error occurs opening modal
	// ? const modalHandler = openModal();

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		enableSortingRemoval: false,
		state: {
			sorting,
			columnFilters,
			// columnVisibility: {
			// 	'select': (dataType === 'incoming' ? true : false),
			// } 
			// TODO: THERE'S A PROBLEM WITH THIS FOR RECEIVED	
		},
		autoResetPageIndex: autoResetPageIndex,
	});

	// const label =
	// 	(filterWhat.split('_')[0] === 'or' ? 'OR' : filterWhat.split('_')[0]) +
	// 	' ' +
	// 	(filterWhat.split('_')[1] === 'no'
	// 		? 'number'
	// 		: filterWhat.split('_')[1]
	// 			? filterWhat.split('_')[1]
	// 			: '');

	// const placeholderLabel = `Filter ${label.trim()}...`;

	// console.log(table.getIsAllPageRowsSelected());
	// console.log(table.getIsAllRowsSelected());
	// console.log(table.getIsSomeRowsSelected());
	// console.log(table.getIsSomePageRowsSelected());
	// const { bufferEmployees } = useLetters();
	// const { user_id } = useUser();
	// const isBufferEmp = bufferEmployees.filter((emp) => emp.buffer_employee_id === user_id)[0] != null ? true : false;

	const markMultipleLettersReceived = () => {
		// const { markReceived } = useIncomingReceivedOutgoingMutation();
		const allRows = table.getSelectedRowModel().rows;
		allRows.map(async (row) => {
			await markReceived(row.original[0].id, isBufferEmp);
		});
	}

	// console.log(table.getSelectedRowModel().rows);

	return (
		<div className="col-lg-12">
			{/* {!hideFilter && (
				<div className="flex flex-none justify-between p-4">
					{hideFilter ? null : (
						<div className="w-1/2">
							<input
								type="text"
								placeholder={placeholderLabel}
								value={
									(table
										.getColumn(filterWhat)
										?.getFilterValue() as string) ?? ''
								}
								onChange={event =>
									table
										.getColumn(filterWhat)
										?.setFilterValue(event.target.value)
								}
								className="form-control"
							/> TODO: Add button icon here
						</div>
					)}
					<div className="flex flex-row-reverse">
						<button
							onClick={openModal}
							disabled={isLoading}
							className="flex h-8 flex-row items-center pl-2 pr-3 btn btn-default"
						>
							<i className="fa fa-bars fa-lg" />
						</button>
					</div>
				</div>
			)} */}
			{
				dataType === 'incoming' && (
					<div className="flex justify-start p-4">
						<div className="flex flex-row-reverse">
							<button
								disabled={ !(table.getIsSomePageRowsSelected() || table.getIsAllPageRowsSelected()) }
								className="flex flex-row items-center btn btn-primary"
								onClick={() => markMultipleLettersReceived()}
							>
								<i className="fa fa-inbox fa-lg mr-2" /> Mark All Checked Letters as Received
							</button>
						</div>
					</div>
				)
			}
			<table className="table border border-table-bordered self-center">
				<thead className="z-10 bg-iit-table-header">
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => {
								return (
									<th
										key={header.id}
										className="uppercase"
										style={{ width: `${header.getSize()}px` }}
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map(row => (
							<tr
								key={row.id}
								data-state={row.getIsSelected() && 'selected'}
								className=""
							>
								{row.getVisibleCells().map(cell => (
									<td key={cell.id} className="" style={{ width: `${cell.column.getSize()}px` }}>
										{flexRender(
											cell.column.columnDef.cell,
											cell.getContext(),
										)}
									</td>
								))}
							</tr>
						))
					) : isLoading ? (
						<tr className="hover:bg-white">
							<td
								colSpan={columns.length}
								className="h-24 items-center justify-center space-y-0 px-20 text-center"
							>
								<div className="flex items-center justify-center text-slate-800/60">
									<Loading height="30px" width="30px" />
								</div>
							</td>
						</tr>
					) : (
						<tr>
							<td
								colSpan={columns.length}
								className="h-24 text-center font-medium hover:bg-white"
							>
								No results.
							</td>
						</tr>
					)}
				</tbody>
			</table>
			{hidePagination ? null : (
				<div className="flex flex-none flex-row items-center justify-between p-4">
					<div className="font-semibold">
						{table.getFilteredSelectedRowModel().rows?.length > 0 ? (
							<>
								{table.getFilteredSelectedRowModel().rows?.length} of{' '}
								{table.getFilteredRowModel().rows?.length} row(s)
								selected
							</>
						) : (
							<>
								{table.getFilteredRowModel().rows?.length}{' '}
								{table.getFilteredRowModel().rows?.length !== 1
									? 'rows'
									: 'row'}
							</>
						)}
					</div>

					<div>
						<Pagination
							onClickPrev={() => table.previousPage()}
							onClickNext={() => table.nextPage()}
							table={table}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
