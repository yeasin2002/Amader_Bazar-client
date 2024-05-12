import type { Product } from "./userAndProduct.interface"

export interface AllProductResponse {
  data: Product[] | null
  message: string
  statusCode: number
  success: boolean
}
export interface SingleProductResponse {
  data: Product | null
  message: string
  statusCode: number
  success: boolean
}
export interface SearchProductResponse {
  data: Product[] | null
  message: string
  statusCode: number
  success: boolean
}
