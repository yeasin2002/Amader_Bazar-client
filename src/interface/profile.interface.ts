import { Product } from "./userAndProduct.interface"

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

export interface OrderData {
  OrderAddress: string
  OrderDateAndTime: Date
  OrderPaymentMethod: "cash" | "card"
  OrderStatus: "Pending" | "Processing" | "Completed" | "Cancelled"
  Products: ProductElement[]
  TotalAmount: number
  User: string
  __v: number
  _id: string
  createdAt: Date
  updatedAt: Date
}

export interface ProductElement {
  Product: Product
  Quantity: number
  _id: string
}
