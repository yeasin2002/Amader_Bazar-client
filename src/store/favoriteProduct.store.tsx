"use client"

import type { Product } from "@/interface"
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
          return {
            addFavoriteProduct: (product: Product) => {
              set((state) => {
                state.favoriteProduct.push(product)
              })
            },
            removeFavoriteProduct: (id: string) => {
              set((state) => {
                state.favoriteProduct = state.favoriteProduct.filter((item) => item._id !== id)
              })
            },
            toggleFavoriteProduct: (product: Product) => {
              set((state) => {
                const isFavorite = state.favoriteProduct.filter((item) => item._id === product._id)[0]
                if (isFavorite) {
                  state.favoriteProduct = state.favoriteProduct.filter((item) => item._id !== product._id)
                } else {
                  state.favoriteProduct.push(product)
                }
              })
            },

            //
            increaseQuantity: (product: Product) => {
              set((state) => {
                const findProduct = state.favoriteProduct.filter((item) => item._id === product._id)[0]
                if (findProduct) {
                  findProduct.quantity += 1
                }
              })
            },
            decreaseQuantity: (product: Product) => {
              set((state) => {
                const findProduct = state.favoriteProduct.filter((item) => item._id === product._id)[0]
                if (findProduct) {
                  findProduct.quantity -= 1
                }
              })
            },

            updateQuantity: (_id: string, quantity: number) => {
              set((state) => {
                if (quantity < 0) return
                const findProduct = state.favoriteProduct.filter((item) => item._id === _id)[0]
                if (findProduct) {
                  findProduct.quantity = quantity
                }
              })
            },
          }
        }
      )
    ),
    { name: "favoriteProduct" }
  )
)
