import { Product } from "./userAndProduct.interface"

export interface FeaturedProductResponse {
  data: Data | null
  message: string
  statusCode: number
  success: boolean
}

export interface Data {
  DiscountedProduct: Product[]
  FeaturedProduct: Product[]
  MostPopular: Product[]
}
