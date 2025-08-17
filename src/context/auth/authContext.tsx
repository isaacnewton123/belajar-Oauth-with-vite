import { useEffect, useState, type ReactNode } from "react";
import { jwtDecode } from 'jwt-decode'
import type { User } from "../../services/types";
import type { JwtPayload } from "jwt-decode";
import { AuthContext } from "./useAuthContext";
import Loading from "../../components/ui/loading";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        const token = localStorage.getItem('token')
        const parsenUser = localStorage.getItem('user')


        if (token && parsenUser) {
            try {
                const isExpired = jwtDecode<JwtPayload>(token).exp! * 1000 < Date.now()
                if (isExpired) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                    setUser(null)
                } else {
                    const user = JSON.parse(parsenUser)
                    setUser(user)
                }

            } catch (error) {
                console.error('error in useEffect AuthProvider', error)
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                setUser(null)
            }
        }

        setLoading(false)
    }, [])

    if (loading) {
        return (
            <Loading/>
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