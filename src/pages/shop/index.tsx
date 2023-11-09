import shoe from "$assets/temp/products/shoe1-1.jpg";
import { ProductItem } from "$components/index";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { FilterCard } from "./FilterCard";

interface ShopProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Shop: FC<ShopProps> = ({ ...rest }) => {
  return (
    <div {...rest} className="container space-y-32">
      <div>
        <h1 className="my-4 text-xl font-bold">Search All Product </h1>
      </div>
      <div className="flex gap-x-3">
        <FilterCard className="w-1/4" />
        <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((val) => {
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
            );
          })}
        </div>
      </div>
    </div>
  );
};
