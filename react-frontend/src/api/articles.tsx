import axios from 'axios';
import axiosInstance from '../services/axios.service';

const API = import.meta.env.VITE_API_URL;

export const getArticlesRequest = async () => {
	try {
		const response = await axiosInstance.get(`${API}/articles`);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Request failed');
		}
		throw new Error('Request failed');
	}
};
