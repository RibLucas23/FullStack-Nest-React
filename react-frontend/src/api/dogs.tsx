import axios from 'axios';
import axiosInstance from '../services/axios.service';
import { DogInterface } from '../interfaces/dog.interface';
// import { DogInterface } from '../interfaces/dog.interface';

const API = import.meta.env.VITE_API_URL;

export const getDogsRequest = async () => {
	try {
		const response = await axiosInstance.get(`${API}/dogs`);
		return response.data.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Request failed');
		}
		throw new Error('Request failed');
	}
};
export const getDogsReqLimit = async (limit: string, page: string) => {
	try {
		const response = await axios.get(
			`${API}/dogs?limit=${limit}&page=${page}`,
		);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Request failed');
		}
		throw new Error('Request failed');
	}
};

// export const createDogRequest = async (dog: DogInterface) => {
// 	try {
// 		const response = await axiosInstance.post('/dogs', dog);
// 		return response.data;
// 	} catch (error) {
// 		if (axios.isAxiosError(error) && error.response) {
// 			throw new Error(error.response.data.message || 'Request failed');
// 		}
// 		throw new Error('Request failed');
// 	}
// };

export const deleteDogRequest = async (id: string) => {
	try {
		const response = await axiosInstance.delete(`/dogs/${id}`);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Request failed');
		}
		throw new Error('Request failed');
	}
};
export const updateDogRequest = async (id: string, dog: DogInterface) => {
	try {
		const response = await axiosInstance.put(`/dogs/${id}`, dog);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Request failed');
		}
		throw new Error('Request failed');
	}
};

export const getDogReqById = async (id: string) => {
	try {
		const response = await axiosInstance.get(`/dogs/${id}`);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Request failed');
		}
		throw new Error('Request failed');
	}
};
