import axios, { AxiosError } from 'axios'

export const baseURL = import.meta.env.VITE_API_URL

export const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token) {
        config.headers.Authorization= `Bearer ${token}`
    }
    return config   
}, (error: AxiosError) => {
    return Promise.reject(error)
})

apiClient.interceptors.response.use((response) => {
    return response

}, (error: AxiosError) => {
    if(error.response?.status === 401) {
        localStorage.removeItem('token')
        window.location.href='/login'
    }
})