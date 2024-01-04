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
  size: "S" | "M" | "L" | "XL" | "XXL" | "2XL" | "3XL" | "4XL" | "5XL" | "NA"
  totalSold: number
  updatedAt: Date
}

export interface Users {
  Products: Product[]
  __v: number
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
  updatedAt: Date
}
