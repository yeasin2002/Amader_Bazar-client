import { ImageOff } from "lucide-react"
import { Fragment } from "react"

export const EachProductErrorSkeleton = ({ ...rest }) => {
  return (
    <Fragment>
      <div
        {...rest}
        role="status"
        className="animate-pulse space-y-8 rtl:space-x-reverse md:flex md:items-center md:space-x-8 md:space-y-0">
        <div className="flex h-full w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700 sm:w-96">
          <ImageOff />
        </div>
        <div className="w-full">
          <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700" />
          <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </Fragment>
  )
}
