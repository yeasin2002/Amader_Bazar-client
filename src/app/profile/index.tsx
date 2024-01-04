import { ProfileAndDashboardSidebar } from "$components/sidebar/ProfileAndDashboardSidebar"
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
    url: "/profile/checkout",
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
  return (
    <section {...rest} className=" flex h-full w-full    ">
      <ProfileAndDashboardSidebar menuItem={profileMenu} />
      <Outlet />
    </section>
  )
}
