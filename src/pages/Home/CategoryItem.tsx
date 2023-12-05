import notFound from "$assets/illustration/others/notFound.png"
import { baseUrl } from "$lib/exportEnv"
import { useFilterProduct } from "$store"
import { Image } from "$ui"
import { HTMLAttributes } from "react"
import { useNavigate } from "react-router-dom"
interface CategoryItemProps extends HTMLAttributes<HTMLDivElement> {
  categoryName: string
  icon: string
  desc?: string
}

export const CategoryItem = ({ categoryName, icon, desc = "", ...rest }: CategoryItemProps) => {
  const navigate = useNavigate()
  const { setSelectedCategory, setResetFilter } = useFilterProduct()
  let imgUrl
  if (!icon) {
    imgUrl = notFound
  } else {
    imgUrl = `${baseUrl}/extra/category-img/${icon}`
  }

  return (
    <div
      className=" into-center group aspect-square cursor-pointer flex-col "
      {...rest}
      onClick={() => {
        setResetFilter()
        setSelectedCategory(categoryName)
        navigate("/search")
      }}>
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
      <h2 className="mb-2    mt-4 font-ptSansNarrow text-xl font-bold text-slate-900">{categoryName}</h2>
      <p className="font-ptSansNarrow text-base font-medium text-slate-600">{desc}</p>
    </div>
  )
}
