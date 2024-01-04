import { FeatureProducts } from "$components/cards"
import { $GET } from "$hooks/useFetchers"
import { FeaturedProductResponse } from "$src/interface/FeatureProduct.interface"
import { useQuery } from "@tanstack/react-query"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

type MicroProductWrapperProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const FeatureProductWrapper: FC<MicroProductWrapperProps> = ({ ...rest }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["featureProduct"],
    queryFn: () => $GET({ url: "/product/feature" }) as Promise<FeaturedProductResponse>,
    staleTime: 1000,
  })

  return (
    <div {...rest} className="mt-10  grid w-full grid-cols-1 gap-x-4 gap-y-24 px-4 md:grid-cols-2 lg:grid-cols-3 ">
      <FeatureProducts
        heading="Featured Product"
        product={data?.data?.FeaturedProduct}
        isLoading={isLoading}
        isError={isError}
      />
      <FeatureProducts
        heading="Most  Popular"
        product={data?.data?.MostPopular}
        isLoading={isLoading}
        isError={isError}
      />
      <FeatureProducts
        heading="Discounted Product"
        product={data?.data?.DiscountedProduct}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  )
}
