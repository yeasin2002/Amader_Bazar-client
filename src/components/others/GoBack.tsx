"use client"

import { cn } from "@/lib"
import { useRouter } from "next/navigation"
interface Props extends React.ComponentProps<"button"> {}

export const GoBack = (props: Props) => {
  const router = useRouter()
  return (
    <button type="button" onClick={() => router.back()} className={cn(props.className)} {...props}>
      {props.children || "Go back"}
    </button>
  )
}
