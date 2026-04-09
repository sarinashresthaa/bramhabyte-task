import { ROUTES } from "@/constants/routes"
import { useAuthentication } from "@/hooks/useAuthentication"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const PublicRoutes = () => {
  const isAuthenticated = useAuthentication()

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.home)
    }
  }, [isAuthenticated])
  return (
    <>
      <Outlet />
    </>
  )
}

export default PublicRoutes
