import type { Product } from "./userAndProduct.interface"


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


export interface SingleUserResponse {
  data: userData
  message: string
  statusCode: number
  success: boolean
}

export interface userData {
  avatar: string
  name: string
}
 