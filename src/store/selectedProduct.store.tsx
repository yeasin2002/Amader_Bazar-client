import { Product } from "$types"
import { toast } from "react-hot-toast"
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
              removeProduct: (id: string) => {
                set((state) => {
                  state.selectedProduct = state.selectedProduct.filter((item) => item._id !== id)
                  // toast.warning("Product removed from cart")
                  toast.success("Product removed from cart")
                })
              },
              resetProduct: () => {
                set((state) => {
                  state.selectedProduct = []
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
                    toast.success("Product removed from cart")
                  }
                })
              },
              //
              increaseQuantity: (id: string) => {
                set((store) => {
                  const check = store.selectedProduct.filter((item) => item._id === id)[0]
                  if (check) {
                    if (!check.SelectedQuantity) return
                    check.SelectedQuantity = check?.SelectedQuantity + 1
                  }
                })
              },
              decreaseQuantity: (id: string) => {
                set((store) => {
                  const check = store.selectedProduct.filter((item) => item._id === id)[0]
                  if (check) {
                    if (!check.SelectedQuantity) return
                    check.SelectedQuantity = check?.SelectedQuantity - 1
                  }
                })
              },

              updateQuantity: (id: string, quantity: number) => {
                set((store) => {
                  const check = store.selectedProduct.filter((item) => item._id === id)[0]
                  if (check) {
                    check.SelectedQuantity = quantity
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
