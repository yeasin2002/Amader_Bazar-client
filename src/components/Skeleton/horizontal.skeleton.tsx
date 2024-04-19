import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface horizontalSkeletonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const horizontalSkeleton: FC<horizontalSkeletonProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <div className="mx-auto mb-2.5 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-700"></div>
    </div>
  )
}
