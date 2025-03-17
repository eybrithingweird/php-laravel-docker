import React from 'react';
import { Table } from '@tanstack/react-table';
// import { button } from './ui/button';
// import { ChevronsLeft, MoreHorizontal, ChevronsRight } from 'lucide-react';

interface PaginationProps {
	onClickPrev: () => void;
	onClickNext: () => void;
	table: Table<any>;
}

export const Pagination = ({
	onClickPrev,
	onClickNext,
	table,
}: PaginationProps) => {
	const currentPage = table.getState().pagination.pageIndex + 1;
	const nPages = table.getPageCount();
	const canPreviousPage = table.getCanPreviousPage();
	const canNextPage = table.getCanNextPage();
	const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

	const toNextPage = () => {
		if (canNextPage) {
			onClickNext();
		}
	};

	const toPreviousPage = () => {
		if (canPreviousPage) {
			onClickPrev();
		}
	};

	return (
		<nav key="pagination-nav">
			<ul className="flex flex-row gap-1">
				<li key="to-first">
					<button
						key="to-first-button"
						className={`gap-1 px-3 ${currentPage < 3 && 'hidden'} btn`}
						onClick={() => table.setPageIndex(0)}
					>
						{/* <ChevronsLeft key="chevrons-left" size={16} strokeWidth={2} />{' '} */}
						<i className="fa fa-chevron-left" aria-hidden="true"></i>
						<span>First</span>
					</button>
				</li>

				{pageNumbers.length > 3 && currentPage > 2 && (
					<li key="ellipsis-left" className="flex items-center p-2">
						{/* <MoreHorizontal
							key="ellipsis-left-icon"
							size={16}
							strokeWidth={1.5}
						/> */}
						<i className="fa fa-ellipsis-h" aria-hidden="true"></i>
					</li>
				)}

				{pageNumbers.map(page =>
					pageNumbers.length > 2 ? (
						<React.Fragment key={`frag-${page}`}>
							{currentPage == page ||
							currentPage - 1 == page ||
							currentPage + 1 == page ||
							(currentPage == 1 && page == currentPage + 2) ||
							(currentPage == table.getPageCount() &&
								page == currentPage - 2) ? (
								<li key={`to-${page}`}>
									<button
										key={`to-${page}-button`}
										// variant={
										// 	currentPage == page ? 'default' : 'ghost'
										// }
										className={currentPage == page ? 'btn btn-primary' : 'btn btn-default'}
										onClick={() => table.setPageIndex(page - 1)}
									>
										<span>{page}</span>
									</button>
								</li>
							) : (
								''
							)}
						</React.Fragment>
					) : (
						<li key={`to-${page}`}>
							<button
								key={`to-${page}-button`}
								// variant={currentPage == page ? 'default' : 'ghost'}
								className={currentPage == page ? 'btn btn-primary' : 'btn btn-default'}
								onClick={() => table.setPageIndex(page - 1)}
							>
								{page}
							</button>
						</li>
					),
				)}

				{pageNumbers.length > 3 &&
				canNextPage &&
				currentPage != table.getPageCount() - 1 ? (
					<li key="ellipsis-right" className="flex items-center p-2">
						{/* <MoreHorizontal
							key="ellipsis-right-icon"
							size={16}
							strokeWidth={1.5}
						/> */}
						<i className="fa fa-ellipsis-h" aria-hidden="true"></i>
					</li>
				) : (
					<li key="ellipsisNone2" className="hidden"></li>
				)}

				{/* <li key="to-next">
					<button
						key="to-next-button"
						variant="ghost"
						className={`gap-1 px-3 ${canNextPage && 'hidden'}`}
						disabled={canPreviousPage}
						onClick={toNextPage}
					>
						<ChevronRight size={16} strokeWidth={2} />{' '}
					</button>
				</li> */}

				<li key="to-last">
					<button
						key="to-last-button"
						// variant="ghost"
						className={`gap-1 px-3
						${(table.getPageCount() < 3 || table.getPageCount() - currentPage < 2) && 'hidden'} btn`}
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
					>
						<span>Last</span>{' '}
						{/* <ChevronsRight
							key="chevrons-right"
							size={16}
							strokeWidth={2}
						/> */}
						<i className="fa fa-chevron-right"></i>
					</button>
				</li>
			</ul>
		</nav>
	);
};
