import { ProfileAndDashboardSidebar } from "$components/sidebar/ProfileAndDashboardSidebar"
import { GanttChartSquare, Home, ShoppingCart, User } from "lucide-react"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Outlet } from "react-router-dom"

const profileMenu = [
  {
    title: "Home",
    url: "/dashboard",
    icon: <Home />,
  },
  {
    title: "User",
    url: "/dashboard/user",
    icon: <User />,
  },
  {
    title: "Product",
    url: "/dashboard/products",
    icon: <ShoppingCart />,
  },
  {
    title: "Orders",
    url: "/dashboard/order",
    icon: <GanttChartSquare />,
  },
]

type indexProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Dashboard: FC<indexProps> = ({ ...rest }) => {
  // const { isLoggedIn, logOut } = useAuth()
  return (
    <section {...rest} className=" flex h-full w-full ">
      <ProfileAndDashboardSidebar menuItem={profileMenu} />
      <Outlet />
    </section>
  )
}
