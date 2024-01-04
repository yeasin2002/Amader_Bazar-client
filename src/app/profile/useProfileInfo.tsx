import avatarImg from "$assets/illustration/others/user.jpg"
import { useAuth } from "$hooks"
import { Button } from "$ui/button"
import { getImgSrc } from "$utils"
import { Fragment } from "react"

export const UserProfileInfo = () => {
  const { setLoggedOut, userInfo } = useAuth()
  const { avatar, email, isAdmin, name } = userInfo

  const imgSrc = getImgSrc({
    img: avatar,
    imgType: "user-img",
  })
  const mainComponents = (
    <Fragment>
      <div className="flex items-center gap-x-3">
        <img
          src={imgSrc || avatarImg}
          alt="avatar"
          className="aspect-square h-14 w-14 rounded-full"
          crossOrigin="anonymous"
          onError={(e) => {
            e.currentTarget.src = avatarImg
          }}
        />
        <div>
          <p className="lg:heading-4 heading-6 font-ptSansNarrow font-bold  capitalize text-gray-800">
            {name}
            {isAdmin && (
              <span className=" ml-2 rounded-md bg-brand-500 p-1 font-kurale text-xs text-slate-800">Admin</span>
            )}
          </p>
          <p className="font-ptSansNarrow text-xs font-semibold text-gray-500">{email}</p>
        </div>
      </div>
    </Fragment>
  )

  return (
    <div>
      <div className="my-6 flex items-center justify-between">
        {mainComponents}
        <Button
          onClick={() => {
            setLoggedOut()
          }}>
          Log Out
        </Button>
      </div>
    </div>
  )
}
