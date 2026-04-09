import { registerService } from "@/services/register"
import { useMutation } from "@tanstack/react-query"

export const useRegister = () => {
  return useMutation({
    mutationFn: registerService,
  })
}
