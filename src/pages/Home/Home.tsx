import shoe from "$assets/temp/products/shoe1-1.jpg";
import { ProductItem } from "$components/cards/ProductItem";
import { Footer } from "$layout/Footer";
// import { ShowCase } from "$components/cards/Showcase";
import Nav from "$layout/Nav/Nav";
import DisplayCategory from "./DisplayCategory";

export const Home = () => {
    return (
        <div className="w-full h-full max-h-full bg-chai ">
            <div
                className="bg-teal-500"
                style={{
                    height: `calc(100vh - 10rem)`,
                }}
            >
                <Nav />
            </div>
            <DisplayCategory />
            <div className="grid grid-cols-4 gap-x-5 px-4 my-8">
                {[1, 2, 3, 4].map((val) => {
                    return (
                        <ProductItem
                            key={val}
                            title="shoe"
                            category="shoe"
                            img={shoe}
                            price="100"
                            discountPrice="90"
                            review="4"
                        />
                    );
                })}
            </div>
            <Footer />
        </div>
    );
};
