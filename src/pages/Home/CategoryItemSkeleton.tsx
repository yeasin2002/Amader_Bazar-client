import { Skeleton } from "$ui"
import { HTMLAttributes } from "react"
interface CategoryItemProps extends HTMLAttributes<HTMLDivElement> {}

export const CategoryItemSkeleton = ({ ...rest }: CategoryItemProps) => {
  return (
    <div className=" into-center group aspect-square cursor-pointer flex-col gap-y-3 " {...rest}>
      <Skeleton className="into-center h-28 w-28 rounded-full bg-gray-700 " />
      <Skeleton className="mt-2 h-6 w-20 rounded-full bg-gray-700 " />
    </div>
  )
}
