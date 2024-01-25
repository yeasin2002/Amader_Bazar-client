import defaultUser from "@/assets/illustration/others/user.jpg"
import { exo_2 } from "@/font"
import { useAuth } from "@/hooks"
import { cn } from "@/lib"
import { getImgSrc } from "@/utils"
import Image from "next/image"
import { DetailedHTMLProps, HTMLAttributes } from "react"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
}

export const UserIntro = ({ className, ...rest }: Props) => {
  const { userInfo } = useAuth()

  const imgSrc = getImgSrc({
    img: userInfo.avatar,
    imgType: "user-img",
  })

  return (
    <div {...rest} className={cn("flex flex-col items-center gap-y-3", exo_2.className, className)}>
      <Image
        src={imgSrc || defaultUser}
        alt={`photo of ${userInfo.name}`}
        width={100}
        height={100}
        className="size-32 rounded-full object-cover p-1 ring-2 ring-brand-500"
      />
      <h2 className="text-lg  font-bold">{userInfo.name}</h2>
    </div>
  )
}
