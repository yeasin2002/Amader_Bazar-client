import { ProductErrorSkeleton, ProductItem, ProductSkeleton } from "$components/index"
import { $GET } from "$hooks/useFetchers"
import { AllProductResponse } from "$types"
import { useQuery } from "@tanstack/react-query"
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"

interface RenderAllSearchedProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RenderAllSearchedProduct: FC<RenderAllSearchedProductProps> = ({ ...rest }) => {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => $GET({ url: "/product/search" }) as Promise<AllProductResponse>,
  })

  const loadingComponents = (
    <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2   lg:grid-cols-3 ">
      {Array.from(Array(10).keys()).map((val) => {
        return <ProductSkeleton key={val} className="w-full" />
      })}
    </div>
  )
  const ErrorComponents = (
    <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2   lg:grid-cols-3 ">
      {Array.from(Array(10).keys()).map((val) => {
        return <ProductErrorSkeleton key={val} className="w-full" />
      })}
    </div>
  )

  const mainComponents = (
    <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2   lg:grid-cols-3  " {...rest}>
      {products?.data?.map((val) => {
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
  )

  return <Fragment>{isError ? ErrorComponents : isLoading ? loadingComponents : mainComponents}</Fragment>
}
