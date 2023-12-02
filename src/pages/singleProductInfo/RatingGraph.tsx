import { FullStar, OutlineStar } from "$components/icon"
import { Data } from "$types"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface RatingGraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  Data: Data | undefined
  isLoading: boolean
  isError: boolean
}

export const RatingGraph: FC<RatingGraphProps> = ({ Data, isError, isLoading, ...rest }) => {
  return (
    <div {...rest}>
      <div className="mb-2 flex items-center">
        {Array.from({ length: Data?.totalReviewer || 0 }).map((_, i) => {
          return <FullStar key={i} />
        })}
        <OutlineStar />
        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">{Data?.averageRating || 0} out of 5</p>
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{Data?.totalReviewer} global ratings</p>
      <div className="mt-4 flex items-center">
        <p className="text-sm font-medium text-blue-600 hover:underline ">5 star</p>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 ">
          <div className="h-5 w-4/5 rounded bg-brand-900"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 ">{Data?.ratingStars?.oneStarRating}</span>
      </div>
      <div className="mt-4 flex items-center">
        <p className="text-sm font-medium text-blue-600 hover:underline ">4 star</p>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 ">
          <div className="h-5 w-[17%] rounded bg-brand-900"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 ">{Data?.ratingStars?.twoStarRating}</span>
      </div>
      <div className="mt-4 flex items-center">
        <p className="text-sm font-medium text-blue-600 hover:underline ">3 star</p>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 ">
          <div className="h-5 w-[8%] rounded bg-brand-900"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 ">{Data?.ratingStars?.threeStarRating}</span>
      </div>
      <div className="mt-4 flex items-center">
        <p className="text-sm font-medium text-blue-600 hover:underline ">2 star</p>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 ">
          <div className="h-5 w-[4%] rounded bg-brand-900"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 ">{Data?.ratingStars?.fourStarRating}</span>
      </div>
      <div className="mt-4 flex items-center">
        <p className="text-sm font-medium text-blue-600 hover:underline ">1 star</p>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 ">
          <div className="h-5 w-[1%] rounded bg-brand-900"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 ">{Data?.ratingStars?.fiveStarRating}</span>
      </div>
    </div>
  )
}
