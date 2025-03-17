import axios from "axios";
import * as types from "../types";
import { API_URLS } from "../Url";

// NOTE: GET == response.data.data, POST == response.data

// data: types.Channel[]
export const postChannels = async(data: any): Promise<types.Channel[]> => {
	return await axios
		.post(`${API_URLS.CHANNELS}`, data)
		.then((response) => response.data)
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const addRequestType = async (data: any): Promise<types.RequestTypeAdd[]> => {
	return axios
		.post(`${API_URLS.REQUEST_TYPES}`, data)
		.then((response) => response.data)
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

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

export const addOICEmployee = async (data: any): Promise<types.EmployeeOIC[]> => {
	console.log(data);
	return axios
		.post(`${API_URLS.EMPLOYEES_OIC}`, data)
		.then((response) => {console.log(response.data); return response.data;})
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

export const addBufferEmployee = async (data: any): Promise<types.BufferEmployee[]> => {
	return axios
		.post(`${API_URLS.BUFFER_EMPLOYEE}`, data)
		.then((response) => {console.log(response); return response.data;})
		.catch((error) => {
			console.log(error); 
			throw error;
		})
}

export const editBufferEmployee = async ({id, data} : {id: number, data: any}): Promise<types.BufferEmployee[]> => {
	return axios
		.patch(`${API_URLS.BUFFER_EMPLOYEE}/${id}`, data)
		.then((response) => {console.log(response); return response.data;})
		.catch((error) => {
			console.log(error); 
			throw error;
		})
}

export const removeBufferEmployee = async (id: number): Promise<types.BufferEmployee[]> => {
	return axios
		.delete(`${API_URLS.BUFFER_EMPLOYEE}/${id}`)
		.then((response) => {console.log(response); return response.data;})
		.catch((error) => {
			console.log(error); 
			throw error;
		})
}

export const addAllFields = async (data: any): Promise<types.AllFields> => {
	return axios
		.post(`${API_URLS.ALL_FIELDS}`, data)
		.then((response) => {
			console.log(response);
			return response.data
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
}

export const addRequestField = async (data: any): Promise<types.RequestFields[]> => {
	return axios
		.post(`${API_URLS.REQUEST_FIELDS}`, data)
		.then((response) => {
			console.log(response);
			return response.data
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const editRequestField = async ({id, data} : {id: number, data: any}): Promise<types.RequestFields[]> => {
	return axios
		.patch(`${API_URLS.REQUEST_FIELDS}/${id}`, data)
		.then((response) => {
			console.log(response);
			return response.data
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};

export const removeRequestField = async (id: number): Promise<types.RequestFields[]> => {
	return axios
		.delete(`${API_URLS.REQUEST_FIELDS}/${id}`)
		.then((response) => {
			console.log(response);
			return response.data
		})
		.catch((error) => {
			console.log(error); 
			throw error;
		});
};