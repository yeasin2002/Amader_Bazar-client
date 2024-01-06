import { CategoriesResponse } from "@/interface"
import { $fetch } from "@/utils"
import { DetailedHTMLProps, Fragment, HTMLAttributes } from "react"
import { ShowCategoryItems } from "./ShowCategoryItems"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CategoryArea = async ({ ...rest }: Props) => {
  const data = (await $fetch("/category", { next: { revalidate: 86400000 } })) as CategoriesResponse

  return (
    <Fragment>
      <ShowCategoryItems categoryData={data.data} {...rest} />
    </Fragment>
  )
}
