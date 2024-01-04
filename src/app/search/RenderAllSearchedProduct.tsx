import emptyCard from "$assets/illustration/others/empty-cart.svg"

import { ProductData, ProductErrorSkeleton, ProductItem, ProductSkeleton } from "$components/index"
import { $POST } from "$hooks/useFetchers"
import { useFilterProduct } from "$store/filteredProducts.store"
import { SearchProductResponse } from "$types"
import { useMutation } from "@tanstack/react-query"
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes, useEffect, useState } from "react"

interface bodyData {
  search: string
  category: string[]
  minPrice: number
  maxPrice: number
}
interface RenderAllSearchedProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RenderAllSearchedProduct: FC<RenderAllSearchedProductProps> = ({ ...rest }) => {
  const { selectedCategory, maxPrice, minPrice, searchValue } = useFilterProduct()
  const [page, setPage] = useState(0)

  const queryBuilder = `/product/search?minPrice=0&maxPrice=1000&page=${page}`
  const {
    data: products,
    isError,
    isPending: isLoading,
    mutateAsync,
  } = useMutation({
    mutationKey: ["products", queryBuilder],
    mutationFn: (body: bodyData) => $POST({ url: queryBuilder, body }) as Promise<SearchProductResponse>,
  })

  useEffect(() => {
    mutateAsync({
      search: searchValue,
      category: selectedCategory,
      minPrice: minPrice,
      maxPrice: maxPrice,
    })
  }, [mutateAsync, searchValue, selectedCategory, minPrice, maxPrice])

  console.log("🚀 ~ file: RenderAllSearchedProduct.tsx:42 ~ products?.data?.length:", products?.data)
  const loadingComponents = (
    <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2   lg:grid-cols-3 ">
      {Array.from(Array(10).keys())?.map((val) => {
        return <ProductSkeleton key={val} className="w-full" />
      })}
    </div>
  )
  const ErrorComponents = (
    <div className="grid flex-1 grid-cols-1 gap-5 py-6  md:grid-cols-2 lg:grid-cols-3 ">
      {Array.from(Array(10).keys())?.map((val) => {
        return <ProductErrorSkeleton key={val} className="w-full" />
      })}
      <ProductData page={page} setPage={setPage} />
    </div>
  )

  const mainComponents = (
    <div className=" w-full overflow-x-hidden py-6">
      <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2   lg:grid-cols-3  " {...rest}>
        {products?.data?.length !== 0 &&
          products?.data?.map((val) => {
            return (
              <ProductItem
                _id={val._id}
                key={val._id}
                title={val.name}
                category={val.category}
                img={val.img}
                price={val.price}
                discountPrice={val.discount}
                review=""
              />
            )
          })}
      </div>
      {products?.data?.length === 0 && (
        <div className=" my-8  flex   w-full flex-col items-center justify-center">
          <img src={emptyCard} alt="No Item Found" className=" h-1/2 w-1/2   " />
          <h1
            className="
          text-center text-2xl font-bold text-slate-700
          
          ">
            No Item Found
          </h1>
        </div>
      )}
    </div>
  )

  let renderComponents
  if (isError || products?.success === false) {
    renderComponents = ErrorComponents
  } else if (isLoading) {
    renderComponents = loadingComponents
  } else {
    renderComponents = mainComponents
  }

  return <Fragment>{renderComponents}</Fragment>
}
