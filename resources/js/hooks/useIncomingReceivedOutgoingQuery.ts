import { useQuery } from '@tanstack/react-query'; 
import { useEffect, useState } from 'react';
import { LetterForm, CommentLetter, FormStatusWithId, Employee, BufferEmployee } from '../api/types';
import { fetchLetterFormsOutgoing, fetchLetterFormsIncoming, fetchCommentLetter, fetchLetterForms, fetchEmployees, fetchLetterFormsReceived, fetchLetterFormsWithdrawn, fetchLetterFormsTagged, fetchBufferEmployees, fetchLetterFormsCancelled } from '../api/Incoming/api';
import { useUser } from '../contexts/UserContext';

export const useIncomingReceivedOutgoingQuery = () => {
	const [letterFormsOutgoing, setLetterFormsOutgoing] = useState<any>([]);
	const [letterFormsIncoming, setLetterFormsIncoming] = useState<any>([]);
	const [letterFormsReceived, setLetterFormsReceived] = useState<any>([]);
	const [letterFormsWithdrawn, setLetterFormsWithdrawn] = useState<any>([]);
	const [letterFormsCancelled, setLetterFormsCancelled] = useState<any>([]);
	const [letterFormsTagged, setLetterFormsTagged] = useState<any>([]);

	const [employees, setEmployees] = useState<Employee[]>([]);
	const [bufferEmployees, setBufferEmployees] = useState<BufferEmployee[]>([]);

	const {
		user_id
	} = useUser();

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

	// Buffer employees query
	const { isFetching: isFetchingBufferEmp, data: bufferEmpQuery } = useQuery({
		queryKey: ['buffer_employee'],
		queryFn: () => fetchBufferEmployees(),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const bufferEmployees = bufferEmpQuery;
		if (bufferEmployees) {
			setBufferEmployees(bufferEmployees);
		}
	}, [bufferEmpQuery]);

	// Outgoing letter forms query
	const { isFetching: isFetchingOutgoing, data: fetchFormsOutgoing } = useQuery({
		queryKey: ['outgoing'],
		queryFn: () => fetchLetterFormsOutgoing(user_id),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const formStatuses = fetchFormsOutgoing;
		if (formStatuses) {
			console.log(formStatuses);
			setLetterFormsOutgoing(formStatuses);
		}
	}, [fetchFormsOutgoing]);

	// Incoming letter forms query
	const { isFetching: isFetchingIncoming, data: fetchFormsIncoming } = useQuery({
		queryKey: ['incoming'],
		queryFn: () => fetchLetterFormsIncoming(user_id),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const formStatuses = fetchFormsIncoming;
		if (formStatuses) {
			console.log(formStatuses);
			setLetterFormsIncoming(formStatuses);
		}
	}, [fetchFormsIncoming]);

	// Received letter forms query
	const { isFetching: isFetchingReceived, data: fetchFormsReceived } = useQuery({
		queryKey: ['received'],
		queryFn: () => fetchLetterFormsReceived(user_id),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const formStatuses = fetchFormsReceived;
		if (formStatuses) {
			console.log(formStatuses);
			setLetterFormsReceived(formStatuses);
		}
	}, [fetchFormsReceived]);

	// Withdrawn letter forms query
	const { isFetching: isFetchingWithdrawn, data: fetchFormsWithdrawn } = useQuery({
		queryKey: ['withdrawn'],
		queryFn: () => fetchLetterFormsWithdrawn(user_id),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const formStatuses = fetchFormsWithdrawn;
		if (formStatuses) {
			console.log(formStatuses);
			setLetterFormsWithdrawn(formStatuses);
		}
	}, [fetchFormsWithdrawn]);

	// Cancelled letter forms query
	const { isFetching: isFetchingCancelled, data: fetchFormsCancelled } = useQuery({
		queryKey: ['cancelled'],
		queryFn: () => fetchLetterFormsCancelled(user_id),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const formStatuses = fetchFormsCancelled;
		if (formStatuses) {
			console.log(formStatuses);
			setLetterFormsCancelled(formStatuses);
		}
	}, [fetchFormsCancelled]);

	// Tagged in comments letter forms query
	const { isFetching: isFetchingTagged, data: fetchFormsTagged } = useQuery({
		queryKey: ['tagged'],
		queryFn: () => fetchLetterFormsTagged(user_id),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const commentLetters = fetchFormsTagged;
		if (commentLetters) {
			console.log(commentLetters);
			setLetterFormsTagged(commentLetters);
		}
	}, [fetchFormsTagged]);

	return {
		letterFormsOutgoing,
		isFetchingOutgoing,
		letterFormsIncoming,
		isFetchingIncoming,
		letterFormsReceived,
		isFetchingReceived,
		letterFormsWithdrawn,
		isFetchingWithdrawn,
		letterFormsCancelled,
		isFetchingCancelled,
		letterFormsTagged,
		isFetchingTagged,
		employees,
		isFetchingEmp,
		bufferEmployees,
		isFetchingBufferEmp
	};
};