"use client"

import { LoadingSpinner } from "@/components"
import { OrderStatus, UpdateOrderResponse } from "@/interface"
import { Button } from "@/ui"
import { $fetch } from "@/utils"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

interface Props extends React.ComponentProps<"div"> {
  id: string
}

export const SingleOrderActions = ({ id, ...rest }: Props) => {
  const router = useRouter()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["update-order"],
    mutationFn: (status: OrderStatus) => {
      return $fetch(`/dashboard/order/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ OrderStatus: status }),
      }) as Promise<UpdateOrderResponse>
    },
  })

  const handleUpdate = async (newStatus: OrderStatus) => {
    const response = await mutateAsync(newStatus)
    if (response.success) {
      toast.success("Order updated successfully")
      const random = Math.random() * 100
      router.push(`/dashboard/order/?refresh=${random}`)
    } else {
      toast.error("Order update failed")
    }
  }

  return (
    <div {...rest} className="my-4 ">
      <h5 className="mb-2 flex items-center gap-x-2 text-lg font-semibold text-gray-800 dark:text-gray-300">
        {isPending ? (
          <div>
            Updating....
            <LoadingSpinner />
          </div>
        ) : (
          "Mark as"
        )}
      </h5>
      <div className="space-x-3">
        <Button variant={"outline"} onClick={() => handleUpdate("Processing")}>
          started Processing
        </Button>
        <Button variant={"sky"} onClick={() => handleUpdate("Completed")}>
          Delivered
        </Button>
        <Button variant={"danger"} onClick={() => handleUpdate("Cancelled")}>
          Canceled
        </Button>
      </div>
    </div>
  )
}
