import empty from "$assets/illustration/3D/empty-cart.png"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import { useFavoriteProductStore } from "$store/favoriteProduct.store"
import { Image } from "$ui"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "$ui/sheet"
import { Heart } from "lucide-react"
import { FavoriteProductItem } from "./favoriteProductItem"

type FavoriteListProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const FavoriteList: FC<FavoriteListProps> = ({ ...rest }) => {
  const { favoriteProduct } = useFavoriteProductStore()

  const mainComponent = (
    <div>
      {favoriteProduct.map((item) => {
        return (
          <FavoriteProductItem
            key={item._id}
            _id={item._id}
            name={item.name}
            img={item.img}
            price={item.price}
            category={item.category}
            discount={item.discount}
            isFeature={item.isFeature}
          />
        )
      })}
    </div>
  )
  const NoProductComponent = (
    <div>
      <Image src={empty} alt="empty card" className="mt-32" />
      <p className="mt-10 text-center text-2xl font-bold">No Item Selected</p>
    </div>
  )
  return (
    <div {...rest}>
      <Sheet>
        <SheetTrigger className="group relative">
          <Heart />
          {/* <span className="NavDrawer" /> */}
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="h-screen w-full ">
            <SheetTitle>Selected shopping Item</SheetTitle>
            <SheetDescription className=" ">
              {favoriteProduct.length === 0 ? NoProductComponent : mainComponent}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
