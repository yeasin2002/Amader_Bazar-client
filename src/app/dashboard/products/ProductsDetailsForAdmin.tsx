import { FullStar } from "@/components"
import { Product } from "@/interface"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger, Button } from "@/ui"
import { calculateDiscount, getImgSrc } from "@/utils"
import { X } from "lucide-react"
import Image from "next/image"
import { DetailedHTMLProps, HTMLAttributes } from "react"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: Product
}

export const ProductsDetailsForAdmin = ({ product, ...rest }: Props) => {
  const imgSrc = getImgSrc({
    img: product?.img,
    imgType: "product-img",
  })

  const currentPrice = calculateDiscount(product.price, product.discount)
  return (
    <div {...rest}>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Details</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <div className="flex items-center justify-end">
            <AlertDialogCancel className="p-2">
              <X />
            </AlertDialogCancel>
          </div>

          <div className="flex flex-col items-center gap-x-5 gap-y-3 md:flex-row">
            <Image src={imgSrc} width={500} height={500} alt="Product" className="aspect-auto size-36 rounded-lg " />
            <div>
              <p className="flex items-center   gap-x-1 font-kurale text-xl   font-bold">
                {product.name}

                {product.isFeature && (
                  <span className="-translate-y-2">
                    <FullStar />
                  </span>
                )}
              </p>
              <p className="font-exo2 text-xl font-semibold  text-gray-900 dark:text-gray-500 ">{product.category}</p>
            </div>
          </div>
          {product.desc && (
            <div>
              <p className="dashboard-popover-heading">Description</p>
              <p className="text-lg font-normal text-gray-900 dark:text-gray-500">{product.desc}</p>
            </div>
          )}

          <div>
            <h5 className="dashboard-popover-heading"> Product Info</h5>
            <p className="dashboard-popover-items">
              Price: {product.price}
              {product.discount > 0 && (
                <>
                  - {product.discount}% = {currentPrice}
                </>
              )}
            </p>
            <p className="dashboard-popover-items">Quantity: {product.quantity}</p>
            <p className="dashboard-popover-items">TotalSold: {product.totalSold}</p>
          </div>


          <div>
            <h5 className="dashboard-popover-heading">Actions</h5>
            <Button className="bg-red-500 text-gray-100 hover:bg-red-600">Delete Product </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
