import { create } from "zustand"
import { combine, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

export const useFilterProduct = create(
  persist(
    immer(
      combine(
        {
          searchValue: "" as string,
          selectedCategory: [] as string[],
          priceRange: 0 as number,
          minPrice: 0 as number,
          maxPrice: 100000 as number,
        },
        (set) => ({
          setSelectedCategory: (ct: string) => {
            return set((state) => {
              if (!state.selectedCategory.includes(ct)) {
                state.selectedCategory.push(ct)
              } else {
                const theIndex = state.selectedCategory.findIndex((index) => ct === index)
                theIndex != -1 && state.selectedCategory.splice(theIndex, theIndex + 1)
              }
            })
          },

          setSearchValue: (value: string) => {
            set((state) => {
              state.searchValue = value
            })
          },
          setResetFilter: () => {
            set((state) => {
              state.searchValue = ""
              state.selectedCategory = []
              state.minPrice = 0
              state.maxPrice = 100000
            })
          },
          setMinPrice: (price: number) => {
            set((state) => {
              state.minPrice = price
            })
          },
          setMaxPrice: (price: number) => {
            set((state) => {
              state.maxPrice = price
            })
          },
        })
      )
    ),
    { name: "filteredProducts" }
  )
)
