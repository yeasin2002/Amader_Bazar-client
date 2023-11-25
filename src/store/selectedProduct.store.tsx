import { Product } from "$types"
import { toast } from "sonner"
import { create } from "zustand"
import { combine, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

interface SelectedProducts extends Product {
  SelectedQuantity?: number
}

export const useSelectedProduct = create(
  persist(
    immer(
      combine(
        {
          selectedProduct: [] as SelectedProducts[],
        },
        (set) => {
          {
            return {
              addSelectedProduct: (product: SelectedProducts) => {
                set((state) => {
                  state.selectedProduct.push(product)
                  toast.success("Product added to cart")
                })
              },
              removeProduct: (product: SelectedProducts) => {
                set((state) => {
                  state.selectedProduct = state.selectedProduct.filter((item) => item._id !== product._id)
                  toast.warning("Product removed from cart")
                })
              },

              toggleSelectedProduct: (product: SelectedProducts) => {
                set((store) => {
                  const check = store.selectedProduct.filter((item) => item._id === product._id)[0]

                  if (check) {
                    store.selectedProduct = store.selectedProduct.filter((item) => item._id !== product._id)
                    toast.success("Product added to cart")
                  } else {
                    store.selectedProduct.push(product)
                    toast.warning("Product removed from cart")
                  }
                })
              },
            }
          }
        }
      )
    ),
    { name: "SelectedProduct" }
  )
)
