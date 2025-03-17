import React, { createContext, useContext, useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
import { useQuery } from '@tanstack/react-query';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image, Line, Svg, Font } from '@react-pdf/renderer';
import logo from '../../seal.png';
// import { useSelectedLetter } from "../contexts/SelectedLetterContext";
import { useUser } from "../contexts/UserContext";
import { useLocation } from 'react-router-dom';
import { fetchAddFields, fetchLetterForms, fetchEmployees, fetchOffices, fetchOICs } from '../api/Mysulat/api';
// import { Employee, Office } from '../api/types';
import { fetchCommentLetter} from "../api/Incoming/api";
import { Loading } from './Loading';

import cancelled from '../../cancelled.png';
import approved from '../../approved.png';

Font.register({
	family: 'Source Sans Pro',
	fonts: [
		{
			src: 'https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Ky461EN_io6npfB.ttf'
		},
		{
			src: 'https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Kxm7FEN_io6npfB.ttf',
			fontWeight: 'bold'
		}

		// "200": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Kw461EN_io6npfB.ttf",
		// "300": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Kzm61EN_io6npfB.ttf",
		// "regular": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Ky461EN_io6npfB.ttf",
		// "500": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8KyK61EN_io6npfB.ttf",
		// "600": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Kxm7FEN_io6npfB.ttf",
		// "700": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Kxf7FEN_io6npfB.ttf",
		// "800": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8Kw47FEN_io6npfB.ttf",
		// "900": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpBtKy2OAdR1K-IwhWudF-R9QMylBJAV3Bo8KwR7FEN_io6npfB.ttf",
		// "200italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqDlO9C4Ym4fB3Ts.ttf",
		// "300italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqOdO9C4Ym4fB3Ts.ttf",
		// "italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqLlO9C4Ym4fB3Ts.ttf",
		// "500italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqItO9C4Ym4fB3Ts.ttf",
		// "600italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqGdJ9C4Ym4fB3Ts.ttf",
		// "700italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqF5J9C4Ym4fB3Ts.ttf",
		// "800italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqDlJ9C4Ym4fB3Ts.ttf",
		// "900italic": "https://fonts.gstatic.com/s/sourcesans3/v15/nwpDtKy2OAdR1K-IwhWudF-R3woAa8opPOrG97lwqBBJ9C4Ym4fB3Ts.ttf"
	]
})

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		margin: 30, 
	},
	sectionRow: {
		flexDirection: 'row',
	},
	sectionColumn: {
		flexDirection: 'column',
	},
	viewer: {
		width: window.innerWidth,
    	height: window.innerHeight,
	},
	image: {
		width: 60,
		height: 60,
		marginTop: 1,
		marginLeft: -15
	},
	fontTitle: {
		fontSize: 22,
		marginRight: 2,
		color: '#a51e22',
	},
	fontSubtitle: {
		fontSize: 8,
		marginTop: 2,
	},
	fontHeader: {
		fontSize: 12,
		fontWeight: 'bold',
	},
	fontBody: {
		fontSize: 12,
		fontWeight: 'normal',
	},
	watermarkContainer: {
		position: 'absolute',
		// top: 0,
		// right: 0,
		zIndex: -1,
		opacity: 0.5,
		fontSize: 30,
		fontWeight: 'bold',
	},
	watermark: {
		width: 600,
		height: 500,
		marginLeft: -20,
		marginTop: 30,
		// transform: [{ rotate: '-100deg' }],
		// height: 689,
		// marginTop: 1,
		// marginLeft: -20
	},
});

const PDFPreview = () => {
	const location = useLocation();
	const splitLocation = location.pathname.slice(1).split('/');
	console.log(splitLocation);

	const user_id = splitLocation[1];

	// const { user_id, user_first_name, user_last_name, user_office } = useUser();

	const [addFields, setAddFields] = useState([]);
	const [letter, setLetter] = useState([]);
	const [comments, setComments] = useState([]);
	const [employees, setEmployees] = useState([]);
	const [employeesOIC, setEmployeesOIC] = useState([]);
	const [offices, setOffices] = useState([]);
	// const [dateFormat, setDateFormat] = useState('');

	const [userOffice, setUserOffice] = useState([]);
	const [halfOfficeAddress, setHalfOfficeAddress] = useState([]);

	// Letter forms query
	const { isFetching: isFetchingLetters, data: letterFormQuery } = useQuery({
		queryKey: ['mysulat'],
		queryFn: () => fetchLetterForms(user_id),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const letters = letterFormQuery;
		if (letters) {
			// console.log(letters);
			console.log(splitLocation[2]);
			const letter = letters.filter((letter) => { if (letter[0].id == splitLocation[2]) return letter })[0];
			if (letter == null) { window.location.replace('/404'); }
			// console.log(letter);
			setLetter(letter);

			// const formattedDate = new Date(letter[0].letter_date)
			// 	.toLocaleDateString({},
			// 		{month:"long", day:"2-digit", year:"numeric"}
			// 	);
			// console.log(formattedDate)
			// const sp = formattedDate.split(' ');
			// console.log(sp);
			// setDateFormat(`${sp[1]} ${sp[0]}, ${sp[2]}`);
		}
	}, [letterFormQuery]);

	// Form comments query
	const { isFetching: isFetchingComments, data: commentLetterQuery } = useQuery({
		queryKey: ['comments'],
		queryFn: () => fetchCommentLetter(letter[0].id),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const commentLetter = commentLetterQuery;
		if (commentLetter) {
			setComments(commentLetter);
		}
	}, [commentLetterQuery]);

	// Form additional fields query
	const { isFetching: isFetchingAddFields, data: addFieldsQuery } = useQuery({
		queryKey: ['form-addfields'],
		queryFn: () => fetchAddFields(letter[0].id),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const addFieldsData = addFieldsQuery;
		if (addFieldsData) {
			// console.log(addFieldsData);
			setAddFields(addFieldsData);
		}
	}, [addFieldsQuery]);

	// Employees query
	const { isFetching: isFetchingEmp, data: employeeQuery } = useQuery({
		queryKey: ['employees'],
		queryFn: () => fetchEmployees(),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const employees = employeeQuery;
		if (employees) {
			setEmployees(employees);
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
		// console.log(oics);
		if (oics) {
			// oics.map((oic) => {
			// 	const date = new Date();
			// 	const data = employees.filter((employee) => { 
			// 		if (employee.id == oic.oic_employee_id && date >= new Date(oic.oic_start_date) && date <= new Date(oic.oic_end_date)) return employee })[0];
			// 	setEmployeesOIC([...employeesOIC, {
			// 		id: data.id,
			// 		first_name: data.first_name,
			// 		last_name: data.last_name,
			// 		middle_initial: data.middle_initial,
			// 		prenominal_title: data.prenominal_title,
			// 		postnominal_title: data.postnominal_title,
			// 		office_id: data.office_id,
			// 		designation: data.designation,
			// 		oic_of_employee_id: oic.employee_id,
			// 		oic_start_date: oic.oic_start_date,
			// 		oic_end_date: oic.oic_end_date
			// 	}]);
			// })
			setEmployeesOIC(oics);
		}
		// console.log(employeesOIC);
	}, [employeeOICQuery]);

	// Offices query
	const { isFetching: isFetchingOff, data: officeQuery } = useQuery({
		queryKey: ['offices'],
		queryFn: () => fetchOffices(),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const offices = officeQuery;
		if (offices) {
			setOffices(offices);
			const empData = employees.filter((employee) => { if (employee.id == user_id) return employee })[0];
			setUserOffice(offices.filter((office) => { if (office.id == empData.office_id) return office })[0]);
		}
	}, [officeQuery]);

	// console.log(!isFetchingOff && offices.filter((office) => { if (office.id == user_office) return office })[0]);

	useEffect(() => {
		if (userOffice.address != null) {
			// const partOne = userOffice.address.slice(0, userOffice.address.length / 2);
			// const partTwo = userOffice.address.slice(userOffice.address.length / 2, userOffice.address.length);
			// setHalfOfficeAddress([partOne, partTwo]);

			var middle = Math.floor(userOffice.address.length / 2);
			var before = userOffice.address.lastIndexOf(' ', middle);
			var after = userOffice.address.indexOf(' ', middle + 1);

			if (middle - before < after - middle) {
				middle = before;
			} else {
				middle = after;
			}

			var s1 = userOffice.address.substr(0, middle);
			var s2 = userOffice.address.substr(middle + 1);
			setHalfOfficeAddress([s1, s2]);

		}
	}, [userOffice]);

	const empConverter = (emp) => {
		if (employees[0] != null) {
			console.log(emp);
			const data = employees.filter((employee) => { if (employee.id == emp) return employee })[0];
			const oic = employeesOIC.filter((oic) => { if (oic.employee_id == data.id) return oic })[0];
			console.log(employeesOIC);
			const oicFor = oic != null ? employees.filter((employee) => { if (employee.id == oic.employee_id) return employee })[0] : null;
			const oicDetails = oic != null ? employees.filter((emp) => { if (emp.id == oic.oic_employee_id) return oic })[0] : null;
			const office = oic!= null ? 
				offices.filter((office) => { if (office.id == oicFor.office_id) return office })[0] : 
				offices.filter((office) => { if (office.id == data.office_id) return office })[0];
			const designationInput = 
				oic != null ? 
					employees.filter((employee) => { if (employee.id == oic.employee_id) return employee })[0].designation + ' [OIC: ' + 
					oicDetails.first_name + ' ' + oicDetails.last_name + ']' : 

					data.designation;
			return data.first_name + ' ' + data.last_name + '\n' + designationInput + 
				(office != null && office.initials != '' ? ' (' + office.initials + ')' : '');
		}
	};

	const isLoading = isFetchingAddFields || isFetchingComments || isFetchingEmp || isFetchingLetters || isFetchingOff;
	// console.log(isLoading);

	//TODO: MAR 14 PLEASE DOUBLE CHECK OIC AND POSITION

	return (
		<>
		{
			isLoading ?
				(
					// <section className="ml-[230px]"> 
						<div className="grid grid-rows-9">
							<div className="grid row-span-4"></div>
							<div className="grid row-span-1 justify-items-center mx-auto">
								<Loading type={"spin"} height={70} width={70} /> 
								<span className="mt-2">Fetching data....</span>
							</div>
							<div className="grid row-span-4"></div>
							
						</div>
					// </section>
				) :
				(
					<PDFViewer style={styles.viewer}>
						<Document>
							<Page size="Letter" style={styles.page}>
								{
									letter[1].status === 'withdrawn' || letter[1].status === 'cancelled' || letter[1].status === 'disapproved'  ?
										<View style={styles.watermarkContainer}>
											<Image style={styles.watermark} src={cancelled} />
										</View> : 

									letter[1].status === 'approved' ?
										<View style={styles.watermarkContainer}>
											<Image style={styles.watermark} src={approved} />
										</View> : ''

								}
								{/* <View style={styles.watermarkContainer}>
									<Text style={styles.sectionColumn}>WITHDRAWN</Text>
									<Image style={styles.watermark} src={watermark} />
								</View> */}
								<View style={styles.sectionRow}>
									<View style={styles.sectionColumn}>
										<View style={[styles.sectionRow, {marginTop: 25, marginBottom: 0}]}>
											<Text style={styles.fontTitle}>
												{userOffice?.initials}
											</Text>
											<View style={styles.sectionColumn}>
												{
													halfOfficeAddress.map((word) => {
														return (
															<Text style={styles.fontSubtitle}>
																{word}
															</Text>
														)
													})
												}
											</View>
											<View style={styles.sectionColumn}>
												<Text style={[styles.fontSubtitle, {marginLeft: 263, marginTop: 13, color: '#a51e22',}]}>
													www.msuiit.edu.ph
												</Text>
											</View>
										</View>
										<Svg height="8" width="490" style={{marginTop: 4}}>
											<Line
											x1="0"
											y1="0"
											x2="480"
											y2="0"
											strokeWidth={2}
											stroke="rgb(165,30,34,255)"
											/>
										</Svg>
										<View style={styles.sectionRow}>
											<Text style={styles.fontSubtitle}>cict@g.msuiit.edu.ph</Text>
											{/* TODO: Ask for data of office email addresses */}
										</View>
					
										<View style={[styles.sectionRow]}>
											<Text style={[styles.fontHeader, {marginTop: 20, fontFamily: 'Source Sans Pro'}]}>
												{ 
													letter[0] != null && 
													new Date(letter[0].letter_date)
														.toLocaleDateString({},
															{month:"long", day:"2-digit", year:"numeric"}
														)
												}
											</Text>
											<View style={[styles.sectionColumn, {marginTop: 7, marginLeft: 330, fontFamily: 'Source Sans Pro'}]}>
												<Text style={[styles.fontHeader]}>
													LETTER REQUEST
												</Text>
												<Text style={[styles.fontBody, { fontFamily: 'Source Sans Pro'}]}>
													{letter[0] != null && letter[0].id}
												</Text>
											</View>
										</View>
					
										<View style={[styles.sectionRow, {marginTop: 20, fontFamily: 'Source Sans Pro'}]}>
											<Text style={[styles.fontHeader]}>SUBJECT: </Text>
											<Text style={[styles.fontBody]}>{letter[0] != null && letter[0].subject}</Text>
										</View>
					
										<View style={[styles.sectionRow, {marginTop: 15, fontFamily: 'Source Sans Pro'}]}>
											<Text style={[styles.fontHeader]}>TO: </Text>
											<Text style={[styles.fontBody, {marginLeft: 10}]}>
												{ letter[0] != null && empConverter(letter[1].dst_employee_id[letter[1].dst_employee_id.length - 1][1])}
											</Text>
										</View>
					
										<View style={[styles.sectionRow, {marginTop: 15, fontFamily: 'Source Sans Pro'}]}>
											<Text style={[styles.fontHeader]}>THROUGH: </Text>
										
											<Text style={[styles.fontBody, {marginLeft: 10}]}>
											{
												letter[1] != null && 
													letter[1].dst_employee_id.map((employee, index) => {
														if (index == letter[1].dst_employee_id.length - 1) {
															return null;
														}
														if (typeof employee === 'string') {
															return empConverter(employee) + '\n \n';
														} else {
															employee.map((emp) => {
																// return (
																	return empConverter(emp);
																// )
															})
														}
													})
											}
											</Text>

										</View>

										{/* <View style={[styles.sectionRow, {marginTop: 10, marginLeft: 50}]}>
											<Text style={[styles.fontBody]}>OVCAF </Text>
										</View> */}
										<View style={[styles.sectionRow, {fontFamily: 'Source Sans Pro'}]}>
											<Text style={[styles.fontBody]}>Good day!</Text>
										</View>
					
										<View style={[styles.sectionRow, {marginTop: 10, marginBottom: 5, fontFamily: 'Source Sans Pro'}]}>
											<Text style={[styles.fontBody]}>Below are the details of the request: </Text>
										</View>

										{
											addFields[0] != null && addFields.map((field) => {
												return (
													<View style={[styles.sectionRow, {marginLeft: 20, marginTop: 5, fontFamily: 'Source Sans Pro'}]}>
														<Text style={[styles.fontHeader]}>{field.field_label}: </Text>
														<Text style={[styles.fontBody]}>{field.field_value != null ? field.field_value : field.field_option[0]}</Text>
													</View>
												);
											})
										}

										<View style={[styles.sectionRow, {marginLeft: 20, marginTop: 5, fontFamily: 'Source Sans Pro'}]}>
											<Text style={[styles.fontHeader]}>Notes: </Text>
											<Text style={[styles.fontBody]}>
												{letter[0] != null ? (
													(letter[0].notes == null || letter[0].notes == '') ? 'None' : letter[0].notes
													) : ''}
											</Text>
										</View>

										<View style={[styles.sectionRow, {marginLeft: 20, marginTop: 5, fontFamily: 'Source Sans Pro'}]}>
											<Text style={[styles.fontHeader]}>Supporting document: </Text>
											<Text style={[styles.fontBody]}>
												{letter[0] != null ? (
													(letter[0].supporting_docu == null || letter[0].supporting_docu == '') ? 'None' : letter[0].supporting_docu
													) : ''}
											</Text>
										</View>

										<View style={[styles.sectionRow, {marginTop: 50, marginBottom: 5, fontFamily: 'Source Sans Pro'}]}>
											<Text style={[styles.fontBody]}>Very truly yours,</Text>
										</View>

										<View style={[styles.sectionRow, {marginTop: 40, marginBottom: 5, fontFamily: 'Source Sans Pro'}]}>
											<Text style={[styles.fontBody]}>{letter[0] != null && empConverter(letter[0].src_employee_id)}</Text>
										</View>
									</View>
									<Image style={[styles.image]} src={logo}  />
								</View>
							</Page>
						</Document>
					</PDFViewer>
				)
		}
		</>
	);
}

export default PDFPreview;