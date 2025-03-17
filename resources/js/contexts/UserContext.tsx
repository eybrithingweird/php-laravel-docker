import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface UserContextProps {
	user_id: string;
	user_first_name: string;
	user_last_name: string;
	user_office: number;
	isAdmin: boolean;
}

export const UserContext = createContext<UserContextProps | undefined>(
	undefined,
);

interface UserProviderProps {
	children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const user_id = '2024-308';
	const user_first_name = 'Abe';
	const user_last_name = 'Apao';
	const user_office = 5;
	const isAdmin = true;

	// const user_id = '2019-066';
	// const user_first_name = 'Bernadette';
	// const user_last_name = 'Tubo';
	// const user_office = 5;
	// const isAdmin = false;

	// const user_id = '2019-011';
	// const user_first_name = 'Jan Mickelle';
	// const user_last_name = 'Maratas';
	// const user_office = 17;
	// const isAdmin = false;

	// const user_id = '2017-0002';
	// const user_first_name = 'Akima';
	// const user_last_name = 'Bangcola';
	// const user_office = 6;
	// const isAdmin = false;

	// const user_id = '2019-049';
	// const user_first_name = 'Pamela';
	// const user_last_name = 'Resurreccion';
	// const user_office = 46;
	// const isAdmin = false;

	// const user_id = '2017-0004';
	// const user_first_name = 'Michelle Jeanne';
	// const user_last_name = 'Caracut';
	// const user_office = 8;
	// const isAdmin = false;

	// const user_id = '0002';
	// const user_first_name = 'Rex';
	// const user_last_name = 'Ortega';
	// const user_office = 2;
	// const isAdmin = true;

	// const user_id = '0001';
	// const user_first_name = 'Alizedney';
	// const user_last_name = 'Ditucalan';
	// const user_office = 1;
	// const isAdmin = false;

	// const user_id = '2019-073';
	// const user_first_name = 'Ephrime';
	// const user_last_name = 'Metillo';
	// const user_office = 54;
	// const isAdmin = false;

	const value = { 
		user_id,
		user_first_name,
		user_last_name,
		user_office,
		isAdmin
	};

	return (
		<UserContext.Provider value={value}>
			{children}
		</UserContext.Provider>
	);
};

export function useUser() {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error(
			'useUserContext must be used within UserContext',
		);
	}
	return context;
}
