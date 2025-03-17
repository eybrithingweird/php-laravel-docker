import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { RequestType, Channel, Employee, Designation, AllFields, RequestFields, Office, EmployeeOICFull } from '../api/types';
import { useCreateQuery } from '../hooks/useCreateQuery';

interface CreateContextProps {
	requestTypes: RequestType[];
	isFetchingReq: boolean;
	selectedRequestType: string;
	setSelectedRequestType: (opt: string) => void;

	offices: Office[];
	isFetchingOff: boolean;
	selectedOffice: string;
	setSelectedOffice: (opt: string) => void;

	employees: Employee[];
	isFetchingEmp: boolean;
	selectedEmployee: string;
	setSelectedEmployee: (opt: string) => void;

	employeesOIC: EmployeeOICFull[];
	isFetchingOic: boolean;

	channels: Channel[];
	isFetchingChan: boolean;
	selectedChannels: Channel;
	setSelectedChannels: (opt: Channel) => void;
	allChannels: any[];
	setAllChannels: (opt: any[]) => void;

	definition: string;
	setDefinition: (opt: string) => void;
	selectedOpt: string;
	setSelectedOpt: (opt: string) => void;

	allFields: AllFields[];
	isFetchingAllFields: boolean;

	requestFields: RequestFields[];
	isFetchingReqFields: boolean;

	additionalFields: any;
	setAdditionalFields: (opt: any) => void;

	addFieldsValue: any;
	setAddFieldsValue: (opt: any) => void;

	additionalNotes: string;
	setAdditionalNotes: (opt:string) => void;

	supportingDocs: string;
	setSupportingDocs: (opt: string) => void;

	subjectValue: string;
	setSubjectValue: (opt: string) => void;

	resultLetterID: string;
	setResultLetterID: (opt: string) => void;

	// addCustomChannel: (selectedOption: any) => void;
	draftChannels: any;
	setDraftChannels: (opt: any) => void;
}

export const CreateContext = createContext<CreateContextProps | undefined>(
	undefined,
);

interface CreateProviderProps {
	children: ReactNode;
}

export const CreateProvider = ({ children }: CreateProviderProps) => {
	const [selectedRequestType, setSelectedRequestType] = useState('');
	const [selectedEmployee, setSelectedEmployee] = useState('');
	const [selectedOffice, setSelectedOffice] = useState<string>('');
	const [selectedChannels, setSelectedChannels] = useState<Channel>({} as Channel);
	const [selectedDesignation, setSelectedDesignation] = useState<string>('');

	const [filteredDesignations, setFilteredDesignations] = useState<Designation[] | undefined>([]);

	const [additionalFields, setAdditionalFields] = useState({});
	const [addFieldsValue, setAddFieldsValue] = useState({});

	const [additionalNotes, setAdditionalNotes] = useState('');
	const [supportingDocs, setSupportingDocs] = useState('');
	const [subjectValue, setSubjectValue] = useState('');

	const [allChannels, setAllChannels] = useState<any[][]>([]);
	const [draftChannels, setDraftChannels] = useState<any[][]>([]);

	const [ resultLetterID, setResultLetterID ] = useState<string>('');
	
	const { 
		requestTypes, 
		isFetchingReq, 

		employees, 
		isFetchingEmp, 

		employeesOIC,
		isFetchingOic,

		offices, 
		isFetchingOff, 

		channels, 
		isFetchingChan,
		
		allFields,
		isFetchingAllFields,

		requestFields,
		isFetchingReqFields
	} = useCreateQuery();

	const [definition, setDefinition] = useState('');
	const [selectedOpt, setSelectedOpt] = useState('');

	useEffect(() => {
		if (selectedRequestType != '') {
			const request = requestTypes.find(
				(req) => req.reqtype === selectedRequestType,
			)
			setDefinition(request?.definition ?? '');

			console.log(channels);
			const channel = channels.find((channel) => channel.request_type_id === request?.id);
			setSelectedChannels(channel ?? {} as Channel);
			console.log(channel);
		}
	}, [selectedRequestType]);

	useEffect(() => {
		console.log(selectedChannels);
		if (selectedChannels.id != null) {
			//Getting last channel
			// const lastChannel = selectedChannels.dst_offices_dsg_id[selectedChannels.dst_offices_dsg_id.length - 1];

			//Getting first to second-to-the-last employees
			//TODO AFTER CREATING EMP TABLE FINAL: Get channels [done], get employees with designation, and if college and/or dept, filter accordingly)
			// for (let i = 0; i < selectedChannels.dst_offices_id.length; i++) {
			// 	const channel = selectedChannels.dst_offices_id[i];
			// 	console.log(channel);
			// 	const res = employees.filter((option) => {
			// 		if (option.office_id === channel[0]) {
			// 			return option
			// 		}
			// 	})
			// 	console.log(res);
			// }
			const allEmpDsg = 
				selectedChannels.dst_offices_id.map((channel) => {
					const res = employees.filter((option) => 
						{
							// console.log(channel, option.office_id);
							// console.log(channel);
							if (option.office_id === channel[0]) {
								return option
							}

							//For now, assume requesting person is from CSM (17), Chemistry Department (19)
							//NOTE: channel[0] === 11 is ANY DEPARTMENT
							if (channel[0] === 11 && option.designation === 'Chairperson' && option.office_id === 19) { //NOTE: 19 is Chem Dept
								return option
							}
							//NOTE: channel[0] === 10 is ANY COLLEGE
							else if (channel[0] === 10 && option.designation === 'Dean' && option.office_id === 17) { //NOTE: 17 is CSM
								return option
							}
							
						
							if (channel[0] === 92 && option.designation === 'Vice Chancellor') { //NOTE: channel[0] === 92 is ANY VICE CHANCELLOR
								return option;
							} else if (channel[0] === 93) { //NOTE: channel[0] === 93 is ALL DEPARTMENTS -> CHOOSE COLLEGE
								return null;
							} else if (channel[0] === 94 && option.designation === 'Dean') { //NOTE: channel[0] === 94 is ALL COLLEGES
								return null;
							} else if (channel[0] === 95 && option.designation === 'Vice Chancellor') { //NOTE: channel[0] === 95 is ALL VICE CHANCELLORS
								return null;
							}

						}
					);
					console.log(res);
					if (res.length === 0 && channel[0] === 93) {
						const filteredOffices = offices.filter((office) => {
							return ( office.address.toLowerCase().includes("college") ||
								office.address.toLowerCase().includes("school") ) &&
								!office.address.toLowerCase().includes("any") && 
								!office.address.toLowerCase().includes("all");
						});
						console.log(filteredOffices);
						return filteredOffices;
					} else if (res.length === 0 && channel[0] === 94) {
						console.log('test');
						const filteredOffices = offices.filter((office) => {
							return ( office.address.toLowerCase().includes("college") ||
								office.address.toLowerCase().includes("school") ) &&
								!office.address.toLowerCase().includes("any") && 
								!office.address.toLowerCase().includes("all");
						});
						console.log(filteredOffices);
						return filteredOffices;
					} else if (res.length === 0 && channel[0] === 95) {
						console.log('test');
						const filteredOffices = offices.filter((office) => {
							return office.address.toLowerCase().includes("vice chancellor") &&
								!office.address.toLowerCase().includes("any") && 
								!office.address.toLowerCase().includes("all");
						});
						console.log(filteredOffices);
						return filteredOffices;
					} else {
						return res;
					}
				});
			console.log(allEmpDsg);
			setAllChannels(allEmpDsg);

			const emp = allEmpDsg[allEmpDsg.length - 1][0].first_name.toUpperCase() + ' ' + allEmpDsg[allEmpDsg.length - 1][0].last_name.toUpperCase();
			console.log(emp);
			console.log(allEmpDsg);
			setSelectedEmployee(emp);

			const draftChannels = allEmpDsg.slice(0, -1);
			console.log(draftChannels);
			setDraftChannels(draftChannels);
			// console.log(allEmpDsg.splice(-1, 1));
			// setDraftChannels(allEmpDsg);

			//Getting last employee
			
		}
		
	}, [selectedChannels]);

	// function filterDesignations() {
	// 	if (selectedOffice != '' && selectedOffice != null){
	// 		if (selectedOffice.toLowerCase().includes("college")){
	// 			const filtered = designations.filter((option) => { 
	// 				return option.designation.toLowerCase().includes("dean"); 
	// 			});
	// 			return filtered;
	// 		} else if (selectedOffice.toLowerCase().includes("chancellor")){
	// 			const filtered = designations.filter((option) => { 
	// 				return option.designation.toLowerCase().includes("chancellor"); 
	// 			});
	// 			return filtered;
	// 		} else if (selectedOffice.toLowerCase().includes("security")){
	// 			const filtered = designations.filter((option) => { 
	// 				return option.designation.toLowerCase().includes("security"); 
	// 			});
	// 			return filtered;
	// 		} else if (selectedOffice.toLowerCase().includes("department")){
	// 			const filtered = designations.filter((option) => { 
	// 				return option.designation.toLowerCase().includes("chairperson"); 
	// 			});
	// 			return filtered;
	// 		} else if (selectedOffice.toLowerCase().includes("registrar")){
	// 			const filtered = designations.filter((option) => { 
	// 				return option.designation.toLowerCase().includes("registrar"); 
	// 			});
	// 			return filtered;
	// 		} else if (selectedOffice.toLowerCase().includes("vice chancellor")){
	// 			const filtered = designations.filter((option) => { 
	// 				return option.designation.toLowerCase().includes("vice chancellor"); 
	// 			});
	// 			return filtered;
	// 		} else if (selectedOffice.toLowerCase().includes("center")){
	// 			const filtered = designations.filter((option) => { 
	// 				return !option.designation.toLowerCase().includes("chancellor") && 
	// 					!option.designation.toLowerCase().includes("vice chancellor") && 
	// 					!option.designation.toLowerCase().includes("registrar") &&
	// 					!option.designation.toLowerCase().includes("security") &&
	// 					!option.designation.toLowerCase().includes("secretary") &&
	// 					!option.designation.toLowerCase().includes("chairperson") &&
	// 					!option.designation.toLowerCase().includes("dean"); 
	// 			});
	// 			return filtered;
	// 		}
	// 	} else {
	// 		return designations;
	// 	}
	// };

	const value = { 
		requestTypes, 
		isFetchingReq, 
		selectedRequestType, 
		setSelectedRequestType, 

		definition, 
		setDefinition,
		selectedOpt,
		setSelectedOpt,

		employees,
		isFetchingEmp,
		selectedEmployee,
		setSelectedEmployee,
		allChannels,
		setAllChannels,

		employeesOIC,
		isFetchingOic,

		offices,
		isFetchingOff,
		selectedOffice,
		setSelectedOffice,

		channels,
		isFetchingChan,
		selectedChannels,
		setSelectedChannels,

		allFields,
		isFetchingAllFields,

		requestFields,
		isFetchingReqFields,

		additionalFields,
		setAdditionalFields,
		
		addFieldsValue,
		setAddFieldsValue,

		subjectValue,
		setSubjectValue,

		additionalNotes,
		setAdditionalNotes,

		supportingDocs,
		setSupportingDocs,

		resultLetterID,
		setResultLetterID,

		// addCustomChannel,
		draftChannels,
		setDraftChannels
	};

	return (
		<CreateContext.Provider value={value}>
			{children}
		</CreateContext.Provider>
	);
};

export function useCreate() {
	const context = useContext(CreateContext);

	if (!context) {
		throw new Error(
			'useCreateContext must be used within CreateContext',
		);
	}
	return context;
}
