export interface User {
  _id: string
  name: string
  avatar: string
  isAdmin?: boolean
}
export interface createUserResponse {
  message: string
  statusCode: number
  success: boolean
  data: User
}
