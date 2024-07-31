import axios from 'axios';
import { ILoginPayload } from '../interfaces/users.interface';
import axiosInstance from '../services/axios.service';

const API = import.meta.env.VITE_API_URL;

export const loginUser = async (user: ILoginPayload) => {
	try {
		const response = await axiosInstance.post(`${API}/auth/local/signin`, {
			email: user.email,
			password: user.password,
		});
		const tokens = response.data;
		localStorage.setItem('access_token', tokens.access_token);
		localStorage.setItem('refresh_token', tokens.refresh_token);
		return tokens;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			const errorData = error.response.data as {
				error: { message: string };
			};
			throw new Error(errorData.error.message || 'Login failed');
		}
		throw new Error('Login failed');
	}
};

export const registerUser = async (user: ILoginPayload) => {
	try {
		const response = await axiosInstance.post(`${API}/auth/local/signup`, {
			email: user.email,
			password: user.password,
		});
		return { status: response.status };
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			const errorData = error.response.data as {
				error: { message: string };
			};
			throw new Error(errorData.error.message || 'Register failed');
		}
		throw new Error('Register failed');
	}
};

export const logoutUser = async () => {
	try {
		const response = await axiosInstance.post('/auth/logout');
		if (response.status === 200) {
			localStorage.removeItem('access_token');
			localStorage.removeItem('refresh_token');
		}
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Logout failed');
		}
		throw new Error('Logout failed');
	}
};
