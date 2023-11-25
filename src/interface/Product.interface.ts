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

export interface Product {
  __v: number
  _id: string
  category: string
  color: string
  createdAt: Date
  desc: string
  discount: number
  img: string
  isFeature: boolean
  name: string
  price: number
  quantity: number
  size: string
  totalSold: number
  updatedAt: Date
}
