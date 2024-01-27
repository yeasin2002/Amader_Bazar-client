export interface AuthResponse {
  message: string
  statusCode: number
  success: boolean
  data: Data
}

interface Data {
  token: string
  user: User
}

export interface User {
  email: string
  id: string
  name: string
  avatar: string
  isAdmin: boolean | null
  address: string
  phone: string
}
