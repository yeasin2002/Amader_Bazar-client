import avatar from "$assets/illustration/others/avatar.png"
import { Image, Label } from "$ui"
import { PencilLine } from "lucide-react"
import { ChangeEvent, DetailedHTMLProps, FC, Fragment, useState } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

interface AvatarProps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  register: UseFormRegisterReturn
  className?: string
  error: string | undefined
  src?: string
}

export const Avatar: FC<AvatarProps> = ({ register, ...rest }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]))
    }
  }
  return (
    <Fragment>
      <div className="relative h-16  w-16 cursor-pointer rounded-full bg-gray-300 ">
        <Image src={selectedImage || avatar} alt="avatar" className="h-full w-full rounded-full" />
        <Label
          htmlFor="avatar"
          className="absolute -bottom-2 -right-2 cursor-pointer rounded-full border border-gray-800/40 bg-gray-100 p-1"
        >
          <PencilLine size={20} />
          <input type="text" onChange={handleImageChange} />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="avatar"
            // onChange={handleImageChange}
            {...register}
            {...rest}
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
