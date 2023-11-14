import empty from "$assets/illustration/3D/empty-cart.png"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import { Image } from "$ui"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "$ui/sheet"
import { Heart } from "lucide-react"

type FavoriteListProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const FavoriteList: FC<FavoriteListProps> = ({ ...rest }) => {
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
              <div className="">
                <Image src={empty} alt="empty card" className="mt-32" />
                <p className="mt-10 text-center text-2xl font-bold">No Item Selected</p>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
