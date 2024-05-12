"use server"

import { revalidateTag } from "next/cache"

export const revalidateProductReview = () => {
  return revalidateTag("product-review")
}
