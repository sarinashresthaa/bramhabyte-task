import { useRoutes } from "react-router-dom"
import PublicRoutes from "./PublicRoutes"
import { ROUTES } from "@/constants/routes"
import ProtectedRoutes from "./ProtectedRoutes"
import Home from "@/pages/Home"
import Register from "@/pages/Register"
import Login from "@/pages/Login"

export const Router = () => {
  const routes = [
    {
      element: <PublicRoutes />,
      children: [
        { path: ROUTES.register, element: <Register /> },
        { path: ROUTES.login, element: <Login /> },
      ],
    },
    {
      element: <ProtectedRoutes />,
      children: [{ path: ROUTES.home, element: <Home /> }],
    },
  ]
  return useRoutes(routes)
}
