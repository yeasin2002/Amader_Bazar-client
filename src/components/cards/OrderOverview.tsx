import { allOrdersData } from "@/interface"
import { getImgSrc } from "@/utils"
import { Banknote, Landmark } from "lucide-react"
import Image from "next/image"
import { DetailedHTMLProps, HTMLAttributes } from "react"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  OrdersData: allOrdersData
}

export const OrderOverview = ({ OrdersData, ...rest }: Props) => {
  const { User, Products } = OrdersData
  const avatar = getImgSrc({
    img: User?.avatar,
    imgType: "user-img",
  })

  return (
    <div {...rest}>
      <div className="max-w-2xl rounded-lg bg-white px-8 py-4 shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>

          {OrdersData.OrderPaymentMethod === "card" ? (
            <p className="flex transform cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 hover:bg-gray-500">
              <Landmark />
              <span>Card</span>
            </p>
          ) : (
            <p className="flex transform cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 hover:bg-gray-500">
              <Banknote />
              <span>Cash</span>
            </p>
          )}
        </div>

        <div className="mt-2">
          <a
            href="#"
            className="text-xl font-bold text-gray-700 hover:text-gray-600 hover:underline dark:text-white dark:hover:text-gray-200"
            role="link">
            {OrdersData.TotalAmount} TK
          </a>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{OrdersData.OrderAddress}</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p>{OrdersData.OrderStatus}</p>
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
