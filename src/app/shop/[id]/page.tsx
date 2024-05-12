import type { AllProductResponse, ReviewsResponse, SingleProductResponse } from "$types"
import { $fetch } from "@/utils"
import { DisplayProductInfo } from "./_components/ProductInfo"
import { ProductReviews } from "./_components/ProductReviews"
import { RelatedProduct } from "./_components/RelatedProduct"

interface Props {
  params: { id: string }
}

export const generateStaticParams = async () => {
  const data = (await $fetch("/product/all")) as AllProductResponse
  return data?.data?.map((product) => ({ params: { id: product._id } }))
}

const SingleProductInfo = async ({ params }: Props) => {
  const dataPromise = $fetch(`/product/all/${params.id}`, {
    next: {
      tags: ["single-product", params.id],
    },
  }) as Promise<SingleProductResponse>

  const ratingDataPromise = $fetch(`/product/rating/${params.id}`, {
    next: { tags: ["product-review", params.id] },
  }) as Promise<ReviewsResponse>

  const [data, ratingData] = await Promise.all([dataPromise, ratingDataPromise])

  return (
    <section className="py contain mx-auto my-32 px-5 lg:w-4/5">
      <DisplayProductInfo data={data?.data} totalReviews={ratingData?.data?.totalReviewer} />
      <ProductReviews data={ratingData} id={params.id} />
      <RelatedProduct id={data?.data?._id} category={data?.data?.category} />
    </section>
  )
}

export default SingleProductInfo
