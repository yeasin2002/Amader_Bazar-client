"use client"

import { cn } from "@/lib"
import { useRouter } from "next/navigation"
import React from "react"

type RedirectProps = {
  children: React.ReactNode
  link: string
  className?: string
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Redirect = ({ link, children, className, ...rest }: RedirectProps) => {
  const router = useRouter()
  return (
    <button onClick={() => router.push(link)} className={cn(className)} {...rest}>
      {children}
    </button>
  )
}
