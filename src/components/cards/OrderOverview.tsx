import type { allOrdersData } from "@/interface"
import { getImgSrc } from "@/utils"
import Image from "next/image"
import type { DetailedHTMLProps, HTMLAttributes } from "react"

// Icons
import backIcon from "@/assets/illustration/3D/bank.svg"
import moneyIcon from "@/assets/illustration/3D/money.png"
import Link from "next/link"
import { RenderOrderStatus } from ".."

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  OrdersData: allOrdersData
}

export const OrderOverview = ({ OrdersData, ...rest }: Props) => {
  const { User } = OrdersData
  const avatar = getImgSrc({
    img: User?.avatar,
    imgType: "user-img",
  })
  const orderData = new Date(OrdersData.OrderDateAndTime).toDateString()
  const isPayedByCard = OrdersData.OrderPaymentMethod === "card"

  return (
    <div {...rest}>
      <div className="max-w-2xl rounded-lg bg-white px-8 py-4 shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">{orderData}</span>

          <Link
            className="flex transform cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 hover:bg-gray-500"
            href={`/dashboard/order/${OrdersData._id}`}>
            Details
          </Link>
        </div>

        <div className="mt-2">
          <p className="text-xl font-bold text-gray-700 hover:text-gray-600 hover:underline dark:text-white dark:hover:text-gray-200">
            {OrdersData.TotalAmount} TK
          </p>

          <div className="flex items-center gap-x-2">
            Payment Method:
            <p className="flex transform cursor-pointer items-center gap-x-2 rounded  text-sm font-bold text-gray-100 transition-colors duration-300 ">
              <Image
                src={isPayedByCard ? backIcon : moneyIcon}
                alt="Back"
                width={500}
                height={500}
                className="size-5"
              />
              <span>{isPayedByCard ? "Card" : "Cash"}</span>
            </p>
          </div>
          <p className="space-x-2">
            <span>Order Status:</span>
            <RenderOrderStatus status={OrdersData.OrderStatus} />
          </p>
        </div>

        <div className="mt-4 flex items-center  justify-between">
          <div>
            <p>{OrdersData?.OrderAddress}</p>
            <p>{User?.phone}</p>
          </div>
          <div className="flex items-center ">
            <Image
              className="mx-4 hidden aspect-square h-10 w-10 rounded-full object-cover sm:block"
              src={avatar}
              alt="avatar"
              width={40}
              height={40}
            />
            <p className="cursor-pointer font-bold text-gray-700 dark:text-gray-200">{User?.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
