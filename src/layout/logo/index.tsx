import logo from "$assets/cover/logo.png"
import { cn } from "@/lib"
import Image from "next/image"

type logProps = {
  className?: string
}

export const Logo = ({ className }: logProps) => {
  return (
    <Image src={logo.src} alt="logo" width={256} height={288} className={cn("aspect-auto h-auto w-24", className)} />
  )
}
