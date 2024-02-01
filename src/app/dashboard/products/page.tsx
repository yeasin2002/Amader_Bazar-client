import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "$ui"

import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface ProductsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Products: FC<ProductsProps> = ({ ...rest }) => {
  return (
    <div {...rest} className="w-full">
      product
      <Table className="w-full">
        <TableCaption>A list of all Product.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>img</TableHead>
            <TableHead>name</TableHead>
            <TableHead>category</TableHead>
            <TableHead>price</TableHead>
            <TableHead>quantity</TableHead>
            <TableHead>totalSold</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>product name</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>10</TableCell>
            <TableCell>20</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default Products
