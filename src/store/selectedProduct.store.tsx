import { Product } from "$types";
import { create } from "zustand";
import { combine, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useSelectedProduct = create(
  persist(
    immer(
      combine(
        {
          selectedProduct: [] as Product[],
        },
        (set) => {
          {
            return {
              addFavoriteProduct: (product: Product) => {
                set((state) => {
                  state.selectedProduct.push(product);
                });
              },
            };
          }
        }
      )
    ),
    { name: "favoriteProduct" }
  )
);
