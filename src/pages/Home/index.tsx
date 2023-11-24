import Newsletter from "$components/cards/Newsletter"
import { Footer } from "$layout/Footer"
import { useQueries } from "@tanstack/react-query"

import { $GET } from "$hooks/useFetchers"
import { Nav } from "$layout/Nav"
import { AllProductResponse } from "$types"
import DisplayCategory from "./DisplayCategory"
import { FeatureProductWrapper } from "./FeatureProductWrapper"
import Hero from "./Hero"
import { ProductContainer } from "./ProductContainer"

export const Home = () => {
  // const allProduct = useQuery({
  //   queryKey: ["products"],
  //   queryFn: () => $GET({ url: "/product/all/" }) as Promise<AllProductResponse>,
  // })

  const allQueries = useQueries({
    queries: [
      {
        queryKey: ["allProduct", 1],
        queryFn: () => $GET({ url: "/product/all" }) as Promise<AllProductResponse>,
        staleTime: 1000,
      },
      {
        queryKey: ["FeatureProduct", 2],
        queryFn: () => $GET({ url: "/product/feature" }) as Promise<AllProductResponse>,
        staleTime: 1000,
      },
    ],
  })

  console.log("allQueries", allQueries)
  return (
    <div className="h-full max-h-full w-full bg-chai ">
      <Nav />
      <Hero />

      <DisplayCategory />
      <ProductContainer
        heading="All Product"
        data={allQueries[0]?.data?.data}
        isLoading={allQueries[0]?.isLoading}
        isError={allQueries[0]?.isError}
      />
      <FeatureProductWrapper />
      <ProductContainer
        heading="Feature Product"
        data={allQueries[1]?.data?.data}
        isLoading={allQueries[1]?.isLoading}
        isError={allQueries[1]?.isError}
      />
      <Newsletter />

      <Footer />
    </div>
  )
}
