"use client"

import defaultUser from "@/assets/illustration/others/user.jpg"
import { EditPen } from "@/components"
import { useAuth } from "@/hooks"
import { getUsersToken } from "@/lib"
import { Button } from "@/ui"
import { $fetch, getImgSrc } from "@/utils"
import { useMutation } from "@tanstack/react-query"
import Image from "next/image"
import { useState } from "react"
import { toast } from "react-hot-toast"

export const UpdateAvatar = () => {
  const [updatableImg, setUpdatableImg] = useState<File | null>(null)
  const { userInfo, setUserInfo } = useAuth()

  const imgSrc = getImgSrc({
    img: userInfo.avatar,
    imgType: "user-img",
  })
  const [dynamicImgUrl, setDynamicImgUrl] = useState(imgSrc)

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    setUpdatableImg(e.target.files[0])

    const file = e?.target?.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setDynamicImgUrl(reader.result as string)
    }
  }

  //update avatar  -> PUT:  user//change-avatar
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["update-avatar"],
    mutationFn: (img: File | null) => {
      const formData = new FormData()
      formData.append("avatar", img as File)
      return $fetch("/user/change-avatar", {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${getUsersToken()}`,
        },
      })
    },
  })

  const handleButtonClick = async () => {
    if (!updatableImg) {
      return toast("You have to select an image", {
        className: "bg-brand-500 text-white font-bold",
        icon: "⚠️",
        position: "top-right",
      })
    }

    console.log("File Uploading")
    const response = await mutateAsync(updatableImg)
    console.log(response)
    if (response.success) {
      console.log("Done")
      setUserInfo({
        ...userInfo,
        avatar: response.data.avatar,
      })
      toast.success("Avatar updated successfully")
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
          <EditPen className="size-5 dark:text-gray-900" />
        </label>
        <input type="file" id="imgEditor" className="hidden" onChange={handleImg} />
      </div>
      <Button className="px-10 font-bold" onClick={handleButtonClick}>
        {isPending ? "Saving..." : "Save"}
      </Button>
    </div>
  )
}