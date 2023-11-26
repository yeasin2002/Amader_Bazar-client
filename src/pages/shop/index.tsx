import { $GET } from "$hooks/useFetchers"
import { AllProductResponse, CategoriesResponse } from "$types"
import { useQueries } from "@tanstack/react-query"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { FilterByCategoryInMobile } from "./FilterByCategoryInMobile"
import { FilterCard } from "./FilterCard"
import { RenderAllSearchedProduct } from "./RenderAllSearchedProduct"

type ShopProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Shop: FC<ShopProps> = ({ ...rest }) => {
  const query = useQueries({
    queries: [
      {
        queryKey: ["allProduct"],
        queryFn: () => $GET({ url: "/product/all" }) as Promise<AllProductResponse>,
      },
      {
        queryKey: ["categories"],
        queryFn: () => $GET({ url: "/category/" }) as Promise<CategoriesResponse>,
      },
    ],
  })

  console.log(query[1].isLoading)

  return (
    <div {...rest} className="container ">
      <div>
        <h1 className="my-4 text-xl font-bold">Search All Product </h1>
      </div>
      <FilterByCategoryInMobile
        categories={query[1].data?.data}
        isLoading={query[1].isLoading}
        isError={query[1].isError}
      />
      <div className="flex gap-x-3">
        <FilterCard
          className="hidden w-1/4 md:block"
          categories={query[1].data?.data}
          isLoading={query[1].isLoading}
          isError={query[1].isError}
        />

        <RenderAllSearchedProduct />
      </div>
    </div>
  )
}
