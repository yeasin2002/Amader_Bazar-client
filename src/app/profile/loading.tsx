import loadingImg from "@/assets/illustration/gif/Loading.gif"
import { exo_2 } from "@/font"
import Image from "next/image"
import React from "react"

const Loading = () => {
  return (
    <div className="flex  h-full max-h-screen w-full flex-col items-center justify-center text-center text-gray-500 dark:text-gray-100">
      <Image src={loadingImg} alt="loading " width={160} height={160} className="size-1/5" />
      <p className={`text-center   text-gray-500 ${exo_2.className}`}>Please wait for sometime</p>
    </div>
  )
}

export default Loading
