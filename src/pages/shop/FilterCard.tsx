import { category } from "$data"
import { cn } from "$lib/utils"
import { useFilterProduct } from "$store"
import { Button, Checkbox, Label, Slider, buttonVariants } from "$ui"

import { DetailedHTMLProps, FC, Fragment, HTMLAttributes, useState } from "react"
interface FilterCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string
}

export const FilterCard: FC<FilterCardProps> = ({ className, ...rest }) => {
  const [isShowFullCategory, setIsShowFullCategory] = useState(false)
  const filterStore = useFilterProduct()

  const sowableCategory = category.slice(0, isShowFullCategory ? 10 : 5)

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
      <div className="product-filter-container">
        <h3 className="product-filter-heading"> Select by category </h3>
        <div className="  space-y-4 ">
          {sowableCategory.map((val) => {
            return (
              <Label key={val.name} className="flex   cursor-pointer gap-x-2 capitalize">
                <Checkbox
                  checked={filterStore.selectedCategory.includes(val.name)}
                  onClick={() => {
                    filterStore.setSelectedCategory(val.name)
                  }}
                />
                <p>{val.name}</p>
              </Label>
            )
          })}

          <p
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "mx-0 cursor-pointer"
            )}
            onClick={() => setIsShowFullCategory((val) => !val)}>
            show {!isShowFullCategory ? "more " : "less"}
          </p>
        </div>
      </div>

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
