"use client"

import demoUser from "@/assets/illustration/others/user.jpg"
import Image from "next/image"

import { cn } from "@/lib"
import { ChangePassword, UpdateProfileInfo } from "./index"

const Setting = () => {
  const actions = [ChangePassword, UpdateProfileInfo]

  return (
    <div className="grid w-full place-items-center ">
      <div className="into-center w-1/3 flex-col rounded-xl    bg-gray-100 p-5  shadow-md ">
        <Image src={demoUser} alt="User" width={100} height={100} className="rounded-full" />

        <div
          className={cn(
            "flex w-full flex-col   bg-gray-100 p-5",
            "*:w-full *:cursor-pointer *:rounded-md *:p-4 *:text-left *:shadow-md *:hover:bg-gray-200"
          )}>
          {actions.map((Item, i) => {
            return <Item key={i} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Setting
