"use client"

import { Product } from "@/interface"
import { useFavoriteProductStore } from "@/store"
import { Button, buttonVariants } from "@/ui"
import { Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { toast } from "react-hot-toast"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string | undefined
  theProduct?: Product
}

export const ProductItemActions = ({ id, theProduct, ...rest }: Props) => {
  const { toggleFavoriteProduct, favoriteProduct } = useFavoriteProductStore()
  const checkLovedProduct = favoriteProduct?.filter((item) => item._id === id)[0]

  const FavoriteAddingHandler = () => {
    theProduct && toggleFavoriteProduct(theProduct)
    if (checkLovedProduct) {
      toast.success("Product removed from favorite")
    } else {
      toast.success("Product added to favorite")
    }
  }
  return (
    <div className="flex justify-end gap-x-2" {...rest}>
      <Link
        href={`/shop/${id}`}
        className={buttonVariants({
          className: "btn-primary flex items-center justify-center gap-x-2",
        })}>
        <ShoppingCart />
        <span>Details</span>
      </Link>
      <Button size={"sm"} variant={"brandOutline"} className="btn-primary" onClick={FavoriteAddingHandler}>
        <Heart
          className="text-lg text-gray-800"
          fill={`${checkLovedProduct?._id === id ? "rgb(190 18 60)" : "rgb(255 255 255)"}`}
          color={`${checkLovedProduct?._id === id ? "rgb(190 18 60)" : "rgb(31 41 55)"}`}
        />
      </Button>
    </div>
  )
}

