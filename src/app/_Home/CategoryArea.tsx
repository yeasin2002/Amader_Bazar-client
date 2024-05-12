/* eslint-disable no-undef */
import type { CategoriesResponse } from "@/interface"
import { $fetch } from "@/utils"
import { ShowCategories } from "./ShowCategories"

interface Props extends React.ComponentPropsWithRef<"div"> {}

export const CategoryArea = async ({ ...rest }: Props) => {
  const data = (await $fetch("/category", {
    next: { tags: ["category"] },
  })) as CategoriesResponse

  return <ShowCategories categoryData={data?.data} {...rest} />
}
