import { create } from "zustand"
import { combine, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

interface SelectedProducts {
  _id: string
  title: string
  price: number
  img: string
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
                  const foundTheProduct = state.selectedProduct.filter((item) => item._id === product._id)
                  if (foundTheProduct.length === 0) {
                    state.selectedProduct.push({
                      ...product,
                      SelectedQuantity: 1,
                    })
                  } else {
                    // state.selectedProduct = state.selectedProduct.filter((item) => item._id !== product._id)
                    if (foundTheProduct[0].SelectedQuantity) {
                      foundTheProduct[0].SelectedQuantity += 1
                    }
                  }
                })
              },
              emptySelectedProduct: () => {
                set((state) => {
                  state.selectedProduct = []
                })
              },

              removeSelectedProduct: (product: SelectedProducts) => {
                set((state) => {
                  state.selectedProduct = state.selectedProduct.filter((item) => item._id !== product._id)
                })
              },
            }
          }
        }
      )
    ),
    { name: "favoriteProduct" }
  )
)
