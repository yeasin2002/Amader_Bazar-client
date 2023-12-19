import { ProductItem, ProductSkeleton } from "$components/index"
import { $POST } from "$hooks/useFetchers"
import { AllProductResponse } from "$types"
import { useMutation } from "@tanstack/react-query"
import { Fragment, HTMLAttributes, useEffect } from "react"
interface RelatedProductProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string | undefined
  category: string | undefined
}

export const RelatedProduct = ({ id, category, ...rest }: RelatedProductProps) => {
  const { data, isPending, isError, mutateAsync } = useMutation({
    mutationKey: ["relatedProduct", id, category],
    mutationFn: () =>
      $POST({
        url: `/product/related-product`,
        body: { id, category },
      }) as Promise<AllProductResponse>,
  })

  useEffect(() => {
    mutateAsync()
  }, [id, category, mutateAsync])

  const loadingComponents = (
    <div>
      {Array.from("****")?.map((_, i) => {
        return <ProductSkeleton key={i} />
      })}
    </div>
  )
  const errorComponents = <div></div>
  const mainComponents = (
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
  )
  return (
    <Fragment>
      {data?.data?.length === 0 || !data?.success || (
        <div className="px-10">
          <p className="my-10 text-2xl  font-bold">Related Products</p>
          {isError ? errorComponents : isPending ? loadingComponents : mainComponents}
        </div>
      )}
    </Fragment>
  )
}
