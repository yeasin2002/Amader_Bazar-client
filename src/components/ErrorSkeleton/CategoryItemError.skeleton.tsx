import ErrorIcon from "$assets/illustration/3D/alert.png"
import Image from "next/image"
import type { HTMLAttributes } from "react"
interface CategoryItemProps extends HTMLAttributes<HTMLDivElement> {}

export const CategoryItemError = ({ ...rest }: CategoryItemProps) => {
  return (
    <div className=" into-center group aspect-square cursor-pointer flex-col " {...rest}>
      <div className="into-center h-28 w-28 rounded-full bg-gray-300/50 ">
        <Image
          src={ErrorIcon}
          alt="Error "
          className="h-full w-full object-cover p-4 transition-all group-hover:scale-105"
        />
      </div>
    </div>
  )
}
