"use client"

import { $GET } from "$hooks/useFetchers"
import { ReviewsResponse } from "$types"
import { useQuery } from "@tanstack/react-query"
import { FC, HTMLAttributes } from "react"
import { RatingGraph } from "./RatingGraph"
import { Reviews } from "./ReviewCard"
interface ProductReviewsProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string | undefined
}

export const ProductReviews: FC<ProductReviewsProps> = ({ id }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["ProductInfo", id],
    queryFn: () =>
      $GET({
        url: `/product/rating/${id}`,
      }) as Promise<ReviewsResponse>,
  })
  return (
    <div className="space-y-10">
      <h4 className="mt-20 text-lg font-bold">Reviews </h4>
      <RatingGraph Data={data?.data} isLoading={isLoading} isError={isError} />

      <Reviews rating={data?.data?.ratings} isLoading={isLoading} isError={isError} />
    </div>
  )
}
