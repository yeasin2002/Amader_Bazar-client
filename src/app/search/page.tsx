import { CategoriesResponse } from "$types"
import { $fetch } from "@/utils"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { FilterByCategoryInMobile } from "./FilterByCategoryInMobile"
import { FilterCard } from "./FilterCard"
import { RenderAllSearchedProduct } from "./RenderAllSearchedProduct"
import { CategorySearch } from "./categorySearch"

type ShopProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Search: FC<ShopProps> = async ({ ...rest }) => {
  const categoriesData = (await $fetch("/category")) as CategoriesResponse
  console.log("🚀CategoriesData:", categoriesData)

  return (
    <div {...rest} className=" upperArea container   ">
      <div className="my-8 flex justify-between">
        <h1 className="my-4 text-xl font-bold">Search All Product </h1>
        <CategorySearch />
      </div>
      <FilterByCategoryInMobile categories={categoriesData?.data} />
      <div className="flex gap-x-3">
        <FilterCard className="hidden w-1/4 md:block" categories={categoriesData?.data} />

        <RenderAllSearchedProduct />
      </div>
    </div>
  )
}
export default Search
