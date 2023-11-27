import empty from "$assets/illustration/3D/empty-cart.png"
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"

import { useSelectedProduct } from "$store/selectedProduct.store"
import { Image } from "$ui"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "$ui/sheet"
import { getImgSrc } from "$utils/getImageSrc"
import { ShoppingCart } from "lucide-react"
import { FavoriteAndSelectedItem } from "./FavAndSelectedProduct"

type SelectedShoppingProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const SelectedShopping: FC<SelectedShoppingProps> = ({ ...rest }) => {
  const { selectedProduct } = useSelectedProduct()

  const mainComponents = (
    <div className="h-full space-y-3 overflow-y-scroll">
      {selectedProduct.map((item) => {
        const imgUrl = getImgSrc({
          img: item.img,
          imgType: "product-img",
        })

        return (
          <div key={item._id}>
            <FavoriteAndSelectedItem
              _id={item._id}
              name={item.name}
              imgUrl={imgUrl}
              category={item.category}
              price={item.price}
            />
          </div>
        )
      })}
    </div>
  )
  const emptyCartComponent = (
    <Fragment>
      <div>
        <Image src={empty} alt="empty card" className="mt-32" />
        <p className="mt-10 text-center text-2xl font-bold">No Item Selected </p>
      </div>
    </Fragment>
  )

  return (
    <div {...rest}>
      <Sheet>
        <SheetTrigger>
          <ShoppingCart />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="h-full w-full ">
            <SheetTitle>Selected shopping Item</SheetTitle>
            {selectedProduct.length === 0 ? emptyCartComponent : mainComponents}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
