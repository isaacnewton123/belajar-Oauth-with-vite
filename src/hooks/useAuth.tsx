import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth/useAuthContext"
import { authApi } from "../services/auth/authApi"
import type { LoginData, RegisterData } from "../services/auth/types"
import { toast } from "react-toastify";
import { useLoadingContext } from "../context/useLoadingContext";

export const useAuth = () => {

    const {setUser} = useAuthContext()
    const navigate = useNavigate()
    const {setLoading} = useLoadingContext()

    const getCurrentUser = async() => {
        setLoading(true)
        try {
            const response = await authApi.getMe()
            localStorage.setItem('user', JSON.stringify(response.data))
            setUser(response.data)
        } catch (error) {
            console.error('error in getMe hooks', error)
            toast.error('cannot Get Profile , please try again later')
        } finally {
            setLoading(false)
        }
    }



    const login = async(userData: LoginData) => {
        setLoading(true)
        try {
            const response = await authApi.login(userData)

            if (response && response.user && response.token) {
                localStorage.setItem('token', response.token)

                await getCurrentUser()
                toast.success('login success')
                navigate('/dashboard')
            } else {
                toast.error('token not found')
            }
        } catch (error) {
            console.error('cannot post to auth Login, detail:', error)
            localStorage.removeItem('token')
            toast.error('email or password not valid')
        } finally {
            setLoading(false)
        }
    }

    const register = async (userData: RegisterData) =>{
        setLoading(true)
        try {
            await authApi.register(userData)
            toast.success('register success , please login')
            navigate('/login')
        } catch (error){
            console.error('cannot post to auth register , detail:', error)
            toast.error('email already use , please use other email')
        } finally {
            setLoading(false)
        }
    }
    
    const logout = async () => {
        await authApi.logout()
        localStorage.removeItem('token')
        toast.success('logout success')
        navigate('/login')
    }

    return {
        register,
        login,
        logout,
        getCurrentUser
    }
}