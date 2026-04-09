import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { ROUTES } from "@/constants/routes"
import { useRegister } from "@/hooks/useRegister"
import {
  loginRegisterSchema,
  type LoginRegisterFormData,
} from "@/schema/login-register"
import { setToken } from "@/services/token"
import { zodResolver } from "@hookform/resolvers/zod"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

const Register = () => {
  const navigate = useNavigate()
  const { mutateAsync } = useRegister()
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginRegisterFormData>({
    resolver: zodResolver(loginRegisterSchema),
  })

  const onSubmit: SubmitHandler<LoginRegisterFormData> = async (data) => {
    mutateAsync(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: (response) => {
          toast.success(response.data.message)
          setToken(response.data.accessToken)
          navigate(ROUTES.home)
        },
        onError: () => {
          toast.error("Login Failed")
        },
      }
    )
  }
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-md lg:max-w-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-xl bg-white p-6 shadow-lg md:p-8 lg:p-10"
        >
          <div className="grid gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-medium">Register</div>
              <div className="font-normal text-muted-foreground">
                Fill your details to create your account
              </div>
            </div>
            <div className="mt-4 grid gap-5">
              <div className="grid gap-2">
                <Label className="text-sm font-medium" htmlFor="email">
                  Email address <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">
                    {errors.email.message}{" "}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label className="text-sm font-medium" htmlFor="password">
                  Password<span className="text-red-600">*</span>
                </Label>

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    id="password"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-[#3A5B22]"
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}{" "}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full">
                {isSubmitting ? (
                  <>
                    <Spinner className="h-6 w-6 text-white" />
                  </>
                ) : (
                  "Register"
                )}
              </Button>
            </div>

            <div className="mt-2 flex justify-center gap-2">
              <span className="font-medium">Already have an account?</span>
              <Link to={ROUTES.login}>
                <span className="cursor-pointer font-medium text-orange-400 hover:underline">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
