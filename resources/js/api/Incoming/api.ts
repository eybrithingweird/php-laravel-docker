import axios from "axios";
import * as types from "../types";
import { API_URLS } from "../Url";

export const fetchEmployees = async(): Promise<types.Employee[]> => {
	return await axios
		.get(`${API_URLS.EMPLOYEES}`)
		.then((response) => response.data.data);
};

export const fetchLetterForms = async(id: string): Promise<types.LetterFormWithId[]> => {
	return await axios
		.get(`${API_URLS.MYSULAT}/${id}`)
		.then((response) => response.data.data);
};

export const fetchLetterFormsOutgoing = async(id: string): Promise<[]> => {
	return await axios
		.get(`${API_URLS.OUTGOING}/${id}`)
		.then((response) => {
			console.log(response.data.data);
			return response.data.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const fetchLetterFormsIncoming = async(id: string): Promise<[]> => {
	return await axios
		.get(`${API_URLS.INCOMING}/${id}`)
		.then((response) => {
			console.log(response.data.data);
			return response.data.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const fetchLetterFormsReceived = async(id: string): Promise<[]> => {
	return await axios
		.get(`${API_URLS.RECEIVED}/${id}`)
		.then((response) => {
			console.log(response.data.data);
			return response.data.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const fetchLetterFormsWithdrawn = async(id: string): Promise<[]> => {
	return await axios
		.get(`${API_URLS.WITHDRAWN}/${id}`)
		.then((response) => {
			console.log(response.data.data);
			return response.data.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const fetchLetterFormsCancelled = async(id: string): Promise<[]> => {
	return await axios
		.get(`${API_URLS.CANCELLED}/${id}`)
		.then((response) => {
			console.log(response.data.data);
			return response.data.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const fetchLetterFormsTagged = async(id: string): Promise<[]> => {
	return await axios
		.get(`${API_URLS.TAGGED}/${id}`)
		.then((response) => {
			console.log(response.data.data);
			return response.data.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const patchLetterFormsReceived = async({id, user_id, isBufferEmp}: {id: string, user_id: string, isBufferEmp: boolean}): Promise<[]> => {
	return await axios
		.patch(`${API_URLS.FORM_STATUS}/receive/${id}`)
		.then(async (response) => {
			console.log(response.data);
			const addHistory = await axios
				.post(`${API_URLS.FORM_HISTORY}`, {
					'letter_form_id': id,
					'src_employee_id': isBufferEmp ? 'Office of the Chancellor' : user_id,
					'action_description': 'Received Letter Form'
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

export const updateLetter = async({id, data} : {id: string, data: any}): Promise<any> => {
	return await axios
		.patch(`${API_URLS.CREATE}/${id}`, data)
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const updateLetterAdditional = async({id, data} : {id: number, data: any}): Promise<any> => {
	return await axios
		.patch(`${API_URLS.FORM_ADDFIELD}/${id}`, data)
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const fetchCommentLetter = async(id: string): Promise<types.CommentLetterAll[]> => {
	return await axios
		.get(`${API_URLS.COMMENT_LETTER}/${id}`)
		.then((response) => {
			console.log(response.data.data);
			return response.data.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const fetchBufferEmployees = async(): Promise<types.BufferEmployee[]> => {
	return await axios
		.get(`${API_URLS.BUFFER_EMPLOYEE}`)
		.then((response) => {console.log(response); return response.data.data;})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
}

export const fetchFormHistory = async(id: string): Promise<types.FormHistory[]> => {
	return await axios
		.get(`${API_URLS.FORM_HISTORY}/${id}`)
		.then((response) => {console.log(response); return response.data.data;})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
}