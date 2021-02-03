import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
	const token = localStorage.getItem('@ChameUmProfissional:token');

	const newConfig = config;
	newConfig.headers.Authorization = token ? `Bearer ${token}` : '';

	return newConfig;
});

export default api;
