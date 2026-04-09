import { getToken } from "@/services/token"

export const useAuthentication = () => {
  const access_token = getToken()
  if (access_token) return true
  return false
}
