"use client"

import defaultUser from "@/assets/illustration/others/user.jpg"
import { EditPen } from "@/components"
import { useAuth } from "@/hooks"
import { Button } from "@/ui"
import { getImgSrc } from "@/utils"
import Image from "next/image"
import { useState } from "react"

export const UpdateAvatar = () => {
  const { userInfo } = useAuth()

  const imgSrc = getImgSrc({
    img: userInfo.avatar,
    imgType: "user-img",
  })

  const [dynamicImgUrl, setDynamicImgUrl] = useState(imgSrc)

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const file = e?.target?.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setDynamicImgUrl(reader.result as string)
    }
  }

  return (
    <div className="flex flex-col items-center  justify-center gap-y-10">
      <div className="relative">
        <Image
          src={dynamicImgUrl || defaultUser}
          onError={(e) => {
            e.currentTarget.src = defaultUser.src
          }}
          alt={`photo of ${userInfo.name}`}
          width={100}
          height={100}
          className="size-36 rounded-full object-cover p-1 ring-2 ring-brand-500"
        />
        <label
          htmlFor="imgEditor"
          className="absolute -bottom-2 -right-1 rounded-full bg-brand-400 p-2 transition-all hover:bg-brand-500">
          <EditPen className="size-5" />
        </label>
        <input type="file" id="imgEditor" className="hidden" onChange={handleImg} />
      </div>
      <Button className="px-10 font-bold">Save</Button>
    </div>
  )
}
