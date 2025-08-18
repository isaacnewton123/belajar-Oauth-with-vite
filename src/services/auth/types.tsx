import type { User } from "../types"

export interface LoginData {
    email: string,
    password: string
}

export interface ResponseLogin {
    token: string,
    user: User
}

export interface RegisterData {
    name: string,
    email: string,
    password: string
}

export interface ResponseRegister {
    user: User
}

export interface ResponseAuthMe {
    success: boolean,
    data: User
}

