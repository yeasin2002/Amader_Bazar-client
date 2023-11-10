import { Heart, Star } from "lucide-react";
import { FC } from "react";


import { Image } from "$ui";
import { Button } from "$ui/button";
import { Link } from "react-router-dom";

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
      <div {...rest} className="group rounded-lg border   border-gray-500/30 shadow-lg">
        <Link to="/shop/1">
          <div className="w-full   bg-white   ">
            <Image
              src={img}
              alt="product image"
              className="aspect-video w-full rounded-lg  rounded-t-md object-cover  object-center  md:aspect-square"
            />
          </div>
        </Link>
        <div className="p-4 ">
          <p className="text-xs font-semibold text-gray-500 ">{category}</p>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <span className="my-3 flex items-center gap-x-2">
            <Star className="h-4 w-4 text-brand-900" fill="rgb(248 146 30)" />
            <span className="flex items-center gap-x-2 text-gray-600">
              <p>{review}</p>
              <p> (7 reviews)</p>
            </span>
          </span>
          <span className="flex  items-end  gap-x-1 ">
            <p className="text-xs  font-normal text-blue-600 line-through">${discountPrice}</p>
            <p className="text-lg font-semibold text-gray-800">$ {price}</p>
          </span>

          <div className="mt-4 flex items-center gap-x-1">
            <Button size={"sm"} className="w-full    flex-1">
              Add to cart
            </Button>
            <Button size={"sm"} variant={"brandOutline"}>
              <Heart className="text-lg " fill="rgb(248 146 30)" color="" />
            </Button>
          </div>
        </div>
      </div>
    )
};
