import Image from "next/image"
import { useRouter } from "next/navigation"
import type { HTMLAttributes } from "react"

import { pt_sans_narrow } from "@/font"
import { useFilterProduct } from "@/store"
import { getImgSrc } from "@/utils"

import notFound from "$assets/illustration/others/notFound.png"

interface CategoryItemProps extends HTMLAttributes<HTMLDivElement> {
  categoryName: string
  icon: string
  desc?: string
}

export const CategoryItem = ({ categoryName, icon, desc = "", ...rest }: CategoryItemProps) => {
  const router = useRouter()
  const { setSelectedCategory, setResetFilter } = useFilterProduct()
  const img = getImgSrc({
    imgType: "category-img",
    img: icon,
  })

  return (
    <div
      className=" into-center group aspect-square cursor-pointer flex-col "
      {...rest}
      onClick={() => {
        setResetFilter()
        setSelectedCategory(categoryName)
        router.push("/search")
      }}>
      <span className="into-center h-28 w-28 rounded-full bg-gray-300/50 ">
        <Image
          src={img || notFound.src}
          alt={categoryName}
          className="h-full w-full  object-cover p-4 transition-all group-hover:scale-105"
          width={500}
          height={500}
          crossOrigin="anonymous"
        />
      </span>
      <h2 className="mb-2    mt-4  text-xl font-bold text-slate-900">{categoryName}</h2>
      <p className={" text-base font-medium text-slate-600" + pt_sans_narrow.className}>{desc}</p>
    </div>
  )
}
