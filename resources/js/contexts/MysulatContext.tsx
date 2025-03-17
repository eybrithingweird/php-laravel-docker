import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { RequestType, Channel, Employee, Designation, AllFields, RequestFields, Office, LetterFormWithId } from '../api/types';
import { useUser } from '../contexts/UserContext';
import { useMysulatQuery } from '../hooks/useMysulatQuery';

interface MysulatContextProps {
	letters: LetterFormWithId[];
	isFetchingLetters: boolean;
	employees: Employee[];
	isFetchingEmp: boolean;
	offices: Office[];
	isFetchingOff: boolean
}

export const MysulatContext = createContext<MysulatContextProps | undefined>(
	undefined,
);

interface MysulatProviderProps {
	children: ReactNode;
}

export const MysulatProvider = ({ children }: MysulatProviderProps) => {
	// const {
	// 	user_id,
	// 	user_first_name,
	// 	user_last_name,
	// 	user_office
	// } = useUser();
	
	const {
		letters,
		isFetchingLetters,
		employees,
		isFetchingEmp,
		offices,
		isFetchingOff
	} = useMysulatQuery();

	const value = { 
		letters,
		isFetchingLetters,
		employees,
		isFetchingEmp,
		offices,
		isFetchingOff
	};

	return (
		<MysulatContext.Provider value={value}>
			{children}
		</MysulatContext.Provider>
	);
};

export function useMysulat() {
	const context = useContext(MysulatContext);

	if (!context) {
		throw new Error(
			'useMysulatContext must be used within MysulatContext',
		);
	}
	return context;
}
