import { User } from "@/components/icon"
import { cn } from "@/lib"
import React, { DetailedHTMLProps, HTMLAttributes } from "react"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
  icon?: any
  children?: React.ReactNode
  title: string
}

export const DashboardInfoCard = ({ className, icon, children, title, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={cn(
        "flex  size-full items-center gap-x-2 rounded-lg border border-gray-700 p-3 dark:border-gray-300 ",
        "bg-brand-500",
        className
      )}>
      <div className="rounded-full bg-gray-100 p-4">
        <User className="text-gray-900" />
      </div>
      <div>
        <h5>{title}</h5>
        {children}
      </div>
    </div>
  )
}
