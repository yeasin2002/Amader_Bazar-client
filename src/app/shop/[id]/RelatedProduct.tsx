import { ProductItem } from "$components/index"
import { AllProductResponse } from "$types"
import { $fetch } from "@/utils"
import { Fragment, HTMLAttributes } from "react"
interface RelatedProductProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string | undefined
  category: string | undefined
}

export const RelatedProduct = async ({ id, category, ...rest }: RelatedProductProps) => {
  const data = (await $fetch(`/product/related-product`)) as AllProductResponse

  return (
    <Fragment>
      {data?.data?.length === 0 || !data?.success || (
        <div className="px-10">
          <p className="my-10 text-2xl  font-bold">Related Products</p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3   " {...rest}>
            {data?.data?.map((val) => {
              return (
                <ProductItem
                  _id={val._id}
                  key={val._id}
                  title={val.name}
                  category={val.category}
                  img={val.img}
                  price={val.price}
                  discountPrice={90}
                  review="4"
                />
              )
            })}
          </div>
        </div>
      )}
    </Fragment>
  )
}
