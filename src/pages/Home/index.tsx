import Newsletter from "$components/cards/Newsletter";
import { Footer } from "$layout/Footer";
import Nav from "$layout/Nav/Nav";

// import { ShowCase } from "$components/cards/Showcase";
// import Nav from "$layout/Nav/Nav";
import DisplayCategory from "./DisplayCategory";
import Hero from "./Hero";
import { ProductContainer } from "./ProductContainer";

export const Home = () => {
    return (
        <div className="w-full h-full max-h-full bg-chai ">
            <Nav />
            <Hero />

            <DisplayCategory />
            <ProductContainer heading="Feature Products" />
            <ProductContainer heading="Deal Of The Day" />
            <Newsletter />

            <Footer />
        </div>
    );
};
