import { OrderOverview } from "@/components/cards/OrderOverview"
import { allOrdersResponse } from "@/interface"
import { Button } from "@/ui"
import { $fetch } from "@/utils"
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"
interface ManageOrderProps {}

const ManageOrder: FC<ManageOrderProps> = async () => {
  const data = (await $fetch("/dashboard/order", {
    next: { revalidate: 60 * 60 },
  })) as allOrdersResponse

  return (
    <Fragment>
      <div className="size-full space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="profile-route-title">User Information</h1>
          <Button>Btn</Button>
        </div>
      </div>
      <div>
        <h5>
          Pending Orders <span className="text-red-500">({data?.data?.pending?.length})</span>
        </h5>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {data?.data?.pending?.map((items) => {
            return <OrderOverview key={items._id} OrdersData={items} />
          })}
        </div>
      </div>

      <div className="mt-10">
        <h5>
          All Orders <span className="text-blue-500">({data?.data?.pending?.length})</span>
        </h5>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {data?.data?.all?.map((items) => {
            return <OrderOverview key={items._id} OrdersData={items} />
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default ManageOrder
