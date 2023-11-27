import avatarImg from "$assets/illustration/others/user.jpg"
import { Image } from "$ui/Image"
import { ChangePassword } from "./ChangePassword"

export const UserProfileInfo = () => {
  return (
    <div>
      <div className="my-6 flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Image src={avatarImg} alt="avatar" width={50} className="rounded-full" />
          <div>
            <p className="text-2xl font-bold text-gray-800">Dev Yeasin</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <ChangePassword />
      </div>
    </div>
  )
}
