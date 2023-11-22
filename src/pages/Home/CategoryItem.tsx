import notFound from "$assets/illustration/others/notFound.png"
import { Image } from "$ui"
import { HTMLAttributes } from "react"
interface CategoryItemProps extends HTMLAttributes<HTMLDivElement> {
  categoryName: string
  icon: string
  desc?: string
}

export const CategoryItem = ({ categoryName, icon, desc = "", ...rest }: CategoryItemProps) => {
  let imgUrl
  if (!icon) {
    imgUrl = notFound
  } else {
    imgUrl = `http://localhost:1012/api/v1/extra/category-img/${icon}`
  }
  console.log(imgUrl)
  return (
    <div className=" into-center group aspect-square cursor-pointer flex-col " {...rest}>
      <span className="into-center h-28 w-28 rounded-full bg-gray-300/50 ">
        <Image
          src={imgUrl}
          alt={categoryName}
          className="h-full w-full object-cover p-4 transition-all group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = notFound
          }}
        />
      </span>
      <h2 className="mb-2    mt-4 font-serif text-xl font-bold text-slate-900">{categoryName}</h2>
      <p className="text-base font-medium text-slate-600">{desc}</p>
    </div>
  )
}
