import { ProductItem } from "$components"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import shoe from "$assets/temp/products/shoe1-1.jpg"

interface ProductContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  heading: string
}

export const ProductContainer: FC<ProductContainerProps> = ({ heading, ...rest }) => {
  return (
    <section {...rest} className="mb-10 mt-32 space-y-10 px-4">
      <h2 className="text-4xl font-bold   ">{heading}</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4    ">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((val) => {
          return (
            <ProductItem key={val} title="shoe" category="shoe" img={shoe} price="100" discountPrice="90" review="4" />
          )
        })}
      </div>
    </section>
  )
}
