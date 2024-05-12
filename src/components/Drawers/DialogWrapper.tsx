"use client"

import { cn } from "@/lib"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/ui"

interface Props {
  children: React.ReactNode
  title: string
  className?: string
}

export const DialogWrapper = ({ children, title, className, ...rest }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className={cn(className)} {...rest}>
        {title}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
