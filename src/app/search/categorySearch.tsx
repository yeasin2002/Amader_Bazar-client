"use client"

import { SearchInput } from "@/components/forms/SearchInput"
import { useFilterProduct } from "@/store"
import { Fragment } from "react"

export const CategorySearch = () => {
  const { searchValue, setSearchValue } = useFilterProduct()
  return (
    <Fragment>
      <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
    </Fragment>
  )
}
