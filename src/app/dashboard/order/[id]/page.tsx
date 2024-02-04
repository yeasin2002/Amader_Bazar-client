import { SingleOrdersResponse } from "@/interface"
import { $fetch } from "@/utils"
import { DetailedHTMLProps, HTMLAttributes } from "react"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  params: { id: string }
}

const OrderDetails = async ({ params, ...rest }: Props) => {
  const data = (await $fetch(`/dashboard/order/${params.id}`)) as SingleOrdersResponse

  return <div {...rest}>Dynamic Order Page</div>
}

export default OrderDetails
