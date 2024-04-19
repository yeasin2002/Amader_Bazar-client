import type { Product } from "./userAndProduct.interface"

export interface FeaturedProductResponse {
  data: FeaturedProductData | null
  message: string
  statusCode: number
  success: boolean
}

export interface FeaturedProductData {
  DiscountedProduct: Product[]
  FeaturedProduct: Product[]
  MostPopular: Product[]
}
