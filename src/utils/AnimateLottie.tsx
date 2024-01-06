"use client"

import { cn } from "@/lib"
import Lottie, { LottieComponentProps } from "lottie-react"
import { Fragment } from "react"

interface Props {
  data: unknown
  className?: string
  loop?: boolean
}

export const AnimateLottie = ({ data, className, loop = false, ...rest }: Props) => {
  return (
    <Fragment>
      <Lottie {...rest} animationData={data} className={cn(className)} loop />
    </Fragment>
  )
}
