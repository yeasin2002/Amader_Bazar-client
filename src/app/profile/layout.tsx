import { ProfileAndDashboardSidebar } from "$components/sidebar/ProfileAndDashboardSidebar"
import { Heart, Settings, ShoppingCart, User } from "lucide-react"
import { FC } from "react"

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

type indexProps = {
  children: React.ReactNode
}

const ProfileLayout: FC<indexProps> = ({ children }: indexProps) => {
  return (
    <section className=" flex h-full w-full    ">
      <ProfileAndDashboardSidebar menuItem={profileMenu} />
      {children}
    </section>
  )
}

export default ProfileLayout
