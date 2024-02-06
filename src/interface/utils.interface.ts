export type OrderStatus = "Pending" | "Processing" | "Completed" | "Cancelled"
export interface CommonResponse {
  data: unknown
  message: string
  statusCode: number
  success: boolean
}
