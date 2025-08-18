import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./context/auth/authContext"
import ProtectedRoute from "./components/protected-route"
import DashboardPage from "./pages/dashboard"
import OauthSuccess from "./pages/oauth-success"

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to={'/dashboard'} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/oauth-success" element={<OauthSuccess/>} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute >
                <DashboardPage />
              </ProtectedRoute>
            } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
