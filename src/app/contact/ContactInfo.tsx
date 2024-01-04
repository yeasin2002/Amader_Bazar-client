import Image, { StaticImageData } from "next/image"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface ContactInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imgUrl: StaticImageData
  infoOne: string
  infoTwo?: string
}

export const ContactInfo: FC<ContactInfoProps> = ({ imgUrl = "", infoOne = "", infoTwo = "", ...rest }) => {
  return (
    <div {...rest} className="space-y-1">
      <Image src={imgUrl} alt={infoOne} className="aspect-square h-14    w-14" />
      <p className="font-hedvigLettersSerif text-lg font-medium text-gray-700">{infoOne}</p>
      <p className="font-playfairDisplay text-lg font-medium text-gray-700">{infoTwo}</p>
    </div>
  )
}
