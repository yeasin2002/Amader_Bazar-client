import { Product } from "$types"
import { create } from "zustand"
import { combine, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

export const useFavoriteProductStore = create(
  persist(
    immer(
      combine(
        {
          favoriteProduct: [] as Product[],
        },
        (set) => {
          {
            return {
              addFavoriteProduct: (product: Product) => {
                set((state) => {
                  state.favoriteProduct.push(product)
                })
              },
              removeFavoriteProduct: (product: Product) => {
                set((state) => {
                  state.favoriteProduct = state.favoriteProduct.filter((item) => item._id !== product._id)
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
