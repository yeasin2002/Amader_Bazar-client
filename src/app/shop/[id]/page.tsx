"use client"
import { $GET } from "$hooks/useFetchers"
import { SingleProductResponse } from "$types"
import { useQuery } from "@tanstack/react-query"
import { DisplayProductInfo } from "./ProductInfo"
import { ProductReviews } from "./ProductReviews"
import { RelatedProduct } from "./RelatedProduct"

interface Props {
  params: { id: string }
}

const SingleProductInfo = ({ params }: Props) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["product", params.id],
    queryFn: () => $GET({ url: `/product/all/${params.id}` }) as Promise<SingleProductResponse>,
  })

  return (
    <section className="py contain mx-auto my-32 px-5 lg:w-4/5">
      <DisplayProductInfo data={data?.data} isError={isError} isLoading={isLoading} />
      <ProductReviews id={data?.data?._id} />
      <RelatedProduct id={data?.data?._id} category={data?.data?.category} />
    </section>
  )
}

export default SingleProductInfo
