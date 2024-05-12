import { OrderOverview } from "@/components/cards/OrderOverview"
import type { allOrdersResponse } from "@/interface"
import { Button } from "@/ui"
import { $fetch } from "@/utils"
import { Fragment } from "react"

const ManageOrder = async () => {
  const data = (await $fetch("/dashboard/order", {
    cache: "no-cache",
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

      <div className="mt-10 size-full">
        <h5>
          All Orders <span className="text-blue-500">({data?.data?.pending?.length})</span>
        </h5>
        <div className="mt-4 grid size-full grid-cols-1 gap-4 md:grid-cols-2">
          {data?.data?.all.length > 0 &&
            data?.data?.all?.map((items) => {
              return <OrderOverview key={items._id} OrdersData={items} />
            })}
        </div>

        <div>
          {data?.data?.all.length === 0 && (
            <>
              <p className="mt-8 text-center text-xl font-semibold text-gray-950 dark:text-gray-400">No Order Found</p>
            </>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default ManageOrder
