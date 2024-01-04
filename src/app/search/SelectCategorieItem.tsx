import notFoundImg from "$assets/illustration/3D/warning.png"
import { cn } from "$lib/utils"
import { useFilterProduct } from "$store/filteredProducts.store"
import { categoryData } from "$types"
import { buttonVariants } from "$ui/button"
import { Checkbox } from "$ui/checkbox"
import { Label } from "$ui/label"
import { Skeleton } from "$ui/skeleton"
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes, useState } from "react"

interface SelectCategoriesItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categories: categoryData[] | null | undefined
  isLoading: boolean
  isError: boolean
}

export const SelectCategoriesItem: FC<SelectCategoriesItemProps> = ({ categories, isError, isLoading, ...rest }) => {
  const filterStore = useFilterProduct()
  const [isShowFullCategory, setIsShowFullCategory] = useState(false)
  const sowableCategory = categories?.slice(0, isShowFullCategory ? categories?.length : 5)

  const LoadingComponent = (
    <Fragment>
      {Array.from({ length: 5 })?.map((_, index) => {
        return (
          <div className="flex items-center gap-x-2" key={index}>
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-4 w-full" />
          </div>
        )
      })}
    </Fragment>
  )
  const ErrorComponent = (
    <div className="flex flex-col items-center justify-center">
      <img src={notFoundImg} alt="Error" className="w-4/5" />
      <h3>
        Unable to get categories <br /> Please try again later
      </h3>
    </div>
  )
  const MainComponents = (
    <div>
      <div className="  space-y-4 ">
        {sowableCategory?.map((val) => {
          return (
            <Label key={val.name} className="flex   cursor-pointer gap-x-2 font-fresca capitalize">
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
            "mx-0 cursor-pointer font-hedvigLettersSerif"
          )}
          onClick={() => setIsShowFullCategory((val) => !val)}>
          show {!isShowFullCategory ? "more " : "less"}
        </p>
      </div>
    </div>
  )

  return (
    <div {...rest}>
      <div className="product-filter-container">
        <h3 className="product-filter-heading"> Select by category </h3>
        {isError ? ErrorComponent : isLoading ? LoadingComponent : MainComponents}
      </div>
    </div>
  )
}
