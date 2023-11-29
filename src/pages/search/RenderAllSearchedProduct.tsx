import emptyCard from "$assets/illustration/others/empty-cart.svg"

import { ProductData, ProductErrorSkeleton, ProductItem, ProductSkeleton } from "$components/index"
import { $GET } from "$hooks/useFetchers"
import { useFilterProduct } from "$store/filteredProducts.store"
import { AllProductResponse } from "$types"
import { useQuery } from "@tanstack/react-query"
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes, useEffect, useState } from "react"

interface RenderAllSearchedProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RenderAllSearchedProduct: FC<RenderAllSearchedProductProps> = ({ ...rest }) => {
  const { selectedCategory, maxPrice, minPrice, searchValue } = useFilterProduct()
  const [page, setPage] = useState(0)
  const categoriesQuery = selectedCategory.join("&category=")
  // const queryBuilder = `/product/search?&minPrice=${minPrice}&maxPrice=${maxPrice}}`
  const queryBuilder = `/product/search?minPrice=0&maxPrice=1000&page=${page}`
  const {
    data: products,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", queryBuilder],
    queryFn: () => $GET({ url: queryBuilder }) as Promise<AllProductResponse>,
  })
  // http://localhost:1011/api/v1/product/search?page=0&limit=10&minPrice=0&maxPrice=1000&category=Education&category=Sports %26 Outdoors
  // http://localhost:1011/api/v1/product/search?page=0&limit=10&minPrice=0&maxPrice=1000
  // http://localhost:1011/api/v1/product/search?category=Education&category=Sports %26 Outdoors&category=Health %26 Fitn ess

  useEffect(() => {
    refetch()
  }, [selectedCategory, maxPrice, minPrice, searchValue, refetch, categoriesQuery])

  const loadingComponents = (
    <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2   lg:grid-cols-3 ">
      {Array.from(Array(10).keys()).map((val) => {
        return <ProductSkeleton key={val} className="w-full" />
      })}
    </div>
  )
  const ErrorComponents = (
    <div className="grid flex-1 grid-cols-1 gap-5 py-6  md:grid-cols-2 lg:grid-cols-3 ">
      {Array.from(Array(10).keys()).map((val) => {
        return <ProductErrorSkeleton key={val} className="w-full" />
      })}
      <ProductData page={page} setPage={setPage} />
    </div>
  )

  const mainComponents = (
    <div className=" w-full py-6">
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
      <ProductData page={page} setPage={setPage} />
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
