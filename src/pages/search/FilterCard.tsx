import { cn } from "$lib/utils"
import { useFilterProduct } from "$store"
import { categoryData } from "$types"
import { Button, buttonVariants } from "$ui"

import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"
import { SelectCategoriesItem } from "./SelectCategorieItem"
interface FilterCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string
  categories: categoryData[] | null | undefined
  isLoading: boolean
  isError: boolean
}

export const FilterCard: FC<FilterCardProps> = ({ className, categories, isLoading, isError, ...rest }) => {
  const filterStore = useFilterProduct()

  return (
    <aside {...rest} className={cn("sticky top-2 h-full space-y-10 rounded-r-lg bg-brand-200 px-4 py-4", className)}>
      {filterStore.selectedCategory?.length > 0 && (
        <Fragment>
          <div className="product-filter-container">
            <h3 className="product-filter-heading"> Selected Category </h3>

            <div className="flex flex-wrap gap-2">
              {filterStore.selectedCategory?.map((val) => {
                return (
                  <p
                    key={val}
                    className={cn(
                      buttonVariants({
                        variant: "default",
                      }),
                      "cursor-pointer"
                    )}>
                    {val}
                  </p>
                )
              })}
            </div>
          </div>
        </Fragment>
      )}
      <SelectCategoriesItem categories={categories} isLoading={isLoading} isError={isError} />

      <div className="product-filter-container">
        <h3 className="product-filter-heading">
          Price Range - <span>{filterStore.priceRange}</span>
        </h3>

        <input
          id="large-range"
          type="range"
          value={filterStore.minPrice}
          onChange={(e) => {
            filterStore.setMinPrice(parseInt(e.target.value))
            // filterStore.setPriceRange(parseInt(e.target.value))
          }}
          className="range-slider"
        />

        <input
          key={"maxPrice"}
          value={filterStore.maxPrice}
          onChange={(e) => {
            filterStore.setMaxPrice(e.target.valueAsNumber)
          }}
          id="large-range"
          type="range"
          className="range-slider"
        />
      </div>
      <div className="flex w-full justify-end">
        <Button
          variant={"dark"}
          className=" "
          onClick={() => {
            filterStore.setResetFilter()
          }}>
          Rest Filters
        </Button>
      </div>
    </aside>
  )
}
