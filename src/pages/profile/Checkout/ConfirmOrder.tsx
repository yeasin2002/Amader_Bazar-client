import { useMutation } from "@tanstack/react-query"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { useForm } from "react-hook-form"

import { InputCombo, LoadingSpinner } from "$components"
import { $POST } from "$hooks"
import { useSelectedProduct } from "$store"
import { orderResponse } from "$types"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTitle, AlertDialogTrigger, Button } from "$ui"
import { toast } from "sonner"
import { CheckoutSuccess } from "./CheckoutSuccess"
import { ConfirmDisplayProduct } from "./ConfirmDisplayProduct"

interface ConfirmOrderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
interface OrderRequestBody {
  address: string
  phone: string
  TotalAmount: number
  product: {
    Product: string
    Quantity: number | undefined
  }[]
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
  const { register, handleSubmit } = useForm<confirmOrderForm>()
  const { selectedProduct, resetProduct } = useSelectedProduct()

  const totalCost = selectedProduct?.reduce((pre, cur) => {
    const SelectedQuantity = cur.SelectedQuantity || 1
    return cur.price * SelectedQuantity + pre
  }, 0)

  const finalProduct = selectedProduct.map((item) => ({
    Product: item._id,
    Quantity: item.SelectedQuantity || 1,
  }))

  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationKey: ["order"],
    mutationFn: (body: OrderRequestBody) => $POST({ url: "/order", body }) as Promise<orderResponse>,
  })
  console.log("🚀 ~ file: ConfirmOrder.tsx:54 ~ isSuccess:", isSuccess)

  const onSubmit = async (data: confirmOrderForm) => {
    try {
      const confirmOrder = await mutateAsync({
        address: data.address,
        phone: data.phone,
        TotalAmount: totalCost,
        product: finalProduct,
      })

      if (confirmOrder.success) {
        resetProduct()
        toast.success("Purchased Successfully")
      }
    } catch (error: unknown) {
      toast.error("Something went wrong")
      if (error instanceof Error) console.log(error.message)
    }
  }

  return (
    <div {...rest}>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Confirm Order</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle> Checkout </AlertDialogTitle>
          {!isSuccess ? (
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <InputCombo register={register("address")} label="Address" placeholder="exact address" />
                <InputCombo
                  register={register("phone")}
                  label="Contact number"
                  placeholder="current active phone number"
                />
              </div>

              <ConfirmDisplayProduct totalCost={totalCost} />
              <div className="flex justify-end gap-x-2">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button type="submit">{isPending ? <LoadingSpinner /> : <span>Checkout</span>}</Button>
              </div>
            </form>
          ) : (
            <CheckoutSuccess />
          )}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
