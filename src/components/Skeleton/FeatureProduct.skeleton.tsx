/* eslint-disable jsx-a11y/alt-text */
import { Image } from "lucide-react"
import { type DetailedHTMLProps, type FC, Fragment, type HTMLAttributes } from "react"

interface FeatureProductSkeletonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode
}

export const FeatureProductSkeleton: FC<FeatureProductSkeletonProps> = ({  ...rest }) => {
  return (
    <Fragment>
      <div
        className="mx-auto flex w-full max-w-md animate-pulse overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
        {...rest}>
        <div className="grid w-1/3 place-items-center bg-gray-300 dark:bg-gray-600">
          <Image className="h-1/2 w-1/2 text-gray-500" />
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <div className="h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"></div>

          <p className="mt-4 h-2 w-48 rounded-lg bg-gray-200 dark:bg-gray-700"></p>

          <div className="item-center mt-4 flex gap-x-2">
            <p className="h-2 w-5 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
            <p className="h-2 w-5 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
            <p className="h-2 w-5 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
            <p className="h-2 w-5 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
            <p className="h-2 w-5 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
          </div>

          <div className="item-center mt-6 flex justify-between">
            <div className="h-2 w-10 rounded-lg bg-gray-200 dark:bg-gray-700"></div>

            <div className="h-4 w-28 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
