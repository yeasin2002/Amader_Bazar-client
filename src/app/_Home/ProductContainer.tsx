"use client"

import { ProductErrorSkeleton, ProductItem, ProductSkeleton } from "$components"
import { $GET } from "$hooks/useFetchers"
import { AllProductResponse } from "$types"
import { kurale } from "@/font"
import { useQuery } from "@tanstack/react-query"
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"

interface ProductContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  heading: string
}

export const ProductContainer: FC<ProductContainerProps> = ({ heading, ...rest }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allProduct"],
    queryFn: () => $GET({ url: "/product/all" }) as Promise<AllProductResponse>,
    staleTime: 1000,
  })

  const MainComponents = (
    <Fragment>
      {data?.data?.map((item) => {
        return (
          <ProductItem
            _id={item._id}
            key={item._id}
            title={item.name}
            category={item.category}
            img={item.img}
            price={item.price}
            discountPrice={item.discount}
            review="4"
            theProduct={item}
          />
        )
      })}
    </Fragment>
  )

  const LoadingComponent = (
    <Fragment>
      {Array.from(Array(8))?.map((_, index) => {
        return <ProductSkeleton key={index} />
      })}
    </Fragment>
  )

  const ErrorComponent = (
    <Fragment>
      {Array.from(Array(8))?.map((_, index) => {
        return <ProductErrorSkeleton key={index} />
      })}
    </Fragment>
  )

  return (
    <section {...rest} className="mb-10 mt-32 space-y-10 px-4">
      <h2 className={" text-4xl  font-bold  " + kurale.className}>{heading}</h2>

      <div className="grid grid-cols-1 gap-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-4    ">
        {isError ? ErrorComponent : isLoading ? LoadingComponent : MainComponents}
      </div>
    </section>
  )
}
