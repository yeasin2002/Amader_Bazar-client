import { Users } from "./userAndProduct.interface"

export interface confirmRegistration {
  statusCode: number
  message: string
  data: {
    userInfo: Users
    token: string
  }
  success: boolean
}
