import { useQuery } from '@tanstack/react-query'; 
import { useEffect, useState } from 'react';
import { RequestType, Channel, Designation, Office, Employee, AllFields, RequestFields } from '../api/types';
import { fetchRequestTypes, fetchChannels, fetchOffices, fetchEmployees, fetchAllFields, fetchRequestFields, fetchOICs } from '../api/Create/api';

export const useCreateQuery = () => {
	const [requestTypes, setRequestTypes] = useState<RequestType[]>([]);
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [employeesOIC, setEmployeesOIC] = useState<any>([]);
	const [offices, setOffices] = useState<Office[]>([]);
	const [channels, setChannels] = useState<Channel[]>([]);
	const [designations, setDesignations] = useState<Designation[]>([]);

	const [allFields, setAllFields] = useState<AllFields[]>([]);
	const [requestFields, setRequestFields] = useState<RequestFields[]>([]);

	// Request types query
	const { isFetching: isFetchingReq, data: requestTypeQuery } = useQuery({
		queryKey: ['requesttypes'],
		queryFn: () => fetchRequestTypes(),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const requestTypes = requestTypeQuery;
		if (requestTypes) {
			const arranged = 
					requestTypes.sort(function (a, b) {
						if (a.reqtype.toUpperCase() < b.reqtype.toUpperCase()) {
						return -1;
						}
						if (a.reqtype.toUpperCase() > b.reqtype.toUpperCase()) {
						return 1;
						}
						return 0;
					});
			setRequestTypes(arranged);
		}
	}, [requestTypeQuery]);

	// Employees query
	const { isFetching: isFetchingEmp, data: employeeQuery } = useQuery({
		queryKey: ['employees'],
		queryFn: () => fetchEmployees(),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const employees = employeeQuery;
		if (employees) {
			const arranged = 
					employees.sort(function (a, b) {
						if (a.first_name < b.first_name) {
						return -1;
						}
						if (a.first_name > b.first_name) {
						return 1;
						}
						return 0;
					});

			setEmployees(arranged);
		}
	}, [employeeQuery]);

	// Employees OIC query
	const { isFetching: isFetchingOic, data: employeeOICQuery } = useQuery({
		queryKey: ['employee_oic'],
		queryFn: () => fetchOICs(),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const oics = employeeOICQuery;
		console.log(oics);
		if (oics && employees[0] != null) {
			oics.map((oic) => {
				const date = new Date();
				const data = employees.filter((employee) => { 
					if (employee.id == oic.oic_employee_id && date >= new Date(oic.oic_start_date) && date <= new Date(oic.oic_end_date)) return employee })[0];
				setEmployeesOIC([...employeesOIC, {
					id: data.id,
					first_name: data.first_name,
					last_name: data.last_name,
					middle_initial: data.middle_initial,
					prenominal_title: data.prenominal_title,
					postnominal_title: data.postnominal_title,
					office_id: data.office_id,
					designation: data.designation,
					oic_of_employee_id: oic.employee_id,
					oic_start_date: oic.oic_start_date,
					oic_end_date: oic.oic_end_date
				}]);
			})
		}
		console.log(employeesOIC);
	}, [employeeOICQuery, employees]);

	// Offices query
	const { isFetching: isFetchingOff, data: officeQuery } = useQuery({
		queryKey: ['offices'],
		queryFn: () => fetchOffices(),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const offices = officeQuery;
		if (offices) {
			// const filtered = 
			// 	offices.filter((option) => { 
			// 		// return !option.address.toLowerCase().includes("department") && 
			// 		// 	!option.address.toLowerCase().includes("college"); 

			// 		const expression = new RegExp('department');
			// 		const expression2 = new RegExp('departments');
			// 		const expression3 = new RegExp('college');
			// 		const expression4 = new RegExp('colleges');
			// 		//TODO: Include Vice Chancellors filter? Basin kailangan send to all

			// 		if (option.address.toLowerCase().includes("department")) {
			// 			if (expression.test(option.address.toLowerCase()) && !expression2.test(option.address.toLowerCase())) return option;
			// 			else return false;
			// 		} else if (option.address.toLowerCase().includes("college")) {
			// 			if (expression3.test(option.address.toLowerCase()) && !expression4.test(option.address.toLowerCase())) return option;
			// 			else return false;
			// 		}else {
			// 			return option;
			// 		}
					
			// 		// return !option.address.toLowerCase().match(expression);
			// 		// console.log(test.test(option.address.toLowerCase()));
			// 	});
			const arranged = 
					offices.sort(function (a, b) {
						if (a.address.toUpperCase() < b.address.toUpperCase()) {
						return -1;
						}
						if (a.address.toUpperCase() > b.address.toUpperCase()) {
						return 1;
						}
						return 0;
					});

			setOffices(arranged);
		}
	}, [officeQuery]);

	// Channels query
	const { isFetching: isFetchingChan, data: channelQuery } = useQuery({
		queryKey: ['channels'],
		queryFn: () => fetchChannels(),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const channels = channelQuery;
		if (channels) {
			setChannels(channels);
		}
	}, [channelQuery]);

	// // Designations query
	// const { isFetching: isFetchingDes, data: designationQuery } = useQuery({
	// 	queryKey: ['designations'],
	// 	queryFn: () => fetchDesignations(),
	// 	refetchOnWindowFocus: false,
	// });

	// useEffect(() => {
	// 	const designations = designationQuery;
	// 	if (designations) {
	// 		const arranged = 
	// 				designations.sort(function (a, b) {
	// 					if (a.designation.toUpperCase() < b.designation.toUpperCase()) {
	// 					return -1;
	// 					}
	// 					if (a.designation.toUpperCase() > b.designation.toUpperCase()) {
	// 					return 1;
	// 					}
	// 					return 0;
	// 				});

	// 		setDesignations(arranged);
	// 	}
	// }, [designationQuery]);

	// AllFields query
	const { isFetching: isFetchingAllFields, data: allFieldsQuery } = useQuery({
		queryKey: ['allfields'],
		queryFn: () => fetchAllFields(),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const allfields = allFieldsQuery;
		if (allfields) {
			setAllFields(allfields.filter((field) => field.field_type != ''));
		}
	}, [allFieldsQuery]);

	// RequestFields query
	const { isFetching: isFetchingReqFields, data: requestFieldsQuery } = useQuery({
		queryKey: ['request-fields'],
		queryFn: () => fetchRequestFields(),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const requestfields = requestFieldsQuery;
		if (requestfields) {
			setRequestFields(requestfields);
		}
	}, [requestFieldsQuery]);

	return { 
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
	};
};
