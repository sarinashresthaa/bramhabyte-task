import { loginService } from "@/services/login"
import { useMutation } from "@tanstack/react-query"

export const useLogin = () => {
  return useMutation({
    mutationFn: loginService,
  })
}
