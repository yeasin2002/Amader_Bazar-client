import { ReviewsResponse } from "$types"
import { $fetch } from "@/utils"
import { FC, HTMLAttributes } from "react"
import { RatingGraph } from "./RatingGraph"
import { Reviews } from "./ReviewCard"
interface ProductReviewsProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReviewsResponse
}

export const ProductReviews: FC<ProductReviewsProps> = async ({ data, id }) => {
  return (
    <div className="space-y-10">
      <h4 className="mt-20 text-lg font-bold">Reviews </h4>
      <RatingGraph Data={data?.data} />
      <Reviews rating={data?.data?.ratings} />
    </div>
  )
}
