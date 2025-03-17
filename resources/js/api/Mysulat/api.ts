import axios from "axios";
import * as types from "../types";
import { API_URLS } from "../Url";
// import { useUser } from "../../contexts/UserContext";

// const {
// 	user_id
// } = useUser();

// NOTE: GET == response.data.data, POST == response.data

export const fetchLetterForms = async(id: string): Promise<types.LetterFormWithId[]> => {
	return await axios
		.get(`${API_URLS.MYSULAT}/${id}`)
		.then((response) => response.data.data);
};

export const fetchEmployees = async(): Promise<types.Employee[]> => {
	return await axios
		.get(`${API_URLS.EMPLOYEES}`)
		.then((response) => response.data.data);
};

export const fetchOffices = async(): Promise<types.Office[]> => {
	return await axios
		.get(`${API_URLS.OFFICES}`)
		.then((response) => response.data.data);
};

export const fetchAddFields = async(id: string): Promise<types.FormAddfield[]> => {
	return await axios
		.get(`${API_URLS.FORM_ADDFIELD}/${id}`)
		.then((response) => {
			// console.log(response.data);
			return response.data.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const fetchFormStatus = async(id: string): Promise<types.FormStatusWithId[]> => {
	return await axios
		.get(`${API_URLS.FORM_STATUS}/${id}`)
		.then(async (response) => {
			console.log(response.data.data);
			return response.data.data[0];
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const sendLetter = async({id, data} : {id: string, data: any}): Promise<any> => {
	return await axios
		.patch(`${API_URLS.SEND}/${id}`, {'is_sent': true, 'letter_date': new Date().toLocaleDateString(),})
		.then(async (response) => {
			console.log(response);
			const addHistory = await axios
				.post(`${API_URLS.FORM_HISTORY}`, {
					'letter_form_id': id,
					'src_employee_id': data.user_id,
					'action_description': 'Sent Letter Form'
				})
				.then((response) => {
					console.log(response.data);
					// return response.data;
				})
				.catch((error) => {
					console.log(error); 
					throw error;
				})
			return await axios
				.patch(`${API_URLS.OUTGOING}/${id}`, data)
				.then((response) => {
					console.log(response);
					return response.data;
				})
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const passLetter = async({id, data, actionMaker, isBufferEmp} : {id: string, data: any, actionMaker: string, isBufferEmp: boolean}): Promise<any> => {
	return await axios
		.patch(`${API_URLS.OUTGOING}/${id}`, data)
		.then(async (response) => {
			console.log(response);
			const addHistory = await axios
				.post(`${API_URLS.FORM_HISTORY}`, {
					'letter_form_id': id,
					'src_employee_id': isBufferEmp ? 'Office of the Chancellor' : actionMaker,
					'action_description': 'Forwarded Letter Form'
				})
				.then((response) => {
					console.log(response.data);
					// return response.data;
				})
				.catch((error) => {
					console.log(error); 
					throw error;
				})
			return response.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const cancelLetter = async({id, data, actionMaker, isBufferEmp} : {id: string, data: any, actionMaker: string, isBufferEmp: boolean}): Promise<types.FormStatusWithId[]> => {
	return await axios
		.patch(`${API_URLS.FORM_STATUS}/${id}`, data)
		.then(async (response) => {
			console.log(response.data);
			const addHistory = await axios
				.post(`${API_URLS.FORM_HISTORY}`, {
					'letter_form_id': id,
					'src_employee_id': isBufferEmp ? 'Office of the Chancellor' : actionMaker,
					'action_description': data.status === 'withdrawn' ? 'Withdrawn Letter Form' : 'Cancelled Letter Form'
				})
				.then((response) => {
					console.log(response.data);
					// return response.data;
				})
				.catch((error) => {
					console.log(error); 
					throw error;
				})
			return response.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const finalStep = async({id, data, actionMaker} : {id: string, data: any, actionMaker: string}): Promise<any> => {
	return await axios
		.patch(`${API_URLS.FINAL_ACTION}/${id}`, data)
		.then(async (response) => {
			console.log(response);
			const addHistory = await axios
				.post(`${API_URLS.FORM_HISTORY}`, {
					'letter_form_id': id,
					'src_employee_id': actionMaker,
					'action_description': 'Final step: ' + data.status
				})
				.then((response) => {
					console.log(response.data);
					// return response.data;
				})
				.catch((error) => {
					console.log(error); 
					throw error;
				})
			return response.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const updateUrgentLetter = async({id, data} : {id: string, data: any}): Promise<any> => {
	console.log(data);
	return await axios
		.patch(`${API_URLS.IS_URGENT}/${id}`, data)
		.then(async (response) => {
			console.log(response);
			// const addHistory = await axios
			// 	.post(`${API_URLS.FORM_HISTORY}`, {
			// 		'letter_form_id': id,
			// 		'src_employee_id': data.user_id,
			// 		'action_description': 'Sent Letter Form'
			// 	})
			// 	.then((response) => {
			// 		console.log(response.data);
			// 		// return response.data;
			// 	})
			// 	.catch((error) => {
			// 		console.log(error); 
			// 		throw error;
			// 	})
			// return await axios
			// 	.patch(`${API_URLS.OUTGOING}/${id}`, data)
			// 	.then((response) => {
			// 		console.log(response);
			// 		return response.data;
			// 	})
			return response.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const addComment = async({id, data, isBufferEmp} : {id: string, data: any, isBufferEmp: boolean}): Promise<types.CommentLetterAll[]> => {
	return await axios
		.post(`${API_URLS.COMMENT_LETTER}/${id}`, data)
		.then(async (response) => {
			// console.log(response.data);
			if (data.hidden_from_requester == false){ //Note: comment history is not added if hidden from requester
				const addHistory = await axios
					.post(`${API_URLS.FORM_HISTORY}`, {
						'letter_form_id': id,
						'src_employee_id': isBufferEmp ? 'Office of the Chancellor' : data.src_employee_id, 
						'action_description': 'Added Comment'
					})
					.then((response) => {
						console.log(response.data);
						// return response.data;
					})
					.catch((error) => {
						console.log(error); 
						throw error;
					})
			}
			return response.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const fetchOICs = async(): Promise<types.EmployeeOIC[]> => {
	return await axios
		.get(`${API_URLS.EMPLOYEES_OIC}`)
		.then((response) => {console.log(response.data); return response.data.data});
};