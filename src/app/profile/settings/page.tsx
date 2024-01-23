"use client"

import { cn } from "@/lib"
import { ChangePassword, UpdateAvatar, UpdateProfileInfo, UserIntro } from "./index"

const Setting = () => {
  const actions = [UpdateAvatar, UpdateProfileInfo, ChangePassword]

  return (
    <div className="grid w-full place-items-center ">
      <div className="into-center w-1/3 flex-col rounded-xl    bg-gray-100 p-5  shadow-md ">
        <UserIntro />

        <div className={cn("flex w-full flex-col   gap-y-4 bg-gray-100 p-5")}>
          {actions.map((Item, i) => {
            return <Item key={i} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Setting
