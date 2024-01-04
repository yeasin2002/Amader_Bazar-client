import { Heart, ShoppingCart } from "lucide-react"
import { FC } from "react"

import { toast } from "sonner"

import notFound from "$assets/illustration/others/notFound.png"
import { useFavoriteProductStore } from "$store"
import { Product } from "$types"
import { Button, Image, buttonVariants } from "$ui"
import { getImgSrc } from "$utils"
import Link from "next/link"
import { BdTaka } from ".."

interface productsPros {
  _id: string
  img: string
  title: string
  review: string
  category: string
  price: number
  discountPrice?: number
  theProduct?: Product
}

export const ProductItem: FC<productsPros> = ({ title, category, img, price, discountPrice = 0, theProduct, _id }) => {
  const { toggleFavoriteProduct, favoriteProduct } = useFavoriteProductStore()

  const imgUrl = getImgSrc({
    img,
    imgType: "product-img",
    notFoundImg: notFound,
  })

  const checkLovedProduct = favoriteProduct.filter((item) => item._id === _id)[0]

  const FavoriteAddingHandler = () => {
    if (!theProduct) return
    toggleFavoriteProduct(theProduct)
    if (checkLovedProduct) {
      toast.warning("Product removed from favorite")
    } else {
      toast.success("Product added to favorite")
    }
  }

  const costAfterDiscount = price - (price * discountPrice || 0) / 100

  const renderComponent = (
    <div className="grid h-[30rem] max-h-full  grid-rows-2   space-y-4 rounded-lg  border border-gray-700/20 shadow-md ">
      <Image
        src={imgUrl}
        alt="product image"
        className="   h-full w-full cursor-pointer rounded-b-sm rounded-t-lg object-cover"
      />

      <div className=" flex flex-col justify-between p-4 ">
        <div>
          <span className="rounded-full border border-gray-800/40 px-2 py-1 font-playfairDisplay text-xs font-medium text-gray-800">
            {category}
          </span>
          <h2 className="heading-5 mt-2 font-dosis capitalize">{title}</h2>
          <div className="mt-2 space-y-2 ">
            <p className="mt-4 flex items-center gap-x-1 font-ptSansNarrow text-xl font-bold">
              <BdTaka /> {costAfterDiscount}
            </p>
            {discountPrice !== 0 && (
              <div className=" flex items-start gap-x-2 ">
                <p className="text-base text-gray-600 line-through">{price}</p>
                <p className="text-xs">{discountPrice}%</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-x-2">
          <Link
            className={buttonVariants({
              className: "btn-primary flex items-center justify-center gap-x-2",
            })}
            href={`/shop/${_id}`}>
            <ShoppingCart />
            <span>Details</span>
          </Link>
          <Button size={"sm"} variant={"brandOutline"} className="btn-primary" onClick={FavoriteAddingHandler}>
            <Heart
              className="text-lg text-gray-800"
              fill={`${checkLovedProduct?._id === _id ? "rgb(190 18 60)" : "rgb(255 255 255)"}`}
              color={`${checkLovedProduct?._id === _id ? "rgb(190 18 60)" : "rgb(31 41 55)"}`}
            />
          </Button>
        </div>
      </div>
    </div>
  )

  return <div>{renderComponent}</div>
}
