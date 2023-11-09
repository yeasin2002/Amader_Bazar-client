import { create } from "zustand";
import { combine, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useFilterProduct = create(
  persist(
    immer(
      combine(
        {
          searchValue: "" as string,
          selectedCategory: [] as string[],
          priceRange: 0 as number,
        },
        (set) => ({
          setSelectedCategory: (ct: string) => {
            return set((state) => {
              if (!state.selectedCategory.includes(ct)) {
                state.selectedCategory.push(ct);
              } else {
                state.selectedCategory.filter((category) => {
                  category == ct;
                });
              }
            });
          },
          setPriceRange: (price: number) => {
            return set((state) => {
              state.priceRange = price;
            });
          },
          setSearchValue: (value: string) => {
            set((state) => {
              state.searchValue = value;
            });
          },
          setResetFilter: () => {
            set((state) => {
              state.searchValue = "";
              state.priceRange = 0;
              state.selectedCategory = [];
            });
          },
        })
      )
    ),
    { name: "filteredProducts" }
  )
);
