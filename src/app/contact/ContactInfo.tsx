import { hedvig_letters_serif, playfair_display } from "@/font"
import Image, { type StaticImageData } from "next/image"
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface ContactInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imgUrl: StaticImageData
  infoOne: string
  infoTwo?: string
}

export const ContactInfo: FC<ContactInfoProps> = ({ imgUrl = "", infoOne = "", infoTwo = "", ...rest }) => {
  return (
    <div {...rest} className="space-y-1">
      <Image src={imgUrl} alt={infoOne} className="aspect-square h-14    w-14" />
      <p className={" text-lg font-medium text-gray-700" + hedvig_letters_serif.className}>{infoOne}</p>
      <p className={"font-playfairDisplay text-lg font-medium text-gray-700"+ playfair_display.className}>{infoTwo}</p>
    </div>
  )
}
