import { useAuthContext } from "../context/auth/useAuthContext"
import { useAuth } from "./useAuth"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { baseURL } from "../services/config"
import { useCallback } from "react"

export const useOauth = () => {

    const { setLoading } = useAuthContext()
    const { getCurrentUser } = useAuth()
    const navigate = useNavigate()

    const handleGoogleApi = () => {
        window.location.href = `${baseURL}/auth/google`
    }

    // Gunakan useCallback untuk "mengingat" fungsi ini
    const googleCallback = useCallback(() => {
        setLoading(true)
        try {
            const param = new URLSearchParams(location.search)
            const token = param.get('token')

            if (!token) {
                throw new Error('token not found')
            } else {
                navigate('/dashboard')
                localStorage.setItem('token', token)
                toast.success('login success')
                getCurrentUser()
            }
        } catch (error) {
            console.error('google callback error', error)
            toast.error('error, token not found')
        } finally {
            setLoading(false)
        }
    }, [getCurrentUser, navigate, setLoading])

    return {
        googleCallback,
        handleGoogleApi
    }
}