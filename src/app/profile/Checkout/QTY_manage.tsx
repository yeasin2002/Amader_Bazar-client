import type { Product } from "@/interface"
import { cn } from "@/lib"
import { useSelectedProduct } from "@/store"
import { Minus, Plus } from "lucide-react"
import type React from "react"

interface SelectedProducts extends Product {
  SelectedQuantity?: number
}

interface Props extends React.ComponentProps<"div"> {
  itemsId: string
  item: SelectedProducts
  className?: string
}

export const QTY_manage = ({ itemsId, item, className, ...rest }: Props) => {
  const { increaseQuantity, decreaseQuantity, updateQuantity } = useSelectedProduct()

  return (
    <>
      <div className={cn("flex items-center gap-x-3", className)} {...rest}>
        <button
          className="profile-product-action-btn"
          type="button"
          id={"increaseQuantity"}
          onClick={() => increaseQuantity(itemsId)}>
          <Plus />
        </button>
        <div>
          <input
            type="number"
            id={itemsId + "Update Quantity"}
            value={item.SelectedQuantity}
            onChange={(e) => {
              updateQuantity(itemsId, e.target.valueAsNumber)
            }}
            className="profile-product-quantity-input "
          />
        </div>
        <button
          className="profile-product-action-btn"
          type="button"
          id={"decreaseQuantity"}
          onClick={() => decreaseQuantity(itemsId)}>
          <Minus />
        </button>
      </div>
    </>
  )
}
