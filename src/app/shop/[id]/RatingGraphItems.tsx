import React from "react"

interface Props extends React.ComponentProps<"div"> {
  totalRage: number | undefined
  level: number
  sum: number
}

export const RatingGraphItems = ({ totalRage, level, sum, ...rest }: Props) => {
  let bgFill = (totalRage || 0 / sum || 0) * 100
  if (bgFill > 100) bgFill = 100

  return (
    <div className="mt-4 flex items-center" {...rest}>
      <p className="text-sm font-medium text-blue-600 hover:underline ">{level} star</p>
      <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 ">
        <div className={`h-5  rounded bg-brand-900`} style={{ width: `${bgFill}%` }} />
      </div>
      <span className="text-sm font-medium text-gray-500 ">{totalRage}</span>
    </div>
  )
}
