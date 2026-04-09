import { Outlet, useNavigate } from "react-router-dom"
import { useAuthentication } from "@/hooks/useAuthentication"
import { ROUTES } from "@/constants/routes"
import { useEffect } from "react"
import Navbar from "@/components/Navbar"

const ProtectedRoutes = () => {
  const isAuthenticated = useAuthentication()

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTES.login)
    }
  }, [isAuthenticated])
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default ProtectedRoutes
