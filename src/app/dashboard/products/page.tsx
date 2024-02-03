import Image from "next/image"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "$ui"
import { FullStar } from "@/components"
import { AllProductResponse } from "@/interface"
import { cn } from "@/lib"
import { $fetch, calculateDiscount, getImgSrc } from "@/utils"
import { EditAndAddProduct } from "./EditAndAddProduct"
import { ManageEditProduct } from "./ManageEditProduct"
import { ProductHeading } from "./ProductHeading"
import { ProductsDetailsForAdmin } from "./ProductsDetailsForAdmin"

interface ProductsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Products: FC<ProductsProps> = async ({ ...rest }) => {
  const data = (await $fetch("/dashboard/product", {
    next: { revalidate: 60 * 60 },
  })) as AllProductResponse

  return (
    <div {...rest} className="w-full p-1 sm:p-2">
      <ProductHeading />

      <Table className="w-full">
        <TableHeader>
          <TableRow className="rounded-lg bg-gray-100 text-sm font-semibold uppercase text-gray-600 dark:bg-gray-800 dark:text-gray-500">
            <TableHead>img</TableHead>
            <TableHead>name</TableHead>
            <TableHead>price</TableHead>
            <TableHead className="text-center">
              quantity
              <br />&<br />
              totalSold
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((product) => {
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
                <TableCell>
                  {product.quantity}
                  <br />
                  {product.totalSold}
                </TableCell>
                <TableCell className=" space-y-2">
                  <ProductsDetailsForAdmin product={product} />
                  <ManageEditProduct product={product} />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default Products
