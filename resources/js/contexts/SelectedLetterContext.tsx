import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { LetterFormWithId, CommentLetterAll, EmployeeDisplay, Office } from '../api/types';
import { fetchCommentLetter } from '../api/Incoming/api';
import { useMysulatQuery } from '../hooks/useMysulatQuery';

interface SelectedLetterContextProps {
	employees: any[];
	isFetchingEmp: boolean;
	employeesOIC: any[];
	isFetchingOic: boolean;
	offices: Office[];
	isFetchingOff: boolean;
	selectedLetterForm: any;
	setSelectedLetterForm: (opt: any) => void;
	comments: CommentLetterAll[];
	setComments: (opt: CommentLetterAll[]) => void;
	openLetterForm: boolean;
	setOpenLetterForm: (opt: boolean) => void;
	changedValue: any
	setChangedValue: (opt: any) => void
}

export const SelectedLetterContext = createContext<SelectedLetterContextProps | undefined>(
	undefined,
);

interface SelectedLetterProviderProps {
	children: ReactNode;
}

export const SelectedLetterProvider = ({ children }: SelectedLetterProviderProps) => {
	const [ selectedLetterForm, setSelectedLetterForm ] = useState({});
	const [ openLetterForm, setOpenLetterForm ] = useState(false);
	const [ changedValue, setChangedValue ] = useState({});

	const [ comments, setComments ] = useState<CommentLetterAll[]>([]);

	// const queryProcess = () => {
	// 	console.log("test");
		// Comment letter query
		
	// };

	const {
		employees,
		isFetchingEmp,
		employeesOIC,
		isFetchingOic,
		offices,
		isFetchingOff,
		requestTypes,
		isFetchingReq
	} = useMysulatQuery();

	const value = { 
		requestTypes,
		isFetchingReq,
		employees,
		isFetchingEmp,
		employeesOIC,
		isFetchingOic,
		offices,
		isFetchingOff,
		selectedLetterForm,
		setSelectedLetterForm,
		comments,
		setComments,
		openLetterForm,
		setOpenLetterForm,
		changedValue,
		setChangedValue
	};

	return (
		<SelectedLetterContext.Provider value={value}>
			{children}
		</SelectedLetterContext.Provider>
	);
};

export function useSelectedLetter() {
	const context = useContext(SelectedLetterContext);

	if (!context) {
		throw new Error(
			'useSelectedLetterContext must be used within SelectedLetterContext',
		);
	}
	return context;
}
