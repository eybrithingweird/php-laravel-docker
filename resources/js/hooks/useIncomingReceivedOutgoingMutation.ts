import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'; 
import { useEffect, useState } from 'react';
import { CommentLetter, LetterFormWithId } from '../api/types';
import { patchLetterFormsReceived, updateLetter, updateLetterAdditional } from '../api/Incoming/api';
import { useSelectedLetter } from '../contexts/SelectedLetterContext';
import { addComment, cancelLetter, finalStep, passLetter, sendLetter, updateUrgentLetter } from '../api/Mysulat/api';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export const useIncomingReceivedOutgoingMutation = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { 
		selectedLetterForm, 
		setSelectedLetterForm,
		changedValue,
		setChangedValue
	} = useSelectedLetter();

	const { user_id } = useUser();

	const [ success, setSuccess ] = useState('');
	const [ error, setError ] = useState(null);
	const [ isSubmitting, setIsSubmitting ] = useState(false);

	const sendLetterSubmit = async (selectedLetterForm: any, isBufferEmp: boolean) => {
		const id = selectedLetterForm.id
		if (selectedLetterForm.is_sent){
			console.log('already marked sent');
			const data = {'user_id': selectedLetterForm.src_employee_id};
			const actionMaker = user_id;
			const res = await passLetterForward({id, data, actionMaker, isBufferEmp});
			console.log(res);
			if (res) {
				setTimeout(() => { 
					navigate(`/letters/outgoing`);
					navigate(0);
				}, 1000);
			}
		} else {
			console.log('not marked sent');
			const data = {'user_id': user_id};
			const res = await sendLetterForward({id, data});
			if (res) {
				setTimeout(() => { 
					navigate(`/letters/outgoing`);
				}, 1000);
			}
		}
	}

	const finalLetterSubmit = async (selectedLetterForm: any, closeModal: () => void, finalAction: string) => {
		const id = selectedLetterForm.id;
		const actionMaker = user_id;
		const data = {'status': finalAction, 'current_employee_id': null};
		const res = await finalStepLetter({id, data, actionMaker});
		if (res) {
			setTimeout(() => { 
				navigate(`/letters/received`);
				navigate(0);
			}, 1000);
		}
	}

	const cancelLetterSubmit = async (selectedLetterForm: any, closeModal: () => void, isBufferEmp: boolean) => {
		const actionMaker = user_id;
		const data = {
			'status': user_id === selectedLetterForm.src_employee_id ? 'withdrawn' : 'cancelled', 'current_employee_id': null, 
		};
		const id = selectedLetterForm.id;
		const res = await cancelLetterMutate({id, data, actionMaker, isBufferEmp});
		if (res) {
			console.log('success');
			if (data.status != 'withdrawn') {
				setTimeout(() => { 
					navigate(`/letters/incoming`);
				}, 1000);
			} else {
				// console.log('should be here');
				closeModal();
				// setTimeout(() => { 
				// 	navigate(0);
				// }, 1000);
			}
		}
	}

	const addCommentLetterSubmit = async (id: string, data: any, isBufferEmp: boolean) => {
		console.log(isBufferEmp);
		return await addCommentLetter({id, data, isBufferEmp})
	}

	const updateUrgentLetterForm = async (id: string, data: any, setLoading: (arg0: boolean) => void) => {
		const process = await updateUrgentLetterMutate({id, data});
		if (process) {
			setLoading(false);
			return process;
		}
	}

	const handleSubmit = async (additionalField: any, id: number) => { //USE: Call on API mutationConfig useMutation
		console.log('handleSubmit');
		console.log(selectedLetterForm.id);
		console.log(changedValue);
		setIsSubmitting(true);
		// console.log({
		// 	id: selectedLetterForm.id,
		// 	data: changedValue});
		console.log(id);
		if (additionalField) {
			return await updateLetterAdd({
				id: id,
				data: {
					field_label: Object.keys(changedValue)[0],
					field_value: changedValue[Object.keys(changedValue)[0]]
				}
			});
		} else {
			return await updateLetterForm({
				id: selectedLetterForm.id,
				data: changedValue});
		}
	}

	// Configurations for mutation
	const mutationConfig = {
		onSuccess: async () => {
			// Reset loading state
			await queryClient.invalidateQueries({ queryKey: ['isulat'] });
			setIsSubmitting(false);
			setSuccess('Letter has been updated.');
		},
		onError: (error: any) => {
			console.error(error);
			setError(error.message);
			setIsSubmitting(false);
		},
	};

	const { mutateAsync: updateLetterForm } = useMutation({ //await createLetter(data: LetterForm);
		mutationKey: ['updateLetter'],
		mutationFn: updateLetter,
		...mutationConfig,
	});

	const { mutateAsync: updateLetterAdd } = useMutation({ //await createLetter(data: LetterForm);
		mutationKey: ['updateLetterAdditional'],
		mutationFn: updateLetterAdditional,
		...mutationConfig,
	});

	const { mutateAsync: sendLetterForward } = useMutation({ //await sendLetter();
		mutationKey: ['sendLetter'],
		mutationFn: sendLetter,
		...mutationConfig,
	});

	const { mutateAsync: passLetterForward } = useMutation({ //await passLetter();
		mutationKey: ['passLetter'],
		mutationFn: passLetter,
		...mutationConfig,
	});

	const { mutateAsync: cancelLetterMutate } = useMutation({ //await cancelLetter();
		mutationKey: ['cancelLetter'],
		mutationFn: cancelLetter,
		...mutationConfig,
	});

	const { mutateAsync: finalStepLetter } = useMutation({ //await finalStep();
		mutationKey: ['finalStep'],
		mutationFn: finalStep,
		...mutationConfig,
	});

	// Configurations for mutation
	const mutationConfigUrgent = {
		onSuccess: async () => {
			// Reset loading state
			await queryClient.invalidateQueries({ queryKey: ['received'] });
			await queryClient.invalidateQueries({ queryKey: ['outgoing'] });
			// setIsSubmitting(false);
			// setSuccess('Letter has been updated.');
		},
		onError: (error: any) => {
			console.error(error);
			setError(error.message);
			setIsSubmitting(false);
		},
	};

	const { mutateAsync: updateUrgentLetterMutate } = useMutation({ //await updateUrgentLetter(data: {is_urgent: boolean});
		mutationKey: ['updateUrgentLetter'],
		mutationFn: updateUrgentLetter,
		...mutationConfigUrgent,
	});

	// Configurations for mutation
	const mutationConfigComment = {
		onSuccess: async () => {
			// Reset loading state
			await queryClient.invalidateQueries({ queryKey: ['comments'] });
			setIsSubmitting(false);
			setSuccess('Comment has been updated.');
		},
		onError: (error: any) => {
			console.error(error);
			setError(error.message);
			setIsSubmitting(false);
		},
	};

	const { mutateAsync: addCommentLetter } = useMutation({ //await addComment();
		mutationKey: ['comments'],
		mutationFn: addComment,
		...mutationConfigComment,
	});

	const markReceived = async (id: string, isBufferEmp: boolean) => {
		return await markReceivedMutate({id, user_id, isBufferEmp});
	}

	// Configurations for mutation
	const mutationConfigReceived = {
		onSuccess: async () => {
			// Reset loading state
			await queryClient.invalidateQueries({ queryKey: ['received'] });
			await queryClient.invalidateQueries({ queryKey: ['incoming'] });
			setIsSubmitting(false);
			// setSuccess('Comment has been updated.');
		},
		onError: (error: any) => {
			console.error(error);
			setError(error.message);
			setIsSubmitting(false);
		},
	};

	const { mutateAsync: markReceivedMutate } = useMutation({ //await addComment();
		mutationKey: ['received'],
		mutationFn: patchLetterFormsReceived,
		...mutationConfigReceived,
	});

	return {
		isSubmitting,
		setIsSubmitting,
		error,
		setError,
		success,
		setSuccess,
		handleSubmit,
		sendLetterSubmit,
		cancelLetterSubmit,
		addCommentLetterSubmit,
		finalLetterSubmit,
		markReceived,
		updateUrgentLetterForm
	};
};