import DefaultAvatar from "$assets/illustration/others/avatar.png"
import { Image, Label } from "$ui"
import { PencilLine } from "lucide-react"
import { ChangeEvent, FC, Fragment, useState } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

interface AvatarProps {
  register: UseFormRegisterReturn
  className?: string
  error: string | undefined
}

export const Avatar: FC<AvatarProps> = ({ register }) => {
  const { ref, onChange, ...rest } = register
  const [selectedImage, setSelectedImage] = useState(DefaultAvatar)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]))
    }
  }

  const combinedOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFileChange(event)
    onChange(event)
  }

  return (
    <Fragment>
      <div className="relative h-16  w-16 cursor-pointer rounded-full bg-gray-300 ">
        <Image src={selectedImage} alt="avatar" className="h-full w-full rounded-full" />
        <Label
          htmlFor="avatar"
          className="absolute -bottom-2 -right-2 cursor-pointer rounded-full border border-gray-800/40 bg-gray-100 p-1"
        >
          <PencilLine size={20} />

          <input
            type="file"
            accept="image/*"
            area-label="avatar"
            className="hidden"
            id="avatar"
            {...rest}
            ref={ref}
            onChange={combinedOnChange}
          />
        </Label>
      </div>
    </Fragment>
  )
}

/*
 In my form i have a input file and if user select any file i want to show it in a img tag 
 and seleceted file should be display in img tag and also i want to show a default image if user not select any file
 I am using react-hook-form. How to do this  
*/
