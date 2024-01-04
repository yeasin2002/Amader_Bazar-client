import { Newsletter } from "$components"
import { Footer } from "$layout"
import Hero from "../page"
import DisplayCategory from "./DisplayCategory"
import { FeatureProductWrapper } from "./FeatureProductWrapper"
import { ProductContainer } from "./ProductContainer"

export const Home = () => {
  return (
    <div className="upperArea mb-0 h-full max-h-full w-full  bg-chai">
      <Hero />
      <DisplayCategory />
      <FeatureProductWrapper />
      <ProductContainer heading="All Products" />
      <Newsletter />
      <Footer />
    </div>
  )
}
