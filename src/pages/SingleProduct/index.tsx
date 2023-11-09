import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react";

import headphone from "$assets/temp/products/shoe1-2.jpg";
import { Button, Image } from "$ui";
import { ChevronDown, DollarSign, Heart, Star } from "lucide-react";

import shoe from "$assets/temp/products/electronic3.jpg"
import { ProductItem } from "$components/index"
import { Nav } from "$layout";
import { RatingGraph } from "./RatingGraph"
import { Reviews } from "./ReviewCard"

interface SingleProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const SingleProduct: FC<SingleProductProps> = ({ ...rest }) => {
  return (
    <Fragment>
      <Nav />
      <section {...rest} className="py contain mx-auto my-32 px-5 lg:w-4/5">
        <div className="body-font  text-gray-600 ">
          <div className="   mx-auto ">
            <div className="mx-auto flex flex-wrap ">
              <Image
                alt="e-commerce"
                className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
                src={headphone}
              />
              <div className="mt-6 w-full space-y-3 lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
                <div>
                  <h2 className="title-font text-sm tracking-widest text-gray-500">BRAND NAME</h2>
                  <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">The Catcher in the Rye</h1>
                </div>
                <div className="flex ">
                  <span className="flex items-center gap-x-3">
                    <span className="rounded-lg bg-blue-100 px-2 py-1 font-normal text-blue-700   ">In stock</span>
                    <div className="flex items-center gap-x-1">
                      <Star fill="rgb(248 146 30)" color="rgb(248 146 30)" />
                      <span className="text-gray-600 ">4 Reviews</span>
                    </div>
                  </span>
                </div>
                <div className=" flex items-center gap-x-4">
                  <div className="flex  items-center ">
                    <DollarSign size={12} />
                    <p className="text-base">1000</p>
                  </div>
                  <div className="flex  items-center ">
                    <DollarSign size={20} />
                    <p className="text-xl font-bold">1000</p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde
                  DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
                  tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>
                <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                    <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                    <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-indigo-500 focus:outline-none"></button>
                  </div>
                  <div className="ml-6 flex items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                        <ChevronDown size={20} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <Button className="w-full flex-1">Add to card</Button>
                  <Button className="w-1/5 px-4 py-2" variant={"outline"}>
                    <Heart />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <h4 className="mt-20 text-lg font-bold">Reviews </h4>
          <RatingGraph />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((rating) => {
              return <Reviews key={rating} />
            })}
          </div>
        </div>
      </section>
      <div className="px-10">
        <p className="my-10 text-2xl  font-bold">Related Products</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4   ">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((val) => {
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
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}
