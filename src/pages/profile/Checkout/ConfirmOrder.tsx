import { useMutation } from "@tanstack/react-query"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { useForm } from "react-hook-form"

import { InputCombo } from "$components"
import { $POST } from "$hooks"
import { useSelectedProduct } from "$store"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "$ui"
import { ConfirmDisplayProduct } from "./ConfirmDisplayProduct"

interface ConfirmOrderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
interface OrderRequestBody {
  paymentMethod?: "cash" | "card"
  address: string
  phone: string
  TotalAmount: number // total tk
  product: [
    {
      productId: string
      quantity: number
    },
  ]
  userInfo: UserInfo
}
export interface UserInfo {
  id: string
  name: string
  email: string
  number?: string
}

interface confirmOrderForm {
  address: string
  phone: string
}

export const ConfirmOrder: FC<ConfirmOrderProps> = ({ ...rest }) => {
  const { register } = useForm<confirmOrderForm>()
  const { selectedProduct } = useSelectedProduct()
  const { data } = useMutation({
    mutationKey: ["order"],
    mutationFn: (body: OrderRequestBody) =>
      $POST({
        url: "/order",
        body,
      }),
  })
  const totalCost = selectedProduct?.reduce((pre, cur) => {
    const SelectedQuantity = cur.SelectedQuantity || 1

    return cur.price * SelectedQuantity + pre
  }, 0)
  return (
    <div {...rest}>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Confirm Order</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Confirm Checkout </AlertDialogTitle>

          <form className="space-y-3">
            <div className="space-y-4">
              <InputCombo register={register("address")} label="Address" placeholder="address" />
              <InputCombo register={register("phone")} label="Contact number" placeholder="contact number" />
            </div>
            <ConfirmDisplayProduct totalCost={totalCost} />
            <div className="flex justify-end gap-x-2">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </div>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
