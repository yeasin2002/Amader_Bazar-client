export interface Product {
  _id: string
  category: string
  desc: string
  discount: number
  img: string
  isFeature?: boolean
  name: string
  price: number
  quantity: number
  totalSold: number
  size?: "S" | "M" | "L" | "XL" | "XXL" | "2XL" | "3XL" | "4XL" | "5XL" | "NA"
  color?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface Users {
  Products: Product[]
  _id: string
  address: string
  avatar: string
  createdAt: Date
  email: string
  isAdmin: boolean
  isBanned: boolean
  name: string
  password: string
  phone: string
}
