import { useSelectedProduct } from "$store"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "$ui"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface ConfirmDisplayProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  totalCost: number
}

export const ConfirmDisplayProduct: FC<ConfirmDisplayProductProps> = ({ totalCost = 0, ...rest }) => {
  const { selectedProduct } = useSelectedProduct()

  return (
    <div {...rest} className="glass-effect">
      <div className=" h-80 overflow-y-auto py-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">Product Name</TableHead>
              <TableHead className="w-full">Quantity</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedProduct?.map((item) => {
              const SelectedQuantity = item?.SelectedQuantity || 1
              const price = item?.price * SelectedQuantity
              return (
                <TableRow key={item._id}>
                  <TableCell> {item.name} </TableCell>
                  <TableCell> {SelectedQuantity} </TableCell>
                  <TableCell>{price.toLocaleString()}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex w-full justify-between  border-t border-gray-800 p-4 align-middle [&:has([role=checkbox])]:pr-0">
        <p>Total</p>
        <p>{totalCost?.toLocaleString()}</p>
      </div>
    </div>
  )
}
