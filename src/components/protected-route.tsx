import type { ReactNode } from "react";
import { useAuthContext } from "../context/auth/useAuthContext";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { user } = useAuthContext()
    const location = useLocation()

    if (!user) {
        <Navigate to={'/login'} state={{ from: location }} replace />
    }
    return children
}

export default ProtectedRoute