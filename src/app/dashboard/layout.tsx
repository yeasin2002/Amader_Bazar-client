import { ProfileAndDashboardSidebar } from "@/components/sidebar/ProfileAndDashboardSidebar"
import { GanttChartSquare, Home, ShoppingCart, User } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
}

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <section className=" flex h-full w-full ">
      <ProfileAndDashboardSidebar menuItem={profileMenu} />
      {children}
    </section>
  )
}

export default Dashboardlayout
