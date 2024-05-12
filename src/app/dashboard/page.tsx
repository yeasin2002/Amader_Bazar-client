import { DashboardInfoCard } from "@/components"

const Dashboard = () => {
  return (
    <section className="size-full flex-1">
      <div>
        <h1>Dashboard</h1>
      </div>

      <div className="grid size-full w-full  grid-cols-2 items-center justify-center gap-4 p-2">
        <DashboardInfoCard title="Product" />
        <DashboardInfoCard title="User" />
      </div>
    </section>
  )
}

export default Dashboard
