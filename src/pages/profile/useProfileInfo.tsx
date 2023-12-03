import { useQuery } from "@tanstack/react-query"

import avatarImg from "$assets/illustration/others/user.jpg"
import { UserSkeleton } from "$components/Skeleton"
import { $GET, useAuth } from "$hooks"
import { Button } from "$ui/button"
import { getImgSrc } from "$utils/getImageSrc"
import { Fragment } from "react"

interface UserProfileInfoResponse {
  statusCode: number
  message: string
  data: {
    name: string
    avatar: string | undefined
    city: string | null
    country: string | null
  } | null
}

export const UserProfileInfo = () => {
  const { logOut } = useAuth()

  const { data, isError, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () =>
      $GET({
        url: `/user/info/`,
      }) as Promise<UserProfileInfoResponse>,
  })

  const loadingComponent = (
    <Fragment>
      <UserSkeleton />
    </Fragment>
  )
  const errorComponent = (
    <div>
      <p className="text-red-500">Something went wrong</p>
    </div>
  )

  const imgSrc = getImgSrc({
    img: data?.data?.avatar,
    imgType: "user-img",
  })
  console.log("🚀 ~ file: useProfileInfo.tsx:47 ~ UserProfileInfo ~ imgSrc:", imgSrc)
  const mainComponents = (
    <Fragment>
      <div className="flex items-center gap-x-3">
        <img
          src={imgSrc}
          alt="avatar"
          className="h-14 w-14 rounded-full"
          crossOrigin="anonymous"
          onError={(e) => {
            e.currentTarget.src = avatarImg
          }}
        />
        <div>
          <p className="lg:heading-4 heading-6  font-bold text-gray-800">{data?.data?.name}</p>
          <p>
            {data?.data?.city} {data?.data?.country}
          </p>
        </div>
      </div>
    </Fragment>
  )

  return (
    <div>
      <div className="my-6 flex items-center justify-between">
        {isError ? errorComponent : isLoading ? loadingComponent : mainComponents}
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
