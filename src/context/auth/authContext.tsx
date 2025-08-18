import { useEffect, useState, type ReactNode } from "react";
import { jwtDecode } from "jwt-decode";
import type { User } from "../../services/types";
import { AuthContext } from "./useAuthContext";
import Loading from "../../components/ui/loading";
import type { MyJwtPayload } from "./types";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        const savedUserJSON = localStorage.getItem('user');

        if (token && savedUserJSON) {
            try {
                const isExpired = jwtDecode<MyJwtPayload>(token).exp * 1000 < Date.now();

                if (isExpired) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                    setUser(null)
                    navigate('/login')
                } else {
                    localStorage.setItem('token', token)
                    const user = JSON.parse(savedUserJSON)
                    setUser(user)
                    navigate('/dashboard')
                }
            } catch (error) {
                console.error("Gagal mem-parse data, membersihkan storage.", error);
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                setUser(null)
                navigate('/login')
            }
        }
        setLoading(false);
    }, [navigate])

    if (loading) {
        return (
            <Loading />
        )
    }

    const value = {
        user,
        setUser,
        loading,
        setLoading
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}