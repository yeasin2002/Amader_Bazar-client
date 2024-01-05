"use client"

import maintenance from "$assets/illustration/lottiy/website-maintenance.json"
import Lottie from "lottie-react"

const Setting = () => {
  return (
    <div className="grid w-full place-items-center ">
      <Lottie animationData={maintenance} loop autoplay className="h-96 w-full" />
      <h1 className="heading-4 text-center font-jost ">This page is under Development</h1>
    </div>
  )
}

export default Setting
