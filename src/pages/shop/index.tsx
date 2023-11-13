import shoe from "$assets/temp/products/headphones-100.png";
import { ProductItem } from "$components/index";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { FilterByCategoryInMobile } from "./FilterByCategoryInMobile"
import { FilterCard } from "./FilterCard"

interface ShopProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Shop: FC<ShopProps> = ({ ...rest }) => {
  const allCategory = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div {...rest} className="container ">
      <div>
        <h1 className="my-4 text-xl font-bold">Search All Product </h1>
      </div>
      <FilterByCategoryInMobile categories={allCategory} />
      <div className="flex gap-x-3">
        <FilterCard className="hidden w-1/4 md:block" />

        <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2   lg:grid-cols-3 ">
          {allCategory.map((val) => {
            return (
              <ProductItem
                key={val}
                title="shoe"
                category="shoe"
                img={shoe}
                price="100"
                discountPrice="90"
                review="4"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
