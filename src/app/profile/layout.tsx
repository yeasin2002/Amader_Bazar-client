import { ProfileAndDashboardSidebar } from "$components/sidebar/ProfileAndDashboardSidebar"
import { Heart, Settings, ShoppingCart, User } from "lucide-react"
import { FC } from "react"

const profileMenu = [
  {
    title: "Profile",
    url: "/profile",
    icon: <User className="dark:text-slate-100 " />,
  },
  {
    title: "orders",
    url: "/profile/checkout",
    icon: <ShoppingCart className="dark:text-slate-100 " />,
  },
  {
    title: "wishlist",
    url: "/profile/wishlist",
    icon: <Heart className="dark:text-slate-100 " />,
  },
  {
    title: "settings",
    url: "/profile/settings",
    icon: <Settings className="dark:text-slate-100 " />,
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
