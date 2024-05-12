"use client"

import type { Product } from "@/interface"
import type { DetailedHTMLProps, HTMLAttributes } from "react"
import { EditAndAddProduct } from "./EditAndAddProduct"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProductHeading = ({ ...rest }: Props) => {
  const handleAdd = (latestProduct: Product) => {
    console.log("ADD", latestProduct)
  }
  return (
    <div className="flex items-center justify-between" {...rest}>
      <h1 className="profile-route-title">Products</h1>
      <EditAndAddProduct title="Add Product" onSave={handleAdd} />
    </div>
  )
}
