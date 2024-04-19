import type { LucideIcon } from "lucide-react"
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface DetailsCardWithIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  Icon: LucideIcon
  title: string
  value: string
  timing: string
}

export const DetailsCardWithIcon: FC<DetailsCardWithIconProps> = ({ Icon, timing, title, value, ...rest }) => {
  return (
    <div
      className=" flex h-full w-full items-center justify-between gap-x-5 rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 "
      {...rest}>
      <div className="rounded-full    bg-gray-500 p-2">
        <Icon />
      </div>
      <div className="flex-1">
        <h5 className=" text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
        <p className="text-lg font-normal text-gray-700 ">
          {value}
          <span className="text-xs   "> {timing}</span>
        </p>
      </div>
    </div>
  )
}
