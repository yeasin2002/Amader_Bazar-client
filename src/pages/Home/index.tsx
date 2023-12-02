import { Newsletter } from "$components"
import { Footer } from "$layout"
import DisplayCategory from "./DisplayCategory"
import { FeatureProductWrapper } from "./FeatureProductWrapper"
import Hero from "./Hero"
import { ProductContainer } from "./ProductContainer"

export const Home = () => {
  return (
    <div className="h-full max-h-full w-full bg-chai ">
      <Hero />
      <DisplayCategory />
      <FeatureProductWrapper />
      <ProductContainer heading="All Products" />
      <Newsletter />
      <Footer />
    </div>
  )
}
