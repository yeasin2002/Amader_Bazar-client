import Image from "$ui/Image";
import { Button } from "$ui/button";

import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { FC } from "react";

interface productsPros {
    img: string;
    title: string;
    review: string;
    category: string;
    price: string;
    discountPrice?: string;
}

export const ProductItem: FC<productsPros> = ({
    title,
    category,
    review,
    img,
    price,
    discountPrice,
    ...rest
}) => {
    return (
        <div
            {...rest}
            className="border border-gray-500/40 rounded-lg   shadow-lg group"
        >
            <div className="w-full max-w-sm overflow-hidden bg-white relative  ">
                <Image
                    src={img}
                    alt="product image"
                    className="object-cover object-center w-full  h-60 "
                />
                <div className="absolute bottom-0 right-0 p-2 h-16 bg-gray-400 flex flex-col gap-2 items-center justify-center text-white  group-hover:opacity-100 opacity-0 transition-all duration-500">
                    <Heart className="cursor-pointer" />
                    <Eye className="cursor-pointer" />
                </div>
            </div>
            <div className="p-4 ">
                <p className="text-xs font-semibold text-gray-500 ">
                    {category}
                </p>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <span className="flex items-center gap-x-2 my-3">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="flex items-center text-gray-600 gap-x-2">
                        <p>{review}</p>
                        <p> (7 reviews)</p>
                    </span>
                </span>
                <span className="flex  gap-x-1  items-end ">
                    <p className="text-xs  font-normal text-blue-600 line-through">
                        ${discountPrice}
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                        $ {price}
                    </p>
                </span>
                <div className="flex items-center mt-4 gap-x-1">
                    <Button size={"sm"} className="w-full    flex-1">
                        Add to cart
                    </Button>
                    <Button size={"sm"} className="bg-blue-800">
                        <ShoppingCart />
                    </Button>
                </div>
            </div>
        </div>
    );
};
