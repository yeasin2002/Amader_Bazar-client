"use client"

import { SearchInput } from "$components/forms/SearchInput"
import { $GET } from "$hooks/useFetchers"
import { useFilterProduct } from "$store/filteredProducts.store"
import { CategoriesResponse } from "$types"
import { useQuery } from "@tanstack/react-query"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { FilterByCategoryInMobile } from "./FilterByCategoryInMobile"
import { FilterCard } from "./FilterCard"
import { RenderAllSearchedProduct } from "./RenderAllSearchedProduct"

type ShopProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Search: FC<ShopProps> = ({ ...rest }) => {
  const { searchValue, setSearchValue } = useFilterProduct()
  const {
    data: categoriesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => $GET({ url: "/category/" }) as Promise<CategoriesResponse>,
  })
  return (
    <div {...rest} className=" upperArea container   ">
      <div className="my-8 flex justify-between">
        <h1 className="my-4 text-xl font-bold">Search All Product </h1>

        <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
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
export default Search
