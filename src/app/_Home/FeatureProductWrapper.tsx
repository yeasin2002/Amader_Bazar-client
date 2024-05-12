import { FeatureProducts } from "$components/cards"
import { $fetch } from "@/utils"

import type { FeaturedProductResponse } from "@/interface"
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"

type MicroProductWrapperProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const FeatureProductWrapper: FC<MicroProductWrapperProps> = async ({ ...rest }) => {
  const data = (await $fetch("/product/feature", {
    next: {
      tags: ["FeaturedProduct", "MostPopular", "DiscountedProduct"],
    },
  })) as FeaturedProductResponse

  return (
    <div {...rest} className="mt-10  grid w-full grid-cols-1 gap-x-4 gap-y-24 px-4 md:grid-cols-2 lg:grid-cols-3  ">
      <FeatureProducts heading="Featured Product" product={data?.data?.FeaturedProduct} />
      <FeatureProducts heading="Most  Popular" product={data?.data?.MostPopular} />
      <FeatureProducts heading="Discounted Product" product={data?.data?.DiscountedProduct} />
    </div>
  )
}
