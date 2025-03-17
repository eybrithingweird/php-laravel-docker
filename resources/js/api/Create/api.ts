import axios from "axios";
import * as types from "../types";
import { API_URLS } from "../Url";

// NOTE: GET == response.data.data, POST == response.data

export const fetchRequestTypes = async(): Promise<types.RequestType[]> => {
	return await axios
		.get(`${API_URLS.REQUEST_TYPES}`)
		.then((response) => response.data.data);
};

export const fetchChannels = async(): Promise<types.Channel[]> => {
	return await axios
		.get(`${API_URLS.CHANNELS}`)
		.then((response) => response.data.data);
};

export const fetchEmployees = async(): Promise<types.Employee[]> => {
	return await axios
		.get(`${API_URLS.EMPLOYEES}`)
		.then((response) => response.data.data);
};

export const fetchOICs = async(): Promise<types.EmployeeOIC[]> => {
	return await axios
		.get(`${API_URLS.EMPLOYEES_OIC}`)
		.then((response) => {console.log(response.data); return response.data.data});
};

export const fetchOffices = async(): Promise<types.Office[]> => {
	return await axios
		.get(`${API_URLS.OFFICES}`)
		.then((response) => response.data.data);
};

// export const fetchDesignations = async(): Promise<types.Designation[]> => {
// 	return await axios
// 		.get('/api/designations')
// 		.then((response) => response.data.data);
// };

export const fetchAllFields = async(): Promise<types.AllFields[]> => {
	return await axios
		.get(`${API_URLS.ALL_FIELDS}`)
		.then((response) => response.data.data);
};

export const fetchRequestFields = async(): Promise<types.RequestFields[]> => {
	return await axios
		.get(`${API_URLS.REQUEST_FIELDS}`)
		.then((response) => response.data.data);
};

export const createLetter = async(data: any): Promise<types.LetterFormWithId> => {
	return await axios
		.post(`${API_URLS.CREATE}`, data)
		.then(async (response) => {
			console.log(response.data);
			const addHistory = await axios
				.post(`${API_URLS.FORM_HISTORY}`, {
					'letter_form_id': response.data.id,
					'src_employee_id': response.data.src_employee_id,
					'action_description': 'Created Letter Form'
				})
				.then((response) => {
					console.log(response.data);
					// return response.data;
				})
				.catch((error) => {
					console.log(error); 
					throw error;
				})
			return response.data
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const addFields = async(data: any): Promise<types.FormAddfield> => {
	return await axios
		.post('/api/formaddfields', data)
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

// export const addChannelStat = async(data: any): Promise<types.ChannelStatusWithId> => {
// 	return await axios
// 		.post('/api/channelstatus', data)
// 		.then((response) => {
// 			console.log(response.data);
// 			return response.data;
// 		})
// 		.catch((error) => {
// 			console.log(error); 
// 			throw error;
// 		});
// };

export const addFormStatus = async(data: any): Promise<types.FormStatusWithId> => {
	return await axios
		.post('/api/form-status', data)
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};