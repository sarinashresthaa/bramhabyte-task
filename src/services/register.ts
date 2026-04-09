import type { LoginResponseType } from "@/@types/login"
import { endpoints } from "@/constants/endpoints"
import { httpClient } from "@/lib/network/http-client"
import type { LoginRegisterFormData } from "@/schema/login-register"

export const registerService = (payload: LoginRegisterFormData) => {
  return httpClient.post<LoginResponseType>(endpoints.register, payload)
}
