import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Fragment } from "react"
import { toast } from "react-hot-toast"

import empty from "@/assets/illustration/3D/empty-cart.png"
import { useAuth } from "@/hooks"
import { useSelectedProduct } from "@/store"
import { Button, Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/ui"
import { getImgSrc } from "@/utils/getImageSrc"
import { FavoriteAndSelectedItem } from "./FavAndSelectedProduct"

type SelectedShoppingProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const SelectedShopping: FC<SelectedShoppingProps> = ({ ...rest }) => {
  const { isLoggedIn } = useAuth()
  const { selectedProduct } = useSelectedProduct()
  const navigate = useRouter()

  const mainComponents = (
    <div className="h-full space-y-3 overflow-y-scroll">
      {selectedProduct?.map((item) => {
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
          <ShoppingCart aria-label="shopping cart" className="navIcons" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="h-full w-full ">
            <SheetTitle>Selected shopping Item</SheetTitle>
            {selectedProduct?.length === 0 ? emptyCartComponent : mainComponents}
          </SheetHeader>

          <SheetFooter>
            <Button
              aria-label="checkout"
              className="w-full -translate-y-7"
              onClick={() => {
                if (!isLoggedIn)
                  return toast.error("Please Log in first to Checkout", {
                    position: "top-left",
                  })
                navigate.push("/profile/checkout")
              }}>
              Checkout
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
