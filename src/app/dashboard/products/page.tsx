import { Table, TableBody, TableHead, TableHeader, TableRow } from "$ui"
import { ProductTableItems } from "@/components"
import type { AllProductResponse } from "@/interface"
import { $fetch } from "@/utils"
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { ProductHeading } from "./ProductHeading"

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
          {data?.data?.map((product) => <ProductTableItems product={product} key={product._id} isAllowEdit />)}
        </TableBody>
      </Table>
    </div>
  )
}

export default Products
