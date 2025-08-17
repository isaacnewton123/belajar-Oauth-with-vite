import { apiClient } from "../config";
import type { LoginData, RegisterData, ResponseLogin, ResponseRegister } from "./types";

export const authApi = {
    register: async(userData: RegisterData): Promise<ResponseRegister> => {
        const response = await apiClient.post<ResponseRegister>('/auth/register', userData)
        return response.data
    },
    login: async(userData: LoginData): Promise<ResponseLogin> => {
        const response = await apiClient.post<ResponseLogin>('/auth/login', userData)
        return response.data
    },
    logout: async() => {
        await apiClient.get('/auth/logout')
    }
}