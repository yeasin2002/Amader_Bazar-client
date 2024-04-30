import { Button, TableCell, TableRow } from "$ui"
import type { Product } from "@/interface"

import { ManageEditProduct } from "@/app/dashboard/products/ManageEditProduct"
import { FullStar } from "@/components"
import { cn } from "@/lib"
import { calculateDiscount, getImgSrc } from "@/utils"
import Image from "next/image"

interface Props {
  product: Product
  isAllowEdit?: boolean
}

export const ProductTableItems = ({ product, isAllowEdit = false }: Props) => {
  const imgSrc = getImgSrc({
    img: product?.img,
    imgType: "product-img",
  })
  const currentPrice = calculateDiscount(product.price, product.discount)

  return (
    <TableRow key={product._id}>
      <TableCell>
        <Image
          src={imgSrc}
          alt="Product"
          width={200}
          height={200}
          className="aspect-auto size-20  rounded-lg object-cover"
        />
      </TableCell>
      <TableCell>
        <p className="flex items-center">
          {product?.name}
          {product?.isFeature && (
            <span className="-translate-y-2">
              <FullStar className="size-2" />
            </span>
          )}
        </p>
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          {product?.category}
        </p>
      </TableCell>

      <TableCell>
        <p>
          <span className={cn({ "line-through": product.discount !== 0 })}>{product.price}</span>
          <sup className={cn("mx-1", { hidden: product.discount === 0 })}>{product.discount}%</sup>
        </p>
        <span className={cn({ hidden: product.discount === 0 })}>{currentPrice}</span>
      </TableCell>
      <TableCell
        className={cn({
          "text-end": !isAllowEdit,
        })}>
        {product.quantity}
        <br />
        {product.totalSold}
      </TableCell>
      {isAllowEdit && (
        <TableCell className=" space-y-2">
          {/* <ProductsDetailsForAdmin product={product} /> */}
          <Button className="bg-red-500 text-gray-100 hover:bg-red-600">Delete </Button>
          <ManageEditProduct product={product} />
        </TableCell>
      )}
    </TableRow>
  )
}
