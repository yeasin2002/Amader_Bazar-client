import { Data, OrderData, Users, categoryData } from "."

export interface SingleUserFullResponse {
  data: Users
  message: string
  statusCode: number
  success: boolean
}

export interface AllUsersResponse {
  data: Users[]
  message: string
  statusCode: number
  success: boolean
}

export interface CategoriesResponse {
  data: categoryData[] | null
  message: string
  success: boolean
}

export interface ReviewsResponse {
  data: Data
  message: string
  statusCode: number
  success: boolean
}
export interface orderResponse {
  message: string
  success: boolean
}

export interface OrderByUserResponse {
  data: OrderData[] | null
  message: string
  statusCode: number
  success: boolean
}
