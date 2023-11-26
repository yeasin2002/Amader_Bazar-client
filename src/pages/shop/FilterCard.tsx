import { cn } from "$lib/utils"
import { useFilterProduct } from "$store"
import { categoryData } from "$types"
import { Button, Slider, buttonVariants } from "$ui"

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
        <div className="flex justify-between">
          <p className="text-base font-semibold">1K</p>
          <p className="text-base font-semibold">10K</p>
        </div>
        <Slider
          min={0}
          max={10000}
          value={[filterStore.priceRange]}
          onValueChange={(value) => {
            filterStore.setPriceRange(value[0])
          }}
          className="cursor-pointer"
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
