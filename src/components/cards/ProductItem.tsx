import { Heart, Star } from "lucide-react"
import { FC } from "react"

import { Image } from "$ui"
import { Button } from "$ui/button"
import { Link } from "react-router-dom"

interface productsPros {
  img: string
  title: string
  review: string
  category: string
  price: string
  discountPrice?: string
}

export const ProductItem: FC<productsPros> = ({ title, category, review, img, price, discountPrice, ...rest }) => {
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
        <h3 className="text-lg font-semibold text-gray-800 xl:text-2xl 2xl:text-4xl">{title}</h3>
        <span className="my-3 flex items-center gap-x-1">
          <Star className="h-4 w-4 text-brand-900" fill="rgb(248 146 30)" />
          <span className="flex items-center gap-x-1 text-gray-600 md:text-lg">
            <p>{review}</p>
            <p> (7 reviews)</p>
          </span>
        </span>
        <span className="flex  items-end  gap-x-1 ">
          <p className="text-xs  font-normal text-blue-600 line-through xl:text-base 2xl:text-lg">${discountPrice}</p>
          <p className="text-lg font-semibold text-gray-800 xl:text-xl 2xl:text-2xl">$ {price}</p>
        </span>

        <div className="mt-4 flex items-center gap-x-1">
          <Button size={"sm"} className="btn-primary   w-full  flex-1">
            Add to cart
          </Button>
          <Button size={"sm"} variant={"brandOutline"} className="btn-primary">
            <Heart className="text-lg " fill="rgb(248 146 30)" color="" />
          </Button>
        </div>
      </div>
    </div>
  )
}
