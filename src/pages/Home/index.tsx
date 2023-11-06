import Newsletter from "$components/cards/Newsletter";
import { Footer } from "$layout/Footer";
import Nav from "$layout/Nav/Nav";
import { Toaster } from "$ui/toaster";

// import { ShowCase } from "$components/cards/Showcase";
// import Nav from "$layout/Nav/Nav";
import DisplayCategory from "./DisplayCategory";
import Hero from "./Hero";

import { FeatureProductWrapper } from "./FeatureProductWrapper";
import { ProductContainer } from "./ProductContainer";

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
      <Toaster />
    </div>
  );
};
