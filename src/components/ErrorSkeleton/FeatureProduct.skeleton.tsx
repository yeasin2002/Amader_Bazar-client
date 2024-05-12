import { ImageOff } from "lucide-react"
import { type DetailedHTMLProps, type FC, Fragment, type HTMLAttributes } from "react"

interface FeatureProductErrorSkeletonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode
}

export const FeatureProductErrorSkeleton: FC<FeatureProductErrorSkeletonProps> = ({ ...rest }) => {
  return (
    <Fragment>
      <div
        className="mx-auto flex w-full max-w-md  overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
        {...rest}>
        <div className="grid w-1/3 place-items-center bg-gray-300 ">
          <ImageOff className="h-1/2 w-1/2 animate-pulse text-gray-500" />
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className=" font-medium text-rose-800 ">Something Went Wrong </h1>

          <div className="item-center mt-6 flex justify-between">
            <div className="h-2 w-10 rounded-lg bg-gray-200 "></div>

            <div className="h-4 w-28 rounded-lg bg-gray-200 "></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
