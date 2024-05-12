import type { Data, OrderData, OrderStatus, Product, Users, categoryData } from "."

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
  data?: OrderData[] | null
  message: string
  statusCode: number
  success: boolean
}

export interface allOrdersResponse {
  data: {
    pending: allOrdersData[]
    all: allOrdersData[]
  }
  message: string
  statusCode: number
  success: boolean
}

export interface SingleOrdersResponse {
  data: allOrdersData
  message: string
  statusCode: number
  success: boolean
}

export interface allOrdersData {
  OrderAddress: string
  OrderDateAndTime: Date
  OrderPaymentMethod: "cash" | "card"
  OrderStatus: OrderStatus
  Products: {
    Product: Product
    Quantity: number
    _id: string
  }[]
  TotalAmount: number
  User: null | Users
  _id: string
  createdAt: Date
  updatedAt: Date
}

export interface UpdateOrderResponse {
  data: Product
  message: string
  statusCode: number
  success: boolean
}
