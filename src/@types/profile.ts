export type ProfileResponseType = {
  message: boolean
  page: number
  limit: number
  has_prev: boolean
  has_next: boolean
  total: number
  total_pages: number
  data: ProfileType[]
}

export type ProfileType = {
  id: number
  name: string
  email: string
  phone: string
  address: string
  dob: string
}
