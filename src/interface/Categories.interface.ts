export interface CategoriesResponse {
  data: categoryData[] | null
  message: string
  success: boolean
}

export interface categoryData {
  __v: number
  _id: string
  icon: string
  name: string
  subtitle: string
}
