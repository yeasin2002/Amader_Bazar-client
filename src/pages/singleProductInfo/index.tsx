import { Fragment } from "react"

import { $GET } from "$hooks/useFetchers"
import { SingleProductResponse } from "$types"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { DisplayProductInfo } from "./ProductInfo"
import { ProductReviews } from "./ProductReviews"
import { RelatedProduct } from "./RelatedProduct"

export const SingleProductInfo = ({ ...rest }) => {
  const params = useParams()
  const { data, isError, isLoading } = useQuery({
    queryKey: ["product", params.id],
    queryFn: () => $GET({ url: `/product/all/${params.id}` }) as Promise<SingleProductResponse>,
  })

  return (
    <Fragment>
      <section {...rest} className="py contain mx-auto my-32 px-5 lg:w-4/5">
        <DisplayProductInfo data={data?.data} isError={isError} isLoading={isLoading} />
        <ProductReviews />
        <RelatedProduct />
      </section>
    </Fragment>
  )
}
