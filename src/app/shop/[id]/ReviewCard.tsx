import { Star } from "lucide-react"
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"

import exclamationMark from "$assets/illustration/3D/exclamation.png"
import defaultUser from "$assets/illustration/others/user.jpg"
import { RatingsSkeleton } from "$components/Skeleton"
import { Rating } from "$types"
import Image from "next/image"

interface ReviewsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: Rating[] | null | undefined
  isLoading: boolean
  isError: boolean
}

export const Reviews: FC<ReviewsProps> = ({ isError, isLoading, rating, ...rest }) => {
  const loadingComponents = (
    <div>
      <RatingsSkeleton />
    </div>
  )
  const errorComponents = <div>Error</div>
  const MainComponent = (
    <Fragment>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {rating?.length !== 0 &&
          rating?.map((item) => {
            return (
              <div className="rounded-lg   border p-8 " {...rest} key={item?._id}>
                <div className="my-5 flex items-center gap-x-2">
                  <Star fill="rgb(248 146 30 )" color="rgb(248 146 30 )" size={20} />
                  <Star fill="rgb(248 146 30 )" color="rgb(248 146 30 )" size={20} />
                </div>
                <p className="leading-loose text-gray-500 dark:text-gray-400">{item?.desc}</p>
                <div className="-mx-2 mt-8 flex items-center">
                  <Image
                    className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300 dark:ring-gray-700"
                    src={item?.reviewers?.avatar || defaultUser.src}
                    alt="User Avatar"
                    width={500}
                    height={500}
                  />
                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">{item?.reviewers?.name}</h1>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      {rating?.length === 0 && (
        <div className="flex w-full flex-col items-center justify-center ">
          <Image src={exclamationMark.src} alt="No Review" width={200} height={200} />
          <p className="text-center font-medium text-gray-700">This product has no review</p>
        </div>
      )}
    </Fragment>
  )
  return <Fragment>{isError ? errorComponents : isLoading ? loadingComponents : MainComponent}</Fragment>
}
