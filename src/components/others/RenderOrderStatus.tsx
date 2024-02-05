import { OrderStatus } from "@/interface"
import { cn } from "@/lib"

interface Props extends React.ComponentProps<"span"> {
  status: OrderStatus
}

export const RenderOrderStatus = ({ status, ...rest }: Props) => {
  return (
    <span
      {...rest}
      className={cn("text-sm font-semibold", {
        "text-yellow-600 dark:text-brand-500": status === "Pending",
        "text-blue-600  ": status === "Processing",
        "text-teal-500": status === "Completed",
        "text-rose-600": status === "Cancelled",
      })}>
      {status}
    </span>
  )
}
