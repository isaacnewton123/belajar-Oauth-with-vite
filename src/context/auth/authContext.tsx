import { useEffect, useState, type ReactNode } from "react";
import { jwtDecode } from "jwt-decode";
import type { User } from "../../services/types";
import { AuthContext } from "./useAuthContext";
import type { MyJwtPayload } from "./types";
import { useNavigate } from "react-router-dom";
import { useLoadingContext } from "../useLoadingContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    const {setLoading} = useLoadingContext()

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem('token');
        const savedUserJSON = localStorage.getItem('user');

        if (token && savedUserJSON) {
            try {
                const isExpired = jwtDecode<MyJwtPayload>(token).exp * 1000 < Date.now();

                if (isExpired) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                    setUser(null)
                } else {
                    const user = JSON.parse(savedUserJSON)
                    setUser(user)
                    navigate('/dashboard')
                }
            } catch (error) {
                console.error("Gagal mem-parse data, membersihkan storage.", error);
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                setUser(null)
            }
        }
        setLoading(false);
    }, [navigate, setLoading])

    const value = {
        user,
        setUser
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}