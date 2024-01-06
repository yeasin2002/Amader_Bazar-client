import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"

import { ProductItem } from "@/components"
import { kurale } from "@/font"
import { AllProductResponse } from "@/interface"
import { $fetch } from "@/utils"

interface ProductContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  heading: string
}

export const ProductContainer: FC<ProductContainerProps> = async ({ heading, ...rest }) => {
  const data = (await $fetch("/product/all")) as AllProductResponse

  return (
    <section {...rest} className="mb-10 mt-32 space-y-10 px-4">
      <h2 className={" text-4xl  font-bold  " + kurale.className}>{heading}</h2>

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
