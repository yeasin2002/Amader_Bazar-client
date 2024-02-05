import { DetailsCardWithIcon } from "$components/cards"
import { Home, LayoutGrid } from "lucide-react"
import { DashboardNotifications } from "./DashboardNotifications"

const Admin = () => {
  return (
    <div className="container w-full [&>]:w-full">
      <div className="flex  justify-between py-4  ">
        <p className="flex items-center gap-x-1">
          <LayoutGrid />
          <span className="heading-6">Admin</span>
        </p>
        <DashboardNotifications />
      </div>

      <h1 className="heading-1 my-6">DASHBOARD</h1>
      <div className="grid w-full grid-cols-2  gap-3">
        <DetailsCardWithIcon title="Earning" Icon={Home} value="$250" timing="This Month" />
        <DetailsCardWithIcon title="Products" Icon={Home} value="$250" timing="This Month" />
      </div>
    </div>
  )
}

export default Admin
