import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});
// 请求拦截器
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    }
);
// 响应拦截器
api.interceptors.response.use(
    (response) => {
        return response;
    }
);
export const get = async (url: string, params?: any) => {
    try {
        const response = await api.get(url, { params });
        return response.data;
    }
    catch (error) {
        throw error;
    }
}
export const post = async (url: string, data?: any, config?: AxiosRequestConfig) => {
    try {
        const response = await api.post(url, data, config);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}
export const put = async (url: string, data?: any, config?: AxiosRequestConfig) => {
    try {
        const response = await api.put(url, data, config);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}
export const del = async (url: string, config?: AxiosRequestConfig) => {
    try {
        const response = await api.delete(url, config);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}
export default api;