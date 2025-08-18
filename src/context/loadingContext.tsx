import { useState, type ReactNode } from "react"
import Loading from "../components/ui/loading"
import { LoadingContext } from "./useLoadingContext"

export const LoadingProvider = ({children}: {children: ReactNode}) => {
    const [loading, setLoading] = useState(false)

    if (loading) {
        return <Loading />
    }

    const value = {
        loading,
        setLoading
    }

    return <LoadingContext value={value}>{children}</LoadingContext>
}