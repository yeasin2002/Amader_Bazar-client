import defaultUser from "@/assets/illustration/others/user.jpg"
import { useAuth } from "@/hooks"
import { getImgSrc } from "@/utils"
import Image from "next/image"

export const UpdateAvatar = () => {
  const { userInfo } = useAuth()

  const imgSrc = getImgSrc({
    img: userInfo.avatar,
    imgType: "user-img",
  })

  return (
    <div className="flex flex-col items-center  justify-center">
      <Image
        src={imgSrc || defaultUser}
        onError={(e) => {
          e.currentTarget.src = defaultUser.src
        }}
        alt={`photo of ${userInfo.name}`}
        width={100}
        height={100}
        className="rounded-full p-1 ring-2 ring-brand-500"
      />
      <div>Update Avatar Desc</div>
    </div>
  )
}
