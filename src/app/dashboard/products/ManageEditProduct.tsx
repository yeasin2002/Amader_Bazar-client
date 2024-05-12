"use client"

import type { Product } from "@/interface"
import type { DetailedHTMLProps, HTMLAttributes } from "react"
import { EditAndAddProduct } from "./EditAndAddProduct"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: Product
}

export const ManageEditProduct = ({ product, ...rest }: Props) => {
  const handleEditSave = (latestProduct: Product) => {
    
  }
  return (
    <div {...rest}>
      <EditAndAddProduct isEditMode defaultProduct={product} onSave={handleEditSave} />
    </div>
  )
}
