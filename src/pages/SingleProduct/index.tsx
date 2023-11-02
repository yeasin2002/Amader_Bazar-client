import { Tabs, TabsContent, TabsList, TabsTrigger } from "$ui/tabs";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import headphone from "$assets/temp/products/shoe1-2.jpg";
import { Image } from "$ui";
import { ChevronDown, DollarSign, Heart, Star } from "lucide-react";

import { Button } from "$ui/button";
import { AdditionalInformation } from "./AdditionalInformation";
import { Description } from "./Description";
import { Reviews } from "./Reviews";

interface SingleProductProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const SingleProduct: FC<SingleProductProps> = ({ ...rest }) => {
    return (
        <section {...rest}>
            <div className="text-gray-600 body-font ">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <Image
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src={headphone}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 space-y-3 lg:mt-0">
                            <div>
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    BRAND NAME
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    The Catcher in the Rye
                                </h1>
                            </div>

                            <div className="flex ">
                                <span className="flex items-center gap-x-3">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 font-normal rounded-lg   ">
                                        In stock
                                    </span>
                                    <div className="flex items-center gap-x-1">
                                        <Star />
                                        <span className="text-gray-600 ">
                                            4 Reviews
                                        </span>
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
                                Fam locavore kickstarter distillery. Mixtape
                                chillwave tumeric sriracha taximy chia
                                microdosing tilde DIY. XOXO fam indxgo
                                juiceramps cornhole raw denim forage brooklyn.
                                Everyday carry +1 seitan poutine tumeric.
                                Gastropub blue bottle austin listicle pour-over,
                                neutra jean shorts keytar banjo tattooed umami
                                cardigan.
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>

                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <ChevronDown size={20} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-4">
                                <Button className="w-full flex-1">
                                    Add to card
                                </Button>
                                <Button
                                    className="w-1/5 px-4 py-2"
                                    variant={"outline"}
                                >
                                    <Heart />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <Tabs defaultValue="description">
                    <TabsList className="   flex items-center justify-center ">
                        <TabsTrigger value="description">
                            Description
                        </TabsTrigger>
                        <TabsTrigger value="additionalInformation">
                            Additional information
                        </TabsTrigger>
                        <TabsTrigger value="reviews">Reviews (2)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="description">
                        <Description />
                    </TabsContent>
                    <TabsContent value="additionalInformation">
                        <AdditionalInformation />
                    </TabsContent>
                    <TabsContent value="reviews">
                        <Reviews />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};
