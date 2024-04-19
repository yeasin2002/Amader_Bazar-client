"use client"

import { Button } from "@/ui"
import { revalidatePath } from "next/cache"

export const Refetch = ({ ...rest }) => {
  return (
    <Button
      {...rest}
      onClick={() => {
        revalidatePath("/dashboard/users")
        console.log("Revalidating")
      }}>
      Refetch
    </Button>
  )
}
