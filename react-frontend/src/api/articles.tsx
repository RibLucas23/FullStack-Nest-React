import axios from 'axios';
import axiosInstance from '../services/axios.service';
import {
	ArticleInterface,
	CreateArticleInterface,
} from '../interfaces/articles.interface';

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
export const getArticleReqById = async (id: string) => {
	try {
		const response = await axiosInstance.get(`/articles/${id}`);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Request failed');
		}
		throw new Error('Request failed');
	}
};
export const createArticlesRequest = async (
	article: CreateArticleInterface,
) => {
	try {
		const response = await axiosInstance.post('/articles', article);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Request failed');
		}
		throw new Error('Request failed');
	}
};

export const updateArticleRequest = async (
	id: string,
	article: ArticleInterface,
) => {
	try {
		const response = await axiosInstance.put(`/articles/${id}`, article);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Request failed');
		}
		throw new Error('Request failed');
	}
};
export const deleteArticleRequest = async (id: string) => {
	try {
		const response = await axiosInstance.delete(`/articles/${id}`);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Request failed');
		}
		throw new Error('Request failed');
	}
};
