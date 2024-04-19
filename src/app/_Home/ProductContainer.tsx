import type { AllProductResponse } from "@/interface"
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Fragment } from "react"

import { ProductItem } from "@/components"
import { cn } from "@/lib"
import { $fetch } from "@/utils"

interface ProductContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  heading: string
}

export const ProductContainer: FC<ProductContainerProps> = async ({ heading, ...rest }) => {
  const data = (await $fetch("/product/all", {
    next: {
      tags: ["AllProduct"],
    },
  })) as AllProductResponse

  return (
    <section {...rest} className="mb-10 mt-32 space-y-10 px-4">
      <h2 className={cn(" font-kurale  text-4xl   font-bold")}>{heading}</h2>

      <div className="grid grid-cols-1 gap-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-4    ">
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
      </div>
    </section>
  )
}
