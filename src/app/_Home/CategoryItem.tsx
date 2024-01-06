import notFound from "$assets/illustration/others/notFound.png"
import { pt_sans_narrow } from "@/font"
import { clientEnv } from "@/lib"

import { useFilterProduct } from "@/store"
import { getImgSrc } from "@/utils"
import Image, { StaticImageData } from "next/image"

import { HTMLAttributes } from "react"

interface CategoryItemProps extends HTMLAttributes<HTMLDivElement> {
  categoryName: string
  icon: string
  desc?: string
}

export const CategoryItem = ({ categoryName, icon, desc = "", ...rest }: CategoryItemProps) => {
  const { setSelectedCategory, setResetFilter } = useFilterProduct()
  let imgUrl
  if (!icon) {
    imgUrl = notFound
  } else {
    imgUrl = `${clientEnv.baseUrl}/extra/category-img/${icon}`
  }

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
        // navigate("/search")
      }}>
      <span className="into-center h-28 w-28 rounded-full bg-gray-300/50 ">
        <Image
          src={img}
          alt={categoryName}
          className="h-full w-full  object-cover p-4 transition-all group-hover:scale-105"
          width={500}
          height={500}
        />
      </span>
      <h2 className="mb-2    mt-4  text-xl font-bold text-slate-900">{categoryName}</h2>
      <p className={" text-base font-medium text-slate-600" + pt_sans_narrow.className}>{desc}</p>
    </div>
  )
}
