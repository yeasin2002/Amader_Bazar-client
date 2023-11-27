import shoe from "$assets/temp/products/headphones-100.png"
import { ProductItem } from "$components/index"
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"

interface RenderAllSearchedProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RenderAllSearchedProduct: FC<RenderAllSearchedProductProps> = ({ ...rest }) => {
  const allCategory = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <Fragment>
      <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2   lg:grid-cols-3  " {...rest}>
        {allCategory.map((val) => {
          return (
            <ProductItem
              _id={val.toString()}
              key={val}
              title="shoe"
              category="shoe"
              img={shoe}
              price={100}
              discountPrice={90}
              review="4"
            />
          )
        })}
      </div>
    </Fragment>
  )
}
