import { $GET } from "$hooks/useFetchers"
import { CategoriesResponse } from "$types"
import { useQuery } from "@tanstack/react-query"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { FilterByCategoryInMobile } from "./FilterByCategoryInMobile"
import { FilterCard } from "./FilterCard"
import { RenderAllSearchedProduct } from "./RenderAllSearchedProduct"

type ShopProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Search: FC<ShopProps> = ({ ...rest }) => {
  const {
    data: categoriesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => $GET({ url: "/category/" }) as Promise<CategoriesResponse>,
  })

  return (
    <div {...rest} className="container ">
      <div>
        <h1 className="my-4 text-xl font-bold">Search All Product </h1>
      </div>
      <FilterByCategoryInMobile categories={categoriesData?.data} isLoading={isLoading} isError={isError} />
      <div className="flex gap-x-3">
        <FilterCard
          className="hidden w-1/4 md:block"
          categories={categoriesData?.data}
          isLoading={isLoading}
          isError={isError}
        />

        <RenderAllSearchedProduct />
      </div>
    </div>
  )
}
