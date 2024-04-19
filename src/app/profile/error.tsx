"use client"

import errorImg from "@/assets/illustration/gif/warning.gif"
import { isWindowAvailable } from "@/utils"
import Image from "next/image"
import React from "react"

const error = () => {
  return (
    <div className="flex h-full w-full flex-col place-items-center ">
      <Image src={errorImg} width={200} height={200} alt="error" className="size-1/2" />
      <p className="text-center  font-exo2 text-gray-600 dark:text-gray-200">something went wrong</p>
      <button
        type="button"
        className="mt-5  text-gray-500 underline decoration-rose-500 underline-offset-1 dark:text-gray-50"
        onClick={() => isWindowAvailable() && window.location.reload()}>
        Refresh the page
      </button>
    </div>
  )
}

export default error
