import { CategoriesResponse } from "@/interface"
import { $fetch } from "@/utils"
import { ShowCategories } from "./ShowCategories"

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}



export const CategoryArea = async ({ ...rest }: Props) => {
  const data = (await $fetch("/category", { next: { revalidate: 86400000 } })) as CategoriesResponse
  return <ShowCategories categoryData={data?.data} {...rest} />
}
