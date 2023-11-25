import { Heart, Star } from "lucide-react"
import { FC } from "react"

import { Image } from "$ui"
import { Button } from "$ui/button"
import { Link } from "react-router-dom"

import notFound from "$assets/illustration/others/notFound.png"
import { baseUrl } from "$lib/exportEnv"
import { useFavoriteProductStore, useSelectedProduct } from "$store"
import { Product } from "$types"
import { toast } from "sonner"

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

export const ProductItem: FC<productsPros> = ({
  title,
  category,
  review,
  img,
  price,
  discountPrice,
  theProduct,
  _id,
  ...rest
}) => {
  const { toggleFavoriteProduct, favoriteProduct } = useFavoriteProductStore()
  const { toggleSelectedProduct, selectedProduct } = useSelectedProduct()

  let imgUrl
  if (!img) {
    imgUrl = notFound
  } else {
    imgUrl = `${baseUrl}/extra/product-img/${img}`
  }
  const checkLovedProduct = favoriteProduct.filter((item) => item._id === _id)[0]
  const checkSelectedProduct = selectedProduct.filter((item) => item._id === _id)[0]

  const FavoriteAddingHandler = () => {
    if (!theProduct) return
    toggleFavoriteProduct(theProduct)
    if (checkLovedProduct) {
      toast.warning("Product removed from favorite")
    } else {
      toast.success("Product added to favorite")
    }
  }

  const SelectedProductHandler = () => {
    if (!theProduct) return
    toggleSelectedProduct({
      ...theProduct,
      SelectedQuantity: 1,
    })
  }

  return (
    <div {...rest} className="group rounded-lg border   border-gray-500/30 shadow-lg">
      <Link to={`/shop/${_id}`}>
        <div className="w-full   bg-white   ">
          <Image
            src={imgUrl}
            height={300}
            alt="product image"
            className="aspect-video w-full rounded-b-sm rounded-t-lg
            object-cover  object-center  md:aspect-square"
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
          {discountPrice !== 0 && (
            <p className="text-xs  font-normal text-blue-600 line-through xl:text-base 2xl:text-lg">{discountPrice}</p>
          )}
          <p className="text-lg font-semibold text-gray-800 xl:text-xl 2xl:text-2xl">$ {price}</p>
        </span>

        <div className="mt-4 flex items-center gap-x-1">
          <Button size={"sm"} className="btn-primary   w-full  flex-1" onClick={SelectedProductHandler}>
            {checkSelectedProduct ? "Remove from cart" : "Add to cart"}
          </Button>
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
}
