import { FullStar, OutlineStar } from "$components/icon"
import type { Data } from "$types"
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { RatingGraphItems } from "./RatingGraphItems"

interface RatingGraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  Data: Data | undefined
  isLoading?: boolean
  isError?: boolean
}

export const RatingGraph: FC<RatingGraphProps> = ({ Data, isError = false, isLoading = false, ...rest }) => {
  return (
    <div {...rest}>
      <div className="mb-2 flex items-center">
        {Array.from({ length: Data?.totalReviewer || 0 })?.map((_, i) => <FullStar key={crypto.randomUUID()} />)}
        <OutlineStar />
        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">{Data?.averageRating || 0} out of 5</p>
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{Data?.totalReviewer} global ratings</p>

      <RatingGraphItems level={1} totalRage={Data?.ratingStars?.oneStarRating} sum={Data?.averageRating || 0} />
      <RatingGraphItems level={2} totalRage={Data?.ratingStars?.twoStarRating} sum={Data?.averageRating || 0} />
      <RatingGraphItems level={3} totalRage={Data?.ratingStars?.threeStarRating} sum={Data?.averageRating || 0} />
      <RatingGraphItems level={4} totalRage={Data?.ratingStars?.fourStarRating} sum={Data?.averageRating || 0} />
      <RatingGraphItems level={5} totalRage={Data?.ratingStars?.fiveStarRating} sum={Data?.averageRating || 0} />
    </div>
  )
}
