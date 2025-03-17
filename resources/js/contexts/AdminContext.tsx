import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { RequestType, Employee, Office, Channel, Designation, DraftChannels, AllFields, RequestFields, BufferEmployee, EmployeeOICFull } from '../api/types';
import { useAdminQuery } from '../hooks/useAdminQuery';

interface AdminContextProps {
	requestTypes: RequestType[];
	isFetchingReq: boolean;
	selectedRequestType: string;
	setSelectedRequestType: (opt: string) => void;

	allFields: AllFields[];
	isFetchingField: boolean;

	requestFields: RequestFields[];
	isFetchingReqField: boolean;
	currentFields: any[];
	setCurrentFields: (opt: any[]) => void;

	designations: string[];
	filteredDesignations: string[];
	// setFilteredDesignations: (opt: string[]) => void;
	selectedDesignation: string;
	setSelectedDesignation: (opt: string) => void;

	employees: Employee[];
	isFetchingEmp: boolean;
	selectedEmployee: Employee;
	setSelectedEmployee: (opt: Employee) => void;
	selectedEmployeeOIC: Employee;
	setSelectedEmployeeOIC: (opt: Employee) => void;

	employeesOIC: EmployeeOICFull[];
	isFetchingOic: boolean;

	bufferEmployees: BufferEmployee[];
	isFetchingBufferEmp: boolean;
	selectedBufferEmployee: BufferEmployee;
	setSelectedBufferEmployee: (opt: BufferEmployee) => void;
	bufferEmpList: BufferEmployee[];
	setBufferEmpList: (opt: BufferEmployee[]) => void;

	offices: Office[];
	isFetchingOff: boolean;
	selectedOffice: string;
	setSelectedOffice: (opt: string) => void;

	channels: Channel[];
	isFetchingChan: boolean;
	selectedChannels: DraftChannels[];
	setSelectedChannels: (opt: DraftChannels[]) => void;

	// selectedOpt: string;
	// setSelectedOpt: (opt: string) => void;

	addChannel: () => void;

	selectedTab: string;
	setSelectedTab: (opt: string) => void;
}

export const AdminContext = createContext<AdminContextProps | undefined>(
	undefined,
);

interface AdminProviderProps {
	children: ReactNode;
}

export const AdminProvider = ({ children }: AdminProviderProps) => {
	const [selectedRequestType, setSelectedRequestType] = useState('');
	const [selectedEmployee, setSelectedEmployee] = useState<Employee>({} as Employee);
	const [selectedEmployeeOIC, setSelectedEmployeeOIC] = useState<Employee>({} as Employee);
	const [selectedBufferEmployee, setSelectedBufferEmployee] = useState<BufferEmployee>({} as BufferEmployee);
	const [selectedOffice, setSelectedOffice] = useState<string>('');
	const [selectedChannels, setSelectedChannels ] = useState<DraftChannels[]>([]);
	const [selectedDesignation, setSelectedDesignation] = useState<string>('');
	const designations = [
		"Chancellor",
		"Campus Secretary",
		"Chief Security Officer",
		"Chief Administrative Officer",
		"Vice Chancellor",
		"Institute Registrar",
		"Head",
		"Director",
		"Manager",
		"Focal Person",
		"President",
		"Dean",
		"Assistant Dean",
		"Chairperson",
		"Coordinator"
	];
	// const [selectedOpt, setSelectedOpt] = useState('');

	const [filteredDesignations, setFilteredDesignations] = useState<string[]>([]);
	const [selectedTab, setSelectedTab] = useState('');
	const [ currentFields, setCurrentFields ] = useState<any[]>([]);

	// useEffect(() => {
	// 	console.log(selectedChannels);
	// }, [selectedChannels]);

	// useEffect(() => {
	// 	console.log(selectedOffice);
	// }, [selectedOffice]);

	const { 
		requestTypes, 
		isFetchingReq, 

		allFields,
		isFetchingField,

		requestFields,
		isFetchingReqField,

		employees, 
		isFetchingEmp, 

		employeesOIC,
		isFetchingOic,

		bufferEmployees,
		isFetchingBufferEmp,

		offices, 
		isFetchingOff, 

		channels, 
		isFetchingChan, 

	} = useAdminQuery();

	// useEffect(() => {
	// 	if (!isFetchingEmp) {
	// 		console.log(employees);
	// 		// setSelectedEmployee(employees[2]);
	// 		// console.log(isFetchingEmp);
	// 	}
	// }, [isFetchingEmp]);

	const [ bufferEmpList, setBufferEmpList ] = useState([] as BufferEmployee[]);

	useEffect(() => {
		// if (bufferEmployees.length > 0) {
		// 	setBufferEmpList(bufferEmployees);
		// }
		if (!isFetchingBufferEmp) {
			setBufferEmpList(bufferEmployees);
		}
	}, [bufferEmployees]);

	function addChannel() {
		if (selectedOffice != '') {
			const trimOffice = selectedOffice.toString().split("(")[0].trim();
			const office = offices.filter((option) => { return option.address == trimOffice })[0];
			setSelectedChannels([...selectedChannels, 
				{
					id: selectedChannels.length + 1,
					office_id: office.id,
					office: office.address,
					designation: selectedDesignation
				}
			]);
		}
	}

	// useEffect(() => {
	// 	if (!isFetchingChan && !isFetchingReq) {
	// 		requestTypes.filter((request) => {
	// 			channels.map((channel) => {
	// 				if (channel.request_type_id == request.id) {
	// 					return 
	// 				}
	// 			})
	// 		});
	// 	}
	// }, [requestTypes, channels]);

	function filterDesignations() {
		if (selectedOffice != '' && selectedOffice != null){
			if (selectedOffice.toLowerCase().includes("college")){
				const filtered = designations.filter((option) => { 
					return option.toLowerCase().includes("dean"); 
				});
				return filtered;
			} else if (selectedOffice.toLowerCase().includes("chancellor")){
				const filtered = designations.filter((option) => { 
					return option.toLowerCase().includes("chancellor"); 
				});
				return filtered;
			} else if (selectedOffice.toLowerCase().includes("security")){
				const filtered = designations.filter((option) => { 
					return option.toLowerCase().includes("security"); 
				});
				return filtered;
			} else if (selectedOffice.toLowerCase().includes("department")){
				const filtered = designations.filter((option) => { 
					return option.toLowerCase().includes("chairperson"); 
				});
				return filtered;
			} else if (selectedOffice.toLowerCase().includes("registrar")){
				const filtered = designations.filter((option) => { 
					return option.toLowerCase().includes("registrar"); 
				});
				return filtered;
			} else if (selectedOffice.toLowerCase().includes("vice chancellor")){
				const filtered = designations.filter((option) => { 
					return option.toLowerCase().includes("vice chancellor"); 
				});
				return filtered;
			} else if (selectedOffice.toLowerCase().includes("center")){
				const filtered = designations.filter((option) => { 
					return !option.toLowerCase().includes("chancellor") && 
						!option.toLowerCase().includes("vice chancellor") && 
						!option.toLowerCase().includes("registrar") &&
						!option.toLowerCase().includes("security") &&
						!option.toLowerCase().includes("secretary") &&
						!option.toLowerCase().includes("chairperson") &&
						!option.toLowerCase().includes("dean"); 
				});
				return filtered;
			}
		} else {
			return designations;
		}
	};

	useEffect(() => {
		const res = filterDesignations();
		if (res){
			setFilteredDesignations(res);
		}
	}, [selectedOffice]);
	

	const value = { 
		requestTypes, 
		isFetchingReq, 
		selectedRequestType, 
		setSelectedRequestType,

		allFields,
		isFetchingField,

		requestFields,
		isFetchingReqField,
		currentFields,
		setCurrentFields,

		designations,
		filteredDesignations,
		selectedDesignation,
		setSelectedDesignation,

		employees, 
		isFetchingEmp, 
		selectedEmployee,
		setSelectedEmployee,
		selectedEmployeeOIC,
		setSelectedEmployeeOIC,

		employeesOIC,
		isFetchingOic,

		bufferEmployees,
		isFetchingBufferEmp,
		selectedBufferEmployee,
		setSelectedBufferEmployee,
		bufferEmpList,
		setBufferEmpList,

		offices, 
		isFetchingOff,
		selectedOffice,
		setSelectedOffice, 

		channels, 
		isFetchingChan, 
		selectedChannels,
		setSelectedChannels,

		// selectedOpt,
		// setSelectedOpt,
		
		addChannel,

		selectedTab,
		setSelectedTab
	};

	return (
		<AdminContext.Provider value={value}>
			{children}
		</AdminContext.Provider>
	);
};

export function useAdmin() {
	const context = useContext(AdminContext);

	if (!context) {
		throw new Error(
			'useAdminContext must be used within AdminContext',
		);
	}
	return context;
}
