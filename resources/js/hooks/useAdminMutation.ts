import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'; 
import { useEffect, useState } from 'react';
import { EmployeeOIC, RequestFields, RequestTypeAdd } from '../api/types';
// import {  fetchRequestTypes } from '../api/Create/api';
import { useAdmin } from '../contexts/AdminContext';
import { postChannels, addRequestType, addOICEmployee, fetchRequestFields, addRequestField, editRequestField, removeRequestField, addAllFields, addBufferEmployee, editBufferEmployee, removeBufferEmployee } from '../api/Admin/api';
import { Description } from '@headlessui/react';

export const useAdminMutation = () => {
	const queryClient = useQueryClient();

	const [ success, setSuccess ] = useState('');
	const [ error, setError ] = useState<any>(null);
	const [ isSubmitting, setIsSubmitting ] = useState(false);
	const [ submitChannels, setSubmitChannels ] = useState<any[][]>([]);

	const [ newChannelData, setNewChannelData ] = useState<RequestTypeAdd>({} as RequestTypeAdd);
	const [ newOICData, setNewOICData ] = useState<EmployeeOIC>({} as EmployeeOIC);

	const [ requestName, setRequestName ] = useState('');
	const [ requestDef, setRequestDef ] = useState('');
	const [ isApprovableByOIC, setIsApprovableByOIC ] = useState(false);

	const { 
		requestTypes,
		allFields,
		requestFields,
		selectedRequestType,
		selectedChannels,
		employees,
		selectedEmployee,
		bufferEmployees,
		bufferEmpList,
		offices,
		currentFields 
	} = useAdmin();

	// const fetchFormFields = async (id: number) => {
	// 	const fields = requestFields.filter((field) => field.request_type_id === id);
	// 	return fields;
	// };

	useEffect(() => {
		if (isSubmitting){
			handleSubmit();
		}
	}, [submitChannels]);

	const handleSubmit = async () => { //USE: Call on API mutationConfig useMutation
		// console.log('handleSubmit');
		const reqID = requestTypes.filter((option) => option.reqtype === selectedRequestType)[0].id;
		return await postAllChannels({
			request_type_id: reqID,
			dst_offices_id: submitChannels
		});
	};

	const filterSubmit = () => { //USE: Setting the variables for adding channels to existing request types -> passed to handleSubmit
		// console.log('filterSubmit');
		setIsSubmitting(true);
		setError(null);
		setSuccess('');
		setSubmitChannels(selectedChannels.map((channel) => [channel.office_id, channel.designation]));
	};

	// Configurations for mutation
	const mutationConfig = {
		onSuccess: async () => {
			// Reset loading state
			await queryClient.invalidateQueries({ queryKey: ['channels'] });
			setIsSubmitting(false);
			setSuccess('Channels successfully saved.'); 
		},
		onError: (error: any) => {
			console.error(error);
			setError(error.message);
			setIsSubmitting(false);
		},
	};

	const { mutateAsync: postAllChannels } = useMutation({ //await postAllChannels(submitChannels);
		mutationKey: ['postChannels'],
		mutationFn: postChannels,
		...mutationConfig,
	});

	const addRequestTypeSubmit = async () => { //USE: Setting the variables for adding new channel -> pass directly to useMutation
		// console.log('filterSubmit');
		setIsSubmitting(true);
		setError(null);
		setSuccess('');
		return await addRequestTypeMutate({
			reqtype: newChannelData?.reqtype,
			definition: newChannelData?.definition,
			is_approvable_by_oic: newChannelData?.is_approvable_by_oic
		});
	};

	const mutationConfigNew = {
		onSuccess: async () => {
			// Reset loading state
			await queryClient.invalidateQueries({ queryKey: ['requesttypes'] });
			setIsSubmitting(false);
			setSuccess(`Request type (${newChannelData.reqtype}) and its description has been added.`);

			setRequestName('');
			setRequestDef('');
		},
		onError: (error: any) => {
			console.error(error);
			setError(error.message);
			setIsSubmitting(false);
		},
	};

	const { mutateAsync: addRequestTypeMutate } = useMutation({ //await postAllChannels(submitChannels);
		mutationKey: ['addRequestType'],
		mutationFn: addRequestType,
		...mutationConfigNew,
	});

	const addOICEmployeeSubmit = async () => { //USE: Setting the variables for adding new employee_oic -> pass directly to useMutation
		// console.log('filterSubmit');
		setIsSubmitting(true);
		setError(null);
		setSuccess('');
		// console.log(newOICData);
		return await addOICEmployeeMutate(newOICData);
	};

	const mutationConfigOIC = {
		onSuccess: async () => {
			// Reset loading state
			await queryClient.invalidateQueries({ queryKey: ['employee_oic'] });
			setIsSubmitting(false);
			setSuccess('Employee has been added as OIC.');
		},
		onError: (error: any) => {
			console.error(error);
			setError(error.message);
			setIsSubmitting(false);
		},
	};

	const { mutateAsync: addOICEmployeeMutate } = useMutation({ //await postOICEmployee(newOICData);
		mutationKey: ['addOICEmployee'],
		mutationFn: addOICEmployee,
		...mutationConfigOIC,
	});

	const [ numberOfFunctions, setNumberOfFunctions ] = useState(0);
	const [ isRunning, setIsRunning ] = useState(false);
	const [ hasDifference, setHasDifference ] = useState(false);

	useEffect(() => {
		console.log(numberOfFunctions, isRunning);
		// console.log(currentFields[0] == null);
		if (numberOfFunctions == 0 && isRunning){
			// console.log('numberOfFunctions == 0');
			setIsSubmitting(false);
			if (currentFields[0] == null) { 
				setSuccess('OC employees edited successfully.');
			} else {
				setSuccess('Request fields edited successfully.'); 
			}
			setIsRunning(false);
		}
	}, [numberOfFunctions]);

	const requestFieldSubmit = async (originalState: any[]) => { //USE: Setting the variables for adding or editing request field -> process in loop and pass each to useMutation
		var hasDiffCheck = false;
		if (originalState.length != currentFields.length) { hasDiffCheck = true; }
		currentFields.map((field) => {
			const originCheck = originalState.filter((origin) => origin.id === field.id)[0];
			if (originCheck == null) {
				hasDiffCheck = true;
			} else if (originCheck.all_field_id != field.all_field_id) {
				hasDiffCheck = true;
			}
		});

		if (hasDiffCheck === false) { setError("No changes have been made."); return; }

		setIsSubmitting(true);
		setError(null);
		setSuccess('');
		setIsRunning(true);
		setHasDifference(true);
		currentFields.map(async (field) => {
			console.log(field);
			if (field.created_at != null) {
				//Check if data is only edited
				const originCheck = originalState.filter((origin) => origin.id === field.id)[0];
				if (originCheck.all_field_id != field.all_field_id) {
					return await editRequestFieldMutate({
						id: field.id,
						data: {all_field_id: field.all_field_id}
					});
				}
			} else {
				//Check if data needs to be added
				//Before adding, check if new data needs to be added to all_fields
				if (field.all_field_id == 123) { //add first to allfield, then get resulting ID and add to request-field table
					const res = await addAllFieldsMutate({
						field: field.newFieldName,
						field_type: field.newFieldType,
						field_options: field.newFieldOptions
					});
					const id = res.id;
					return await addRequestFieldMutate({
						all_field_id: id,
						request_type_id: field.request_type_id
					});
				} else { //only needs to add to request-field table 
					return await addRequestFieldMutate({
						all_field_id: field.all_field_id,
						request_type_id: field.request_type_id
					});
				}
			}
		});
		//Check currentFields data if any have been removed, if yes: remove
		originalState.map(async (field, index) => {
			const checkIfExists = currentFields.filter((currentField) => currentField.id === field.id);
			if (checkIfExists.length === 0) {
				return await removeRequestFieldMutate(field.id);
			}
		})
		setHasDifference(false);
	};

	const mutationConfigAllFields = {
		onMutate: async () => {
			console.log('test');
			setNumberOfFunctions(numberOfFunctions + 1);
		},
		onSuccess: async () => {
			// Reset loading state
			setNumberOfFunctions(numberOfFunctions - 1);
			await queryClient.invalidateQueries({ queryKey: ['allfields'] });
			// setIsSubmitting(false);
			// setSuccess('Employee has been added as OIC.');
		},
		onError: (error: any) => {
			console.error(error);
			setError(error.message);
			setIsSubmitting(false);
		},
	};

	const mutationConfigFields = {
		onMutate: async () => {
			console.log('test');
			setNumberOfFunctions(numberOfFunctions + 1);
		},
		onSuccess: async () => {
			// Reset loading state
			setNumberOfFunctions(numberOfFunctions - 1);
			await queryClient.invalidateQueries({ queryKey: ['request-field'] });
			// setIsSubmitting(false);
			// setSuccess('Employee has been added as OIC.');
		},
		onError: (error: any) => {
			console.error(error);
			setError(error.message);
			setIsSubmitting(false);
		},
	};

	const { mutateAsync: addAllFieldsMutate } = useMutation({ //await addAllFields(data);
		mutationKey: ['addAllFields'],
		mutationFn: addAllFields,
		...mutationConfigAllFields,
	});

	const { mutateAsync: addRequestFieldMutate } = useMutation({ //await addRequestField(data);
		mutationKey: ['addRequestField'],
		mutationFn: addRequestField,
		...mutationConfigFields,
	});

	const { mutateAsync: editRequestFieldMutate } = useMutation({ //await editRequestField(id, data);
		mutationKey: ['editRequestField'],
		mutationFn: editRequestField,
		...mutationConfigFields,
	});

	const { mutateAsync: removeRequestFieldMutate } = useMutation({ //await removeRequestField(id);
		mutationKey: ['removeRequestField'],
		mutationFn: removeRequestField,
		...mutationConfigFields,
	});

	useEffect(() => {
		console.log(hasDifference);
	}, [hasDifference]);

	// const [ checkDifference, setCheckDifference ] = useState<any[]>([]);
	// useEffect(() => {
	// 	console.log(checkDifference);
	// }, [checkDifference]);
	const bufferEmployeeSubmit = async () => {
		const fromZero = bufferEmployees.length === 0 && bufferEmpList.length != 0 ? true : false;
		// console.log(bufferEmployees.length);
		// console.log(bufferEmpList.length);
		// console.log(bufferEmpList);

		const checkDifference = bufferEmpList.map((field) => {
			const originCheck = bufferEmployees.filter((origin) => origin.id === field.id)[0];
			console.log(originCheck);
			if (originCheck == null || originCheck.buffer_employee_id != field.buffer_employee_id || originCheck.has_full_permissions != field.has_full_permissions) {
				return true;
			} else { return false }
		});

		// console.log(!checkDifference.includes(true));
		// console.log(checkDifference, fromZero);

		if (!checkDifference.includes(true) || fromZero === false) { setError("No changes have been made."); return; }

		setIsSubmitting(true);
		setError(null);
		setSuccess('');
		setIsRunning(true);
		bufferEmpList.map(async (field) => {
			console.log(field);
			if (field.created_at != null) {
				//Check if data is only edited
				const originCheck = bufferEmployees.filter((origin) => origin.id === field.id)[0];
				if (originCheck.buffer_employee_id != field.buffer_employee_id || originCheck.has_full_permissions != field.has_full_permissions) {
					return await editBufferEmployeeMutate({ //TODO: editBufferEmployeeMutate
						id: field.id,
						data: {buffer_employee_id: field.buffer_employee_id, has_full_permissions: field.has_full_permissions}
					});
				}
			} else {
				return await addBufferEmployeeMutate({ //TODO: addBufferEmployeeMutate
					buffer_employee_id: field.buffer_employee_id,
					has_full_permissions: field.has_full_permissions,
					added_by_employee_id: field.added_by_employee_id
				});
			}
		});
		//Check bufferEmpList data if any have been removed, if yes: remove
		bufferEmployees.map(async (field) => {
			const checkIfExists = bufferEmpList.filter((currentEmp) => field.created_at != null && field.created_at == currentEmp.created_at &&currentEmp.id === field.id);
			if (checkIfExists.length === 0) {
				return await removeBufferEmployeeMutate(field.id); //TODO: removeBufferEmployeeMutate
			}
		});

		setHasDifference(false);
	}

	const mutationConfigBuffer = {
		onMutate: async () => {
			setNumberOfFunctions(numberOfFunctions + 1);
		},
		onSuccess: async () => {
			// Reset loading state
			await queryClient.invalidateQueries({ queryKey: ['buffer_employee'] });
			setNumberOfFunctions(numberOfFunctions - 1);
			// setIsSubmitting(false);
			// setSuccess('Employee has been added as OIC.');
		},
		onError: (error: any) => {
			console.error(error);
			setError(error.message);
			setIsSubmitting(false);
		},
	};

	const { mutateAsync: addBufferEmployeeMutate } = useMutation({ //await addBufferEmployee(data);
		mutationKey: ['addBufferEmployee'],
		mutationFn: addBufferEmployee,
		...mutationConfigBuffer,
	});

	const { mutateAsync: editBufferEmployeeMutate } = useMutation({ //await editBufferEmployee(id, data);
		mutationKey: ['editBufferEmployee'],
		mutationFn: editBufferEmployee,
		...mutationConfigBuffer,
	});

	const { mutateAsync: removeBufferEmployeeMutate } = useMutation({ //await removeBufferEmployee(data);
		mutationKey: ['removeBufferEmployee'],
		mutationFn: removeBufferEmployee,
		...mutationConfigBuffer,
	});

	return {
		// value,
		// setValue,
		// fetchFormFields,

		newChannelData,
		setNewChannelData,

		newOICData,
		setNewOICData,

		requestName,
		setRequestName,
		requestDef,
		setRequestDef,
		isApprovableByOIC, 
		setIsApprovableByOIC,

		isSubmitting,
		setIsSubmitting,
		error,
		setError,
		success,
		setSuccess,

		filterSubmit,
		addRequestTypeSubmit,
		addOICEmployeeSubmit,
		requestFieldSubmit,
		bufferEmployeeSubmit
	};
};
