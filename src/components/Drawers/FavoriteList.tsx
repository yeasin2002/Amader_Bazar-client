import { Heart } from "lucide-react"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import empty from "$assets/illustration/3D/empty-cart.png"
import { useFavoriteProductStore } from "$store"
import { Button, Image, Sheet, SheetContent, SheetFooter, SheetTitle, SheetTrigger } from "$ui"

import { getImgSrc } from "$utils/getImageSrc"
import { FavoriteAndSelectedItem } from "./FavAndSelectedProduct"

type FavoriteListProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export const FavoriteList: FC<FavoriteListProps> = ({ ...rest }) => {
  const { favoriteProduct } = useFavoriteProductStore()

  const mainComponent = (
    <div className="h-full space-y-3 overflow-y-scroll ">
      {favoriteProduct.map((item) => {
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
      <Image src={empty} alt="empty card" className="mt-32" />
      <p className="mt-10 text-center text-2xl font-bold">No Item Selected</p>
    </div>
  )
  return (
    <div {...rest}>
      <Sheet>
        <SheetTrigger className="group relative">
          <Heart />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>Selected shopping Item</SheetTitle>
          {favoriteProduct.length === 0 ? NoProductComponent : mainComponent}

          <SheetFooter>
            <Button className="w-full -translate-y-14">Checkout</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
