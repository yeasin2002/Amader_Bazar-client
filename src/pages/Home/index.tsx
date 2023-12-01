import Newsletter from "$components/cards/Newsletter"
import { Footer } from "$layout/Footer"
import { useQueries } from "@tanstack/react-query"

import { $GET } from "$hooks/useFetchers"
import { AllProductResponse } from "$types"
import DisplayCategory from "./DisplayCategory"
import { FeatureProductWrapper } from "./FeatureProductWrapper"
import Hero from "./Hero"
import { ProductContainer } from "./ProductContainer"

export const Home = () => {
  const allQueries = useQueries({
    queries: [
      {
        queryKey: ["allProduct"],
        queryFn: () => $GET({ url: "/product/all" }) as Promise<AllProductResponse>,
        staleTime: 1000,
      },
      {
        queryKey: ["FeatureProduct"],
        queryFn: () => $GET({ url: "/product/feature" }) as Promise<AllProductResponse>,
        staleTime: 1000,
      },
    ],
  })

  return (
    <div className="h-full max-h-full w-full bg-chai ">
      <Hero />

      <DisplayCategory />

      <ProductContainer
        heading="Feature Products"
        data={allQueries[1]?.data?.data}
        isLoading={allQueries[1]?.isLoading}
        isError={allQueries[1]?.isError}
      />

      <FeatureProductWrapper />

      <ProductContainer
        heading="All Products"
        data={allQueries[0]?.data?.data}
        isLoading={allQueries[0]?.isLoading}
        isError={allQueries[0]?.isError}
      />
      <Newsletter />

      <Footer />
    </div>
  )
}
