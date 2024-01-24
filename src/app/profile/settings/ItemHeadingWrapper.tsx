"use client"

import { exo_2 } from "@/font"
import { cn } from "@/lib"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/ui"

interface Props {
  children: React.ReactNode
  title: string
}

export const ItemHeadingWrapper = ({ children, title, ...rest }: Props) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn("w-full cursor-pointer rounded-md p-4 text-left shadow-md hover:bg-gray-200", exo_2.className)}
        {...rest}>
        {title}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Avatar</DialogTitle>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
