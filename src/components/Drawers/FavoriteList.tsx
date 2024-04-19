"use client"

import { Heart } from "lucide-react"
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import empty from "@/assets/illustration/3D/empty-cart.png"
import { useFavoriteProductStore } from "@/store"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/ui"

import { getImgSrc } from "@/utils/getImageSrc"
import Image from "next/image"
import { FavoriteAndSelectedItem } from "./FavAndSelectedProduct"

type FavoriteListProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export const FavoriteList: FC<FavoriteListProps> = ({ ...rest }) => {
  const { favoriteProduct } = useFavoriteProductStore()

  const mainComponent = (
    <div className="h-full space-y-3 overflow-y-scroll ">
      {favoriteProduct?.map((item) => {
        const imgUrl = getImgSrc({
          img: item.img,
          imgType: "product-img",
        })

        return (
          <FavoriteAndSelectedItem
            _id={item._id}
            key={item._id}
            name={item.name}
            imgUrl={imgUrl}
            category={item.category}
            price={item.price}
          />
        )
      })}
    </div>
  )
  const NoProductComponent = (
    <div>
      <Image src={empty.src} alt="empty card" className="mt-32" width={100} height={100} />
      <p className="mt-10 text-center text-2xl font-bold">No Item Selected</p>
    </div>
  )
  return (
    <div {...rest}>
      <Sheet>
        <SheetTrigger className="group relative">
          <Heart aria-label="favorite list" className="navIcons" />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>Selected shopping Item</SheetTitle>
          {favoriteProduct?.length === 0 ? NoProductComponent : mainComponent}
        </SheetContent>
      </Sheet>
    </div>
  )
}
