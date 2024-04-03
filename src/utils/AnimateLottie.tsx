"use client"

import { cn } from "@/lib"
import { Fragment } from "react"
import Lottie, { LottieProps } from "react-lottie-player"

interface Props {
  data: object | { default: object } | undefined
  className?: string
  loop?: boolean
  autoplay?: boolean
  [key: string]: any
}

export const AnimateLottie = ({ data, className, loop = true, autoplay = true, ...rest }: Props) => {
  return (
    <Fragment>
      {typeof window !== "undefined" && (
        <Lottie {...rest} animationData={data} className={cn(className)} loop={loop} play={autoplay} />
      )}
    </Fragment>
  )
}
