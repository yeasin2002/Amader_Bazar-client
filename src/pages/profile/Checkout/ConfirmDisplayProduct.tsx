import { useSelectedProduct } from "$store"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "$ui"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface ConfirmDisplayProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ConfirmDisplayProduct: FC<ConfirmDisplayProductProps> = ({ ...rest }) => {
  const { selectedProduct } = useSelectedProduct()
  return (
    <div className="glass-effect py-4" {...rest}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-full">Product Name</TableHead>
            <TableHead className="w-full">Quantity</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {selectedProduct.map((item) => {
            const SelectedQuantity = item?.SelectedQuantity || 1

            console.table({
              price: item.price,
              SelectedQuantity,
              total: item.price * SelectedQuantity,
            })

            return (
              <TableRow>
                <TableCell> {item.name} </TableCell>
                <TableCell> {SelectedQuantity} </TableCell>
                <TableCell>{item?.price}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <div className="mt-4 flex w-full justify-between  border-t border-gray-800 p-4 align-middle [&:has([role=checkbox])]:pr-0">
        <p>Total</p>
        <p>100</p>
      </div>
    </div>
  )
}
