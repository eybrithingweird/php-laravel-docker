import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'; 
import { useEffect, useState } from 'react';
import { RequestTypeAdd, LetterForm, FormAddfield, LetterFormWithId, FormStatus, FormStatusWithId } from '../api/types';
import { addFields, addFormStatus, fetchRequestTypes } from '../api/Create/api';
import { createLetter } from '../api/Create/api';
import { Description } from '@headlessui/react';
import { useCreate } from '../contexts/CreateContext';
import { useUser } from '../contexts/UserContext';

export const useCreateMutation = () => {
	const queryClient = useQueryClient();

	const [ success, setSuccess ] = useState('');
	const [ error, setError ] = useState(null);
	const [ isSubmitting, setIsSubmitting ] = useState(false);

	const { 
		requestTypes,
		selectedRequestType,
		selectedChannels,
		selectedEmployee,
		additionalFields,
		addFieldsValue,
		subjectValue,
		additionalNotes,
		supportingDocs,
		allChannels,
		draftChannels,
		setDraftChannels,
		employees,
		employeesOIC,
		offices,
		resultLetterID,
		setResultLetterID
	} = useCreate();

	const {
		user_id
	} = useUser();

	// useEffect(() => {
	// 	if (isSubmitting){
	// 		handleSubmit();
	// 	}
	// }, [submitChannels]);

	// const handleSubmitCreate = async (data: LetterForm) => { //USE: Call on API mutationConfig useMutation
	// 	// console.log('handleSubmit');
		
	// 	return await createLetterForm(data);
	// };

	const filterSubmit = async (e: any) => { //USE: Setting the variables for adding channels to existing request types -> passed to handleSubmit
		e.preventDefault();
		// console.log('filterSubmit');
		setIsSubmitting(true);
		setError(null);
		setSuccess('');

		// console.log(selectedChannels); //TODO: Add these when employees table is finished
		// console.log(selectedEmployee); //TODO: Add these when employees table is finished
		//** */
		// console.log(addFieldsValue);
		// console.log(additionalNotes);
		// console.log(supportingDocs);
		// console.log(document.getElementById('employeeOfficeComboFlexi')?.getElementsByTagName('input')[0]);

		const request = requestTypes.find(
			(req) => req.reqtype === selectedRequestType,
		)

		const data: LetterForm = {
			subject: subjectValue,
			request_type_id: request ? request.id : 0,
			src_employee_id: user_id,
			letter_date: new Date().toLocaleDateString(),
			notes: additionalNotes,
			supporting_docu: supportingDocs,
			is_sent: false,
		}

		// console.log(data);
		const letterFormData: LetterFormWithId = await createLetterForm(data); //NOTE: First step in creating a letter form
		// console.log(letterFormData);
		setResultLetterID(letterFormData.id);

		for (let key of Object.keys(addFieldsValue)) {
			const field: FormAddfield = {
				letter_form_id: letterFormData.id,
				field_label: key,
				field_type: additionalFields.find((field) => field.field === key)?.field_type,
				field_value: 
					additionalFields.find((field) => field.field === key)?.field_type === 'text' || 
					additionalFields.find((field) => field.field === key)?.field_type === 'file' ? addFieldsValue[key] : null,
				field_option: 
					additionalFields.find((field) => field.field === key)?.field_type === 'radio' ? addFieldsValue[key] : null,
			}
			// console.log(field);
			// createLetterForm(field);
			// console.log(key);
			// console.log(addFieldsValue[key]);
			// console.log(field);
			await addFormAddfields(field); //NOTE: Second step in creating a letter form
		}
		//** */
		const final = employees.filter((employee) => 
			employee.first_name.toUpperCase() + ' ' + employee.last_name.toUpperCase() === selectedEmployee)[0];
		// console.log(draftChannels);
		// setDraftChannels ([...draftChannels, final]);

		// const addEmp = document.getElementById('employeeOfficeComboFlexi')?.getElementsByTagName('input')[0].value;
		// console.log(document.getElementById('employeeOfficeComboFlexi')?.getElementsByTagName('input')[0].value);
		// console.log(document.getElementById('officeComboFlexi')?.getElementsByTagName('input')[0].value);
		
		// console.log(draftChannels);
		const channelStatus: any[] = [];
		for (let i = 0; i < draftChannels.length; i++) {
			const channel = draftChannels[i];
			if (channel.length === 1) {
				const empOic = employeesOIC.filter((option) => { return option.oic_of_employee_id === channel[0].id })[0];
				if (empOic) {
					channelStatus.push(empOic.id); //TODO: FINALIZE PATHWAY CONNECTION FOR OIC, SHOULD STILL BE VISIBLE TO ORIGINAL EMPLOYEE
				} else {
					channelStatus.push(channel[0].id);
				}
				// channelStatus.push(channel[0].id);
			} else {
				const addEmp = document.getElementById('employeeOfficeComboFlexi')?.getElementsByTagName('input')[0].value;
				const addOff = document.getElementById('officeComboFlexi')?.getElementsByTagName('input')[0].value;
				const allColleges = document.getElementById('allColleges');
				const allViceChancellors = document.getElementById('allViceChancellors');
				if (addEmp != null && !addEmp?.toLowerCase().includes("typing")) {
					//NOTE: Choice of which vice chancellor
					const splitEmp = addEmp?.split("(")[0].trim();
					const id = employees.filter((employee) => 
						employee.first_name.toUpperCase() + ' ' + employee.last_name.toUpperCase() === splitEmp)[0].id;
					// console.log(splitEmp);
					// console.log(id);
					channelStatus.push(id);
				} else if (addOff != null &&!addOff?.toLowerCase().includes("typing")){
					//NOTE: Choice of which college departments
					const splitOff = addOff?.split("(")[0].trim();
					console.log(splitOff);
					const id = offices.filter((office) => office.address.toUpperCase() === splitOff?.toUpperCase())[0].id;
					console.log(id);
					const listDept = () => {
						switch (id) {
							case 12: //COE
								// return [13, 14, 15, 16, 96];
								const filterCOE = 
									employees.filter((employee) => 
										employee.office_id === 13 || 
										employee.office_id === 14 || 
										employee.office_id === 15 || 
										employee.office_id === 16);
								const listCOE = filterCOE.map((employee) => employee.id);
								return listCOE;
							case 17: //CSM
								// return [18, 19, 20, 21];
								const filterCSM = 
									employees.filter((employee) => 
										employee.office_id === 18 || 
										employee.office_id === 19 || 
										employee.office_id === 20 || 
										employee.office_id === 21);
								const listCSM = filterCSM.map((employee) => employee.id);
								return listCSM;
							case 22: //CED
								// return [23, 24, 25, 26];
							case 27: //CEBA
								// return [28, 29, 30, 31];
								const filterCEBA = 
									employees.filter((employee) => 
										employee.office_id === 28 || 
										employee.office_id === 29 || 
										employee.office_id === 30 || 
										employee.office_id === 31);
								const listCEBA = filterCEBA.map((employee) => employee.id);
								return listCEBA;
							case 32: //CHS
								// return 32;
								const filterCHS = 
									employees.filter((employee) => employee.office_id === 32);
								const listCHS = filterCHS.map((employee) => employee.id);
								return listCHS;
							case 33: //CASS
								// return [34, 35, 36, 37, 38, 39, 40];
								const filterCASS = 
									employees.filter((employee) => 
										employee.office_id === 34 || 
										employee.office_id === 35 || 
										employee.office_id === 36 || 
										employee.office_id === 37 ||
										employee.office_id === 38 ||
										employee.office_id === 39 ||
										employee.office_id === 40);
								const listCASS = filterCASS.map((employee) => employee.id);
								return listCASS;
							case 41: //CCS
								// return [42, 43, 44];
								const filterCCS = 
									employees.filter((employee) => 
										employee.office_id === 42 || 
										employee.office_id === 43 || 
										employee.office_id === 44);
								const listCCS = filterCCS.map((employee) => employee.id);
								return listCCS;
							default: //SIS
								// return 45;
								const filterSIS = 
									employees.filter((employee) => employee.office_id === 45);
								const listSIS = filterSIS.map((employee) => employee.id);
								return listSIS;
						}
					} 
					channelStatus.push(listDept());
				} else if (allColleges != null) {
					console.log(channel);
					channelStatus.push(channel);
				} else if (allViceChancellors != null) {
					console.log(channel);
					channelStatus.push(channel);
				}
				// channelStatus.push(addEmp != null ? addEmp : addOff);
			}
		}
		console.log(channelStatus);
		if (final.id === '0001'){
			channelStatus.push([1, final.id]);
		} else {
			channelStatus.push(final.id);
		}
		// channelStatus.push([1, final.id]);

		// typeof channelStatus[0] === 'string' ?
		// 		channelStatus[0].toString() :
		// 			channelStatus[0].length > 1 ? 
		// 			( channelStatus[0][0].id != null ? channelStatus[0][0].id.toString() : channelStatus[0][0].toString() ) : 
		// 			( channelStatus[0].id != null ? channelStatus[0].id.toString() : channelStatus[0].toString() ),

		const formStatusData: FormStatus = {
			letter_form_id: letterFormData.id,
			status: 'in progress',
			current_employee_id: null,
			next_employee_id: null,
			dst_employee_id: channelStatus
		};

		await addFormStat(formStatusData); //NOTE: Third step in creating a letter form
		// const channelStatus = 

		// Object.keys(addFieldsValue).map(async function (key) {
		// 	console.log("test");
		// 	const field: FormAddfield = {
		// 		letter_form_id: letterFormData.id,
		// 		field_label: key,
		// 		field_type: additionalFields.find((field) => field.field === key)?.field_type,
		// 		field_value: 
		// 			additionalFields.find((field) => field.field === key)?.field_type === 'text' || 
		// 			additionalFields.find((field) => field.field === key)?.field_type === 'file' ? addFieldsValue[key] : '',
		// 		field_option: 
		// 			additionalFields.find((field) => field.field === key)?.field_type === 'radio' ? addFieldsValue[key] : '',
		// 	}
		// 	// console.log(field);
		// 	// createLetterForm(field);
		// 	// console.log(key);
		// 	// console.log(addFieldsValue[key]);
		// 	// console.log(field);
		// 	const res = await addFormAddfields(field);
		// 	if (res) {
		// 		console.log(res);
		// 	}
		// })
		// console.log(addFieldsValue[0]);
	};

	// const data: FormAddfield = {
			// 	letter_form_id: letterFormData[0].id,
			// 	field_label: field.field_label,
			// 	field_type: field.field_type,
			// 	field_value: field.field_value,
			// 	field_options: field.field_options,
			// }

	// Configurations for mutation
	const mutationConfig = {
		onSuccess: async () => {
			// Reset loading state
			await queryClient.invalidateQueries({ queryKey: ['isulat'] });
			// setIsSubmitting(false);
			// setSuccess('Letter has been created. Redirecting...');
		},
		onError: (error: any) => {
			console.error(error);
			setError(error.message);
			setIsSubmitting(false);
		},
	};

	// Configurations for final (last step) mutation
	const mutationConfigLast = {
		onSuccess: async () => {
			// Reset loading state
			await queryClient.invalidateQueries({ queryKey: ['isulat'] });
			setIsSubmitting(false);
			setSuccess('Letter has been created. Redirecting...');
		},
		onError: (error: any) => {
			console.error(error);
			setError(error.message);
			setIsSubmitting(false);
		},
	};

	const { mutateAsync: createLetterForm } = useMutation({ //await createLetter(data: LetterForm);
		mutationKey: ['createLetter'],
		mutationFn: createLetter,
		...mutationConfig,
	});

	const { mutateAsync: addFormAddfields } = useMutation({ //await addFields(data: FormAddfields);
		mutationKey: ['addFields'],
		mutationFn: addFields,
		...mutationConfig,
	});

	// const { mutateAsync: addChannelStatus } = useMutation({ //await addChannelStat(data: ChannelStatus);
	// 	mutationKey: ['addChannelStat'],
	// 	mutationFn: addChannelStat,
	// 	...mutationConfig,
	// });

	const { mutateAsync: addFormStat } = useMutation({ //await addFormStatus(data: FormStatus);
		mutationKey: ['addFormStatus'],
		mutationFn: addFormStatus,
		...mutationConfigLast,
	});

	return {
		isSubmitting,
		setIsSubmitting,
		error,
		setError,
		success,
		setSuccess,
		filterSubmit,
	};
};
