import { Button } from "./ui/button"
import { removeToken } from "@/services/token"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "@/constants/routes"

const Navbar = () => {
  const navigate = useNavigate()

  const logout = () => {
    removeToken()
    navigate(ROUTES.login)
  }
  return (
    <div className="flex justify-between shadow-md py-4 px-12">
      <div className="text-xl font-bold">Logo</div>
      <Button variant={"destructive"} onClick={logout}>
        Logout
      </Button>
    </div>
  )
}

export default Navbar
