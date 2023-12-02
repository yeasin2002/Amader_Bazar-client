export interface FeaturedProductResponse {
  data: Data | null
  message: string
  statusCode: number
  success: boolean
}

export interface Data {
  DiscountedProduct: FeatureProduct[]
  FeaturedProduct: FeatureProduct[]
  MostPopular: FeatureProduct[]
}

export interface FeatureProduct {
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
  size: "S" | "M" | "L" | "XL" | "XXL" | "2XL" | "3XL" | "4XL" | "5XL" | "NA"
  totalSold: number
  updatedAt: Date
}
