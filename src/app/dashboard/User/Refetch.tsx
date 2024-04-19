"use client"

import { Button } from "@/ui"
import { revalidatePath } from "next/cache"

type Props = {}

export const Refetch = ({ ...rest }: Props) => {
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
