import { Star } from "lucide-react"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { TextGroupSkeleton, UserSkeleton } from "."

interface RatingsSkeletonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RatingsSkeleton: FC<RatingsSkeletonProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <div
        role="status"
        className="max-w-sm animate-pulse space-y-5 rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6">
        <div className="flex animate-pulse items-center gap-x-2">
          {Array.from("stars").map((_, i) => {
            return <Star className="animate-pulse" key={i} />
          })}
        </div>
        <TextGroupSkeleton />
        <UserSkeleton />
      </div>
    </div>
  )
}
