import { useAuth } from "./useAuth"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { baseURL } from "../services/config"
import { useCallback } from "react"

export const useOauth = () => {

    const { getCurrentUser } = useAuth()
    const navigate = useNavigate()

    const handleGoogleApi = () => {
        window.location.href = `${baseURL}/auth/google`
    }

    const googleCallback = useCallback(async() => {
        console.log('log dari googleCallback')
        try {
            const param = new URLSearchParams(location.search);
            const token = param.get("token");

            if (!token) {
                throw new Error("token not found");
            } else {
                localStorage.setItem("token", token);
                await getCurrentUser();
                toast.success("login success");
                navigate("/dashboard", { replace: true });
            }
        } catch (error) {
            console.error("google callback error", error);
            toast.error("error, token not found");
        }
    }, [getCurrentUser, navigate]);

    return {
        googleCallback,
        handleGoogleApi
    }
}