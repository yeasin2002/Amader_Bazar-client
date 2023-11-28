import avatarImg from "$assets/illustration/others/user.jpg"
import { useAuth } from "$hooks/index"
import { Image } from "$ui/Image"
import { Button } from "$ui/button"

export const UserProfileInfo = () => {
  const { logOut } = useAuth()
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
        <Button
          onClick={() => {
            logOut("/")
          }}>
          Log Out
        </Button>
      </div>
    </div>
  )
}
