"use client"

import type { OrderByUserResponse } from "@/interface"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"

import lonely from "@/assets/illustration/gif/Woman Shopping Online.gif"
import { RenderOrderStatus } from "@/components"
import { exo_2 } from "@/font"
import { getUsersToken } from "@/lib"
import { $fetch } from "@/utils"
import { UserProfileInfo } from "./UserProfileInfo"

const Profile = ({ ...rest }) => {
  const { data } = useQuery({
    queryKey: ["orders-of-user"],
    queryFn: () => {
      return $fetch("/order", {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getUsersToken()}` },
      }) as Promise<OrderByUserResponse>
    },
  })

  const noOrderFound = (
    <div className="flex  h-full max-h-screen w-full flex-col items-center justify-center text-center text-gray-500">
      <p className={exo_2.className}>You {"don't"} have any orders yet</p>
      <div className="flex justify-center">
        <Link href="/" className="font-hedvigLettersSerif text-blue-500 hover:underline">
          Go to shop
        </Link>
      </div>
      <Image src={lonely} className="size-1/3" width={400} height={800} alt="Shopping" />
    </div>
  )

  const mainComponents = (
    <div>
      {data?.data?.map((items) => {
        const date = new Date(items.createdAt)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const fullDate = `${day}-${month}-${year}`

        const time = date.toLocaleTimeString()
        return (
          <div className="relative overflow-x-auto   shadow-md sm:rounded-lg md:pb-0" {...rest} key={items._id}>
            <div className="dark:bg-text-200 ">
              <div className="flex ">
                <span className="h-1 w-full   bg-gray-300/60 " />
                <p className="w-full text-center text-slate-600  dark:text-gray-300">
                  <span>{fullDate}</span> : <span>{time}</span>
                </p>
                <span className="h-1 w-full  bg-gray-300/60 " />
              </div>
              <div className="my-3 flex justify-between">
                <p className="text-md ml-6  font-normal text-gray-700 dark:text-gray-300">
                  Total Cost: <span className="font-medium ">{items?.TotalAmount}</span> TK
                </p>
                <p>
                  <span className="text-md font-medium text-gray-600 dark:text-gray-300 ">Status: </span>
                  <RenderOrderStatus status={items?.OrderStatus} />
                </p>
              </div>
            </div>

            <table className="w-full text-left text-sm text-gray-500 rtl:text-right  ">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700   dark:bg-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Quantity
                  </th>
                  <th scope="col" className=" px-6 py-3">
                    Per Price
                  </th>
                  <th scope="col" className="small-hide px-6 py-3">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {items?.Products?.map((product) => {
                  return (
                    <tr
                      className="border-b bg-white transition-all hover:bg-gray-50 dark:border-b-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300 "
                      key={product?._id}>
                      <th scope="row" className="  px-2 py-1 font-medium text-gray-900 sm:px-6 sm:py-4 ">
                        {product?.Product?.name}
                      </th>
                      <td className="px-6 py-4">{product?.Quantity}</td>
                      <td className=" px-6 py-4">{product?.Product?.price}</td>
                      <td className="small-hide px-6 py-4">{product?.Product?.price * product?.Quantity}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  )

  return (
    <div className="h-full w-full space-y-14 px-2 pb-28 md:pb-0">
      <UserProfileInfo />

      {data?.data?.length === 0 ? noOrderFound : mainComponents}
    </div>
  )
}

export default Profile
