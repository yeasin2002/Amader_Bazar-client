import { cn } from "$lib/utils"
import { ChevronLeft } from "lucide-react"
import type { DetailedHTMLProps, FC } from "react"


interface indexProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string
  iconClassName?: string
  color?: string
}
export const Back: FC<indexProps> = ({ className = "", iconClassName = "", color = "white", ...rest }) => {
  return (
    <button
      {...rest}
      // onClick={() => navigate(-1)}
      className={cn("absolute left-3 top-2 inline-block rounded-full bg-blue-800 md:p-2 2xl:p-4", className)}>
      <ChevronLeft color={color} className={cn(iconClassName)} />
    </button>
  )
}
