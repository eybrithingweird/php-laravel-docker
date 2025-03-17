import React, { useEffect, useRef, useState } from "react";
import TableResults from "../TableResults";
import { SelectedLetterProvider } from "../../contexts/SelectedLetterContext";
// import { useOutgoing } from "../../contexts/OutgoingContext";
import { useLetters } from "../../contexts/LettersContext";

const BoxContentOutgoing = ({token}) => {
	const type = 'outgoing';
	const {
		isFetchingOutgoing,

		isLoadingSearching,
		filteredLettersOutgoing,
		filterLettersOutgoing,
		clearFiltersOutgoing,
		letterNumber,
		setLetterNumber,
		subject,
		setSubject,
		month,
		setMonth,
		year,
		setYear
	} = useLetters();

	// console.log(filteredLetters);

	return (
		<>
			<SelectedLetterProvider>
				<div className="panel panel-default"> 
					<div className="panel-body">
						<div className="table-responsive">
							<input type="hidden" name="_token" value={token} />

							<div className="flex space-x-3 form-inline">
								<strong className="text-danger pt-2"><span>Search »</span></strong> 
								<input type="text" className="form-control" name="lrno" id="lrnno" value={letterNumber} 
									onChange={(e) => { setLetterNumber(e.target.value); }} placeholder="LRNO No." />
								<input type="text" className="form-control" name="subject" value={subject} 
									onChange={(e) => { setSubject(e.target.value); }} placeholder="Subject" />
								<select name="month" className="form-control" onChange={(e) => { setMonth(e.target.value); }}>
									<option value="" selected={month == '' ? true : false}>-Month-</option>
									<option value="01" selected={month == '01' ? true : false}>January</option>
									<option value="02" selected={month == '02' ? true : false}>February</option>
									<option value="03" selected={month == '03' ? true : false}>March</option>
									<option value="04" selected={month == '04' ? true : false}>April</option>
									<option value="05" selected={month == '05' ? true : false}>May</option>
									<option value="06" selected={month == '06' ? true : false}>June</option>
									<option value="07" selected={month == '07' ? true : false}>July</option>
									<option value="08" selected={month == '08' ? true : false}>August</option>
									<option value="09" selected={month == '09' ? true : false}>September</option>
									<option value="10" selected={month == '10' ? true : false}>October</option>
									<option value="11" selected={month == '11' ? true : false}>November</option>
									<option value="12" selected={month == '12' ? true : false}>December</option>
								</select>

								<select name="year" className="form-control" onChange={(e) => { setYear(e.target.value); }}>
									<option value="" selected={year == '' ? true : false}>-Year-</option>
									<option value="2023" selected={year == '2023' ? true : false}>2023</option>
									<option value="2024" selected={year == '2024' ? true : false}>2024</option>
									<option value="2025" selected={year == '2025' ? true : false}>2025</option>
								</select>

								<button name="btnSearch" type="submit" className="btn btn-default" onClick={(e) => { e.preventDefault(); filterLettersOutgoing(); }}>
									Search
								</button>

								<button name="btnClear" type="submit" className="btn btn-default" onClick={(e) => { e.preventDefault(); clearFiltersOutgoing(); }}>
									Clear
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<TableResults type={type} letterForms={filteredLettersOutgoing} isFetching={isFetchingOutgoing && !isLoadingSearching} />
				</div>
			</SelectedLetterProvider>
		</>
	);
};

export default BoxContentOutgoing;