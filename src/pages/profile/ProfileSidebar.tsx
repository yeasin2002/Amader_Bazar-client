import { Heart, Settings, ShoppingCart, User } from "lucide-react"
import { Link } from "react-router-dom"

export const ProfileSidebar = () => {
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
  return (
    <aside className="sticky left-0 top-0 h-screen bg-slate-100   ">
      <div className="my-6 space-y-2">
        {profileMenu.map((items) => {
          return (
            <Link
              to={items.url}
              className="text-md flex  cursor-pointer gap-x-2  border-b-4 border-white p-2 font-semibold
               text-gray-700 hover:text-gray-900 xl:text-xl 2xl:text-2xl
              "
              key={items.title + items.url}>
              {items.icon} {items.title}
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
