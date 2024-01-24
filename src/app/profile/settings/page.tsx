"use client"

import { cn } from "@/lib"
import { ChangePassword, ItemHeadingWrapper, UpdateAvatar, UpdateProfileInfo, UserIntro } from "./index"

const Setting = () => {
  const allComponents = [
    {
      title: "Update Avatar",
      jsx: UpdateAvatar,
    },
    {
      title: "Update Profile Information",
      jsx: UpdateProfileInfo,
    },
    {
      title: "Change Password",
      jsx: ChangePassword,
    },
  ]

  return (
    <div className="grid w-full place-items-center ">
      <div className="into-center w-1/3 flex-col rounded-xl    bg-gray-100 p-5  shadow-lg ring-2 ring-blue-400/40  ">
        <UserIntro />

        <div className={cn("flex w-full flex-col   gap-y-4 bg-gray-100 p-5")}>
          {allComponents.map((Item, i) => {
            return (
              <ItemHeadingWrapper key={Item.title} title={Item.title}>
                <Item.jsx />
              </ItemHeadingWrapper>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Setting
