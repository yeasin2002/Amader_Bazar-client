import { ProfileSidebar } from "$components/sidebar/ProfileSidebar"
import { Heart, Settings, ShoppingCart, User } from "lucide-react"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Outlet } from "react-router-dom"

const profileMenu = [
  {
    title: "Profile",
    url: "/profile",
    icon: <User />,
  },
  {
    title: "orders",
    url: "/profile/orders",
    icon: <ShoppingCart />,
  },
  {
    title: "wishlist",
    url: "/profile/wishlist",
    icon: <Heart />,
  },
  {
    title: "settings",
    url: "/profile/settings",
    icon: <Settings />,
  },
]

type indexProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Profile: FC<indexProps> = ({ ...rest }) => {
  // const { isLoggedIn, logOut } = useAuth()
  return (
    <section {...rest} className=" flex h-full w-full ">
      <ProfileSidebar menuItem={profileMenu} />
      <Outlet />
    </section>
  )
}
