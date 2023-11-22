import Newsletter from "$components/cards/Newsletter"
import { Footer } from "$layout/Footer"

import { Toaster } from "sonner"

import DisplayCategory from "./DisplayCategory"
import Hero from "./Hero"

import { Nav } from "$layout/Nav"
import { FeatureProductWrapper } from "./FeatureProductWrapper"
import { ProductContainer } from "./ProductContainer"

export const Home = () => {
  return (
    <div className="h-full max-h-full w-full bg-chai ">
      <Nav />
      <Hero />

      <DisplayCategory />
      <ProductContainer heading="Feature Products" />
      <FeatureProductWrapper />
      <ProductContainer heading="Deal Of The Day" />
      <Newsletter />

      <Footer />
      <Toaster richColors />
    </div>
  )
}
