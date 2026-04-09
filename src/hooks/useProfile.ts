import { endpoints } from "@/constants/endpoints"
import { profileService } from "@/services/profile"
import { useQuery } from "@tanstack/react-query"

export const useProfile = () => {
  return useQuery({
    queryKey: [endpoints.user],
    queryFn: profileService,
    select: (res) => res.data,
  })
}
