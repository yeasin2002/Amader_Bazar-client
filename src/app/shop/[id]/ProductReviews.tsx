import type { ReviewsResponse } from "$types"
import { Plus } from "lucide-react"
import type { FC, HTMLAttributes } from "react"
import { AddReviews } from "./AddReviews"
import { RatingGraph } from "./RatingGraph"
import { Reviews } from "./ReviewCard"
interface ProductReviewsProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReviewsResponse
  id: string
}

export const ProductReviews: FC<ProductReviewsProps> = async ({ data, id }) => {
  return (
    <div className="space-y-10">
      <h4 className="mt-20 text-lg font-bold">Reviews </h4>
      <RatingGraph Data={data?.data} />

      <div className="flex items-center justify-end">
        <AddReviews className="btn-sky    flex items-center gap-x-2 rounded-lg p-2 " id={id}>
          <span>Add a rating</span>
          <Plus className="size-5 " />
        </AddReviews>
      </div>

      <Reviews rating={data?.data?.ratings} />
    </div>
  )
}
