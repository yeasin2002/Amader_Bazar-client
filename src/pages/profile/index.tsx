import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Outlet } from "react-router-dom"
import { ProfileSidebar } from "./ProfileSidebar"

type indexProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Profile: FC<indexProps> = ({ ...rest }) => {
  // const { isLoggedIn, logOut } = useAuth()
  return (
    <section {...rest} className=" flex h-full w-full ">
      <ProfileSidebar />
      <Outlet />
    </section>
  )
}
