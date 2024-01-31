import { ReviewsResponse, SingleProductResponse } from "$types"
import { $fetch } from "@/utils"
import { DisplayProductInfo } from "./ProductInfo"
import { ProductReviews } from "./ProductReviews"
import { RelatedProduct } from "./RelatedProduct"

interface Props {
  params: { id: string }
}

const SingleProductInfo = async ({ params }: Props) => {
  const data = (await $fetch(`/product/all/${params.id}`)) as SingleProductResponse
  const ratingData = (await $fetch(`/product/rating/${params.id}`)) as ReviewsResponse

  return (
    <section className="py contain mx-auto my-32 px-5 lg:w-4/5">
      <DisplayProductInfo data={data?.data} totalReviews={ratingData.data.totalReviewer} />
      <ProductReviews data={ratingData} />
      <RelatedProduct id={data?.data?._id} category={data?.data?.category} />
    </section>
  )
}

export default SingleProductInfo
