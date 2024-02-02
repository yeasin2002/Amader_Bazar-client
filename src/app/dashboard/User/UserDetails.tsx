import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger, Button } from "$ui"
import defaultImg from "@/assets/illustration/others/user.jpg"
import { Users } from "@/interface"
import { getImgSrc } from "@/utils"
import { X } from "lucide-react"
import Image from "next/image"

import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { UserBandAndDeleteAction } from "./UserBandAndDeleteAction"

interface UserDetailsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user: Users
}

export const UserDetails: FC<UserDetailsProps> = ({ user, ...rest }) => {
  const imgSrc = getImgSrc({
    img: user?.avatar,
    imgType: "user-img",
    notFoundImg: defaultImg,
  })
  const properDate = new Date(user?.createdAt).toDateString()

  return (
    <div {...rest}>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className="bg-brand-500 text-slate-800 hover:bg-brand-400 dark:bg-slate-800 dark:text-gray-100">
            View Details
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <div className="flex justify-end ">
            <AlertDialogCancel className="rounded-lg p-2">
              <X />
            </AlertDialogCancel>
          </div>
          <div className="flex items-center  gap-x-3 ">
            <Image
              src={imgSrc}
              alt="User's Image"
              width={500}
              height={500}
              className="aspect-auto size-32 rounded-full  object-cover"
            />
            <div>
              <p className="font-kurale  text-2xl font-bold capitalize dark:text-gray-200">{user?.name}</p>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-400">{properDate}</p>
            </div>
          </div>
          <div>
            <h5 className="mb-2 mt-4 text-lg font-bold text-gray-950 dark:text-gray-300   ">Contact Information</h5>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-400">{user?.phone}</p>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-400">{user?.email}</p>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-400">{user?.address}</p>
          </div>
          <hr />

          <UserBandAndDeleteAction userId={user?._id} isBanned={user?.isBanned} />

          <div>
            <h5 className="mb-2 mt-4 text-lg font-bold text-gray-950 dark:text-gray-300">Purchased Products</h5>
            {user?.Products.length === 0 && (
              <p className="text-center text-sm font-medium  text-gray-500 dark:text-gray-500">No Product Purchased</p>
            )}
            {user?.Products.length !== 0 &&
              user?.Products?.map((product) => {
                return (
                  <p key={product._id} className="text-sm font-medium text-gray-300 dark:text-gray-400">
                    {product.name}
                  </p>
                )
              })}
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
