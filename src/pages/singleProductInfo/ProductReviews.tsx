import { RatingGraph } from "./RatingGraph"
import { Reviews } from "./ReviewCard"

export const ProductReviews = () => {
  return (
    <div className="space-y-10">
      <h4 className="mt-20 text-lg font-bold">Reviews </h4>
      <RatingGraph />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((rating) => {
          return <Reviews key={rating} />
        })}
      </div>
    </div>
  )
}
