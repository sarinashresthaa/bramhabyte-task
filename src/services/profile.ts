import type { ProfileResponseType } from "@/@types/profile"
import { endpoints } from "@/constants/endpoints"
import { httpClient } from "@/lib/network/http-client"

export const profileService = () => {
  return httpClient.get<ProfileResponseType>(endpoints.user)
}
