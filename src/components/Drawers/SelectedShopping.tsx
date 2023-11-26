import empty from "$assets/illustration/3D/empty-cart.png"
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"

import { useSelectedProduct } from "$store/selectedProduct.store"
import { Image } from "$ui"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "$ui/sheet"
import { getImgSrc } from "$utils/getImageSrc"
import { ShoppingCart } from "lucide-react"

type SelectedShoppingProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const SelectedShopping: FC<SelectedShoppingProps> = ({ ...rest }) => {
  const { selectedProduct } = useSelectedProduct()

  const mainComponents = (
    <div className="overflow-y-scroll">
      {selectedProduct.map((item) => {
        const imgUrl = getImgSrc({
          img: item.img,
          imgType: "product-img",
        })

        return (
          <div key={item._id} className="my-7 grid  grid-cols-2">
            <Image
              className="h-20  w-full rounded-t-lg object-cover   md:rounded-none md:rounded-s-lg"
              src={imgUrl}
              alt={item.name}
            />
            <div className="flex flex-1 flex-col justify-between p-2 leading-normal">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{item.name}</h5>
              <p className="mb-3  text-lg font-semibold text-gray-700"> &#2547;{item.price}</p>
            </div>
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
