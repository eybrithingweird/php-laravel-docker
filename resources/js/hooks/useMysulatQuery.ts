import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";
import { fetchLetterForms, fetchEmployees, fetchAddFields, fetchOffices } from "../api/Mysulat/api";
import { EmployeeDisplay, FormAddfield, LetterFormWithId, Office, RequestType } from "../api/types";
import { fetchOICs, fetchRequestTypes } from "../api/Create/api";
export const useMysulatQuery = () => {
	const {
		user_id
	} = useUser();

	const [letters, setLetters] = useState<LetterFormWithId[]>([]);
	const [employees, setEmployees] = useState<any[]>([]);	
	const [employeesOIC, setEmployeesOIC] = useState<any>([]);
	const [offices, setOffices] = useState<Office[]>([]);
	const [formAddfield, setFormAddfield] = useState<FormAddfield[]>([]);

	const [requestTypes, setRequestTypes] = useState<RequestType[]>([]);

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
		const employeesRes = employeeQuery;
		if (employeesRes) {
			// console.log(employeesRes);
			var arrPush: any[] = [];
			employeesRes.map((employee) => {
				arrPush.push({
					id: employee.id,
					first_name: employee.first_name,
					last_name: employee.last_name,
					middle_initial: employee.middle_initial,
					prenominal_title: employee.prenominal_title,
					postnominal_title: employee.postnominal_title,
					office_id: employee.office_id,
					designation: employee.designation,
					display: employee.first_name + ' ' + employee.last_name
				});
			});
			setEmployees(arrPush);
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
		if (oics && employees[0] != null) {
			var arrPush: any[] = [];
			oics.map((oic) => {
				// console.log(oic);
				const date = new Date();
				const data = employees.filter((employee) => { 
					if (employee.id === oic.oic_employee_id && date >= new Date(oic.oic_start_date) && date <= new Date(oic.oic_end_date)) return employee })[0];
				// console.log(data);
				arrPush.push({
					id: data.id,
					first_name: data.first_name,
					last_name: data.last_name,
					middle_initial: data.middle_initial,
					prenominal_title: data.prenominal_title,
					postnominal_title: data.postnominal_title,
					office_id: data.office_id,
					designation: data.designation,
					oic_of_employee_id: oic.employee_id
				});
			})
			setEmployeesOIC(arrPush);
		}
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
	
	// Letter forms query
	const { isFetching: isFetchingLetters, data: letterFormQuery } = useQuery({
		queryKey: ['mysulat'],
		queryFn: () => fetchLetterForms(user_id),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const letters = letterFormQuery;
		if (letters) {
			setLetters(letters);
		}
	}, [letterFormQuery]);

	// useEffect(() => {
	// 	if (letters) {
			
	// 	}
	// }, [letters]);

	// Form additional fields query
	function fetchPerLetterID(id: string) {
		const { isFetching: isFetchingAddFields, data: addFieldsQuery } = useQuery({
			queryKey: ['form-addfields'],
			queryFn: () => fetchAddFields(id),
			refetchOnWindowFocus: false,
		});
	
		useEffect(() => {
			const addFieldsData = addFieldsQuery;
			if (addFieldsData) {
				console.log(addFieldsData);
				setFormAddfield(addFieldsData);
			}
		}, [addFieldsQuery]);
	}
	

	// useEffect(() => {
	// 	if (letters) {
	// 		letters.map((letter) => {
				
	// 		});
	// 	}
	// }, [letters]);

	return {
		letters,
		isFetchingLetters,

		employees,
		isFetchingEmp,

		employeesOIC,
		isFetchingOic,

		offices,
		isFetchingOff,

		requestTypes,
		isFetchingReq,
	};
};