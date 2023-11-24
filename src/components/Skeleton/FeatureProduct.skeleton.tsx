import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"

interface FeatureProductSkeletonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FeatureProductSkeleton: FC<FeatureProductSkeletonProps> = ({ ...rest }) => {
  return (
    <Fragment>
      <div
        className="mx-auto flex w-full max-w-md animate-pulse overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
        {...rest}>
        <div className="w-1/3 bg-gray-300 dark:bg-gray-600"></div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"></h1>

          <p className="mt-4 h-2 w-48 rounded-lg bg-gray-200 dark:bg-gray-700"></p>

          <div className="item-center mt-4 flex gap-x-2">
            <p className="h-2 w-5 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
            <p className="h-2 w-5 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
            <p className="h-2 w-5 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
            <p className="h-2 w-5 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
            <p className="h-2 w-5 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
          </div>

          <div className="item-center mt-6 flex justify-between">
            <h1 className="h-2 w-10 rounded-lg bg-gray-200 dark:bg-gray-700"></h1>

            <div className="h-4 w-28 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
