import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { LetterForm, FormStatus, FormAddfield, Employee, BufferEmployee } from '../api/types';
import { useIncomingReceivedOutgoingQuery } from '../hooks/useIncomingReceivedOutgoingQuery';
// import { useReceivedQuery } from '../hooks/useReceivedQuery';
import { useLocation } from 'react-router-dom';

interface LettersContextProps {
	// letterFormsOutgoing: never[];
	isFetchingOutgoing: boolean;
	// letterFormsIncoming: never[];
	isFetchingIncoming: boolean;
	// letterFormsReceived: never[];
	isFetchingReceived: boolean;
	isFetchingTagged: boolean;
	isFetchingWithdrawn: boolean;
	
	employees: Employee[];
	isFetchingEmp: boolean;
	bufferEmployees: BufferEmployee[];
	isFetchingBufferEmp: boolean;

	letterNumber: string;
	setLetterNumber: (opt: string) => void;

	fullName: string;
	setFullName: (opt: string) => void;
	subject: string;
	setSubject: (opt: string) => void;
	month: string;
	setMonth: (opt: string) => void;
	year: string;
	setYear: (opt: string) => void;

	selectedTab: string;
	setSelectedTab: (opt: string) => void;
}

export const LettersContext = createContext<LettersContextProps | undefined>(
	undefined,
);

interface LettersProviderProps {
	children: ReactNode;
}

export const LettersProvider = ({ children }: LettersProviderProps) => {
	const [ letterNumber, setLetterNumber ] = useState("");
	const [ fullName, setFullName ] = useState("");
	const [ subject, setSubject ] = useState("");
	const [ month, setMonth ] = useState("");
	const [ year, setYear ] = useState("");

	var isLoadingSearching = false;
	const location = useLocation();
	//location.pathname.split('/')[1]
	// console.log(location.pathname.split('/')[2]);
	const [selectedTab, setSelectedTab] = useState(location.pathname.split('/')[2] !== undefined ? location.pathname.split('/')[2] : '');

	const { 
		letterFormsOutgoing,
		isFetchingOutgoing,
		letterFormsIncoming,
		isFetchingIncoming,
		letterFormsReceived,
		isFetchingReceived,
		letterFormsWithdrawn,
		isFetchingWithdrawn,
		letterFormsCancelled,
		isFetchingCancelled,
		letterFormsTagged,
		isFetchingTagged,
		employees,
		isFetchingEmp,
		bufferEmployees,
		isFetchingBufferEmp
	} = useIncomingReceivedOutgoingQuery();

	const [ filteredLettersReceived, setFilteredLettersReceived ] = useState([]);
	const [ filteredLettersIncoming, setFilteredLettersIncoming ] = useState([]);
	const [ filteredLettersOutgoing, setFilteredLettersOutgoing ] = useState([]);
	const [ filteredLettersWithdrawn, setFilteredLettersWithdrawn ] = useState([]);
	const [ filteredLettersTagged, setFilteredLettersTagged ] = useState([]);
	const [ filteredLettersCancelled, setFilteredLettersCancelled ] = useState([]);
	
	useEffect(() => {
		if (!isFetchingReceived && letterFormsReceived) {
			console.log(letterFormsReceived);
			setFilteredLettersReceived(letterFormsReceived);
		}
	}, [letterFormsReceived]);

	useEffect(() => {
		if (!isFetchingIncoming && letterFormsIncoming) {
			console.log(letterFormsIncoming);
			setFilteredLettersIncoming(letterFormsIncoming);
		}
	}, [letterFormsIncoming]);

	useEffect(() => {
		if (!isFetchingOutgoing && letterFormsOutgoing) {
			console.log(letterFormsOutgoing);
			setFilteredLettersOutgoing(letterFormsOutgoing);
		}
	}, [letterFormsOutgoing]);

	useEffect(() => {
		if (!isFetchingWithdrawn && letterFormsWithdrawn) {
			console.log(letterFormsWithdrawn);
			setFilteredLettersWithdrawn(letterFormsWithdrawn);
		}
	}, [letterFormsWithdrawn]);

	useEffect(() => {
		if (!isFetchingCancelled && letterFormsCancelled) {
			console.log(letterFormsCancelled);
			setFilteredLettersCancelled(letterFormsCancelled);
		}
	}, [letterFormsCancelled]);

	useEffect(() => {
		if (!isFetchingTagged && letterFormsTagged) {
			console.log(letterFormsTagged);
			setFilteredLettersTagged(letterFormsTagged);
		}
	}, [letterFormsTagged]);

	const filterLettersReceived = () => {
		isLoadingSearching = true;
		setFilteredLettersReceived(
			letterFormsReceived.filter((letter) => {
				const filterNumber = letterNumber != '' ? letter[0].id.includes(letterNumber) : true;
				const filterSubject = subject != '' ? letter[0].subject.includes(subject) : true;

				const dateSplit = letter[0].letter_date.split('-');
				const filterMonth = month != '' ? dateSplit[1] == month : true;
				const filterYear = year != '' ? dateSplit[0] == year : true;

				if (filterNumber && filterSubject && filterMonth && filterYear) {
					return letter;
				}
			})
		);
		isLoadingSearching = false;
	}

	const clearFiltersReceived = () => {
		setLetterNumber("");
		setFullName("");
		setSubject("");
		setMonth("");
		setYear("");

		setFilteredLettersReceived(letterFormsReceived);
	}

	const filterLettersIncoming = () => {
		isLoadingSearching = true;
		setFilteredLettersIncoming(
			letterFormsIncoming.filter((letter) => {
				const filterNumber = letterNumber != '' ? letter[0].id.includes(letterNumber) : true;
				const filterSubject = subject != '' ? letter[0].subject.includes(subject) : true;

				const dateSplit = letter[0].letter_date.split('-');
				const filterMonth = month != '' ? dateSplit[1] == month : true;
				const filterYear = year != '' ? dateSplit[0] == year : true;

				if (filterNumber && filterSubject && filterMonth && filterYear) {
					return letter;
				}
			})
		);
		isLoadingSearching = false;
	}

	const clearFiltersIncoming = () => {
		setLetterNumber("");
		setFullName("");
		setSubject("");
		setMonth("");
		setYear("");

		setFilteredLettersIncoming(letterFormsIncoming);
	}

	const filterLettersOutgoing = () => {
		isLoadingSearching = true;
		setFilteredLettersOutgoing(
			letterFormsOutgoing.filter((letter) => {
				const filterNumber = letterNumber != '' ? letter[0].id.includes(letterNumber) : true;
				const filterSubject = subject != '' ? letter[0].subject.includes(subject) : true;

				const dateSplit = letter[0].letter_date.split('-');
				const filterMonth = month != '' ? dateSplit[1] == month : true;
				const filterYear = year != '' ? dateSplit[0] == year : true;

				if (filterNumber && filterSubject && filterMonth && filterYear) {
					return letter;
				}
			})
		);
		isLoadingSearching = false;
	}

	const clearFiltersOutgoing = () => {
		setLetterNumber("");
		setFullName("");
		setSubject("");
		setMonth("");
		setYear("");

		setFilteredLettersOutgoing(letterFormsOutgoing);
	}

	const filterLettersWithdrawn = () => {
		isLoadingSearching = true;
		setFilteredLettersWithdrawn(
			letterFormsWithdrawn.filter((letter) => {
				const filterNumber = letterNumber != '' ? letter[0].id.includes(letterNumber) : true;
				const filterSubject = subject != '' ? letter[0].subject.includes(subject) : true;

				const dateSplit = letter[0].letter_date.split('-');
				const filterMonth = month != '' ? dateSplit[1] == month : true;
				const filterYear = year != '' ? dateSplit[0] == year : true;

				if (filterNumber && filterSubject && filterMonth && filterYear) {
					return letter;
				}
			})
		);
		isLoadingSearching = false;
	}

	const clearFiltersWithdrawn = () => {
		setLetterNumber("");
		setFullName("");
		setSubject("");
		setMonth("");
		setYear("");

		setFilteredLettersWithdrawn(letterFormsWithdrawn);
	}

	const filterLettersCancelled = () => {
		isLoadingSearching = true;
		setFilteredLettersCancelled(
			letterFormsCancelled.filter((letter) => {
				const filterNumber = letterNumber != '' ? letter[0].id.includes(letterNumber) : true;
				const filterSubject = subject != '' ? letter[0].subject.includes(subject) : true;

				const dateSplit = letter[0].letter_date.split('-');
				const filterMonth = month != '' ? dateSplit[1] == month : true;
				const filterYear = year != '' ? dateSplit[0] == year : true;

				if (filterNumber && filterSubject && filterMonth && filterYear) {
					return letter;
				}
			})
		);
		isLoadingSearching = false;
	}

	const clearFiltersCancelled = () => {
		setLetterNumber("");
		setFullName("");
		setSubject("");
		setMonth("");
		setYear("");

		setFilteredLettersCancelled(letterFormsCancelled);
	}

	const filterLettersTagged = () => {
		isLoadingSearching = true;
		setFilteredLettersTagged(
			letterFormsTagged.filter((letter) => {
				const filterNumber = letterNumber != '' ? letter[0].id.includes(letterNumber) : true;
				const filterSubject = subject != '' ? letter[0].subject.includes(subject) : true;

				const dateSplit = letter[0].letter_date.split('-');
				const filterMonth = month != '' ? dateSplit[1] == month : true;
				const filterYear = year != '' ? dateSplit[0] == year : true;

				if (filterNumber && filterSubject && filterMonth && filterYear) {
					return letter;
				}
			})
		);
		isLoadingSearching = false;
	}

	const clearFiltersTagged = () => {
		setLetterNumber("");
		setFullName("");
		setSubject("");
		setMonth("");
		setYear("");

		setFilteredLettersTagged(letterFormsTagged);
	}

	const value = { 
		// letterFormsOutgoing,
		isFetchingOutgoing,
		// letterFormsIncoming,
		isFetchingIncoming,
		// letterFormsReceived,
		isFetchingReceived,
		// letterFormsTagged,
		isFetchingTagged,
		isFetchingWithdrawn,
		isFetchingCancelled,

		employees,
		isFetchingEmp,

		bufferEmployees,
		isFetchingBufferEmp,

		isLoadingSearching,
		filteredLettersReceived,
		filteredLettersOutgoing,
		filteredLettersIncoming,
		filteredLettersWithdrawn,
		filteredLettersTagged,
		filteredLettersCancelled,

		filterLettersReceived,
		clearFiltersReceived,
		filterLettersOutgoing,
		clearFiltersOutgoing,
		filterLettersIncoming,
		clearFiltersIncoming,
		filterLettersWithdrawn,
		clearFiltersWithdrawn,
		filterLettersTagged,
		clearFiltersTagged,
		filterLettersCancelled,
		clearFiltersCancelled,
		
		letterNumber,
		setLetterNumber,
		fullName,
		setFullName,
		subject,
		setSubject,
		month,
		setMonth,
		year,
		setYear,

		selectedTab,
		setSelectedTab
	};

	return (
		<LettersContext.Provider value={value}>
			{children}
		</LettersContext.Provider>
	);
};

export function useLetters() {
	const context = useContext(LettersContext);

	if (!context) {
		throw new Error(
			'useLettersContext must be used within LettersContext',
		);
	}
	return context;
}
