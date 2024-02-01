"use client"

import { cn } from "$lib/utils"
import { OrderByUserResponse } from "$types"
import { useQuery } from "@tanstack/react-query"
import Lottie from "lottie-react"

import { exo_2 } from "@/font"
import { $fetch } from "@/utils"
import Link from "next/link"
import { UserProfileInfo } from "./UserProfileInfo"

import loadingImg from "$assets/illustration/lottiy/loading.json"
import errorImg from "$assets/illustration/lottiy/warningjson.json"
import lonely from "$assets/illustration/lottiy/woman-shopping-online.json"
import { getUsersToken } from "@/lib"

const Profile = ({ ...rest }) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["orders-of-user"],
    queryFn: () => {
      return $fetch("/order", {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getUsersToken()}` },
      }) as Promise<OrderByUserResponse>
    },
  })
  const loadingComponents = (
    <div className="flex h-full w-full flex-col place-items-center ">
      <Lottie animationData={loadingImg} className="h-40 w-full" loop />
      <p className={"text-center   text-gray-500" + exo_2.className}>Please wait for sometime</p>
    </div>
  )
  const ErrorComponents = (
    <div className="flex h-full w-full flex-col place-items-center ">
      <Lottie animationData={errorImg} className="h-40 w-full" loop />
      <p className="font-exo2  text-center text-gray-600">something went wrong</p>
      <button
        className="mt-5  text-gray-500 underline decoration-rose-500 underline-offset-1 "
        onClick={() => {
          window.location.reload()
        }}>
        Refresh the page
      </button>
    </div>
  )

  const noOrderFound = (
    <div>
      <p className={"text-center   text-gray-500" + exo_2.className}>You {"don't"} have any orders yet</p>
      <div className="flex justify-center">
        <Link href="/" className="font-hedvigLettersSerif text-blue-500 hover:underline">
          Go to shop
        </Link>
      </div>
      <div className="w-full">
        <Lottie animationData={lonely} className="h-96 w-full" loop />
      </div>
    </div>
  )

  const mainComponents = (
    <div className="space-y-10">
      {!isLoading && isSuccess && data?.data && data?.data?.length === 0 && noOrderFound}
      {!isLoading &&
        isSuccess &&
        data?.data &&
        data?.data?.length !== 0 &&
        data?.data?.map((items) => {
          const date = new Date(items.createdAt)
          const year = date.getFullYear()
          const month = date.getMonth() + 1
          const day = date.getDate()
          const fullDate = `${day}-${month}-${year}`

          const time = date.toLocaleTimeString()
          return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg" {...rest} key={items._id}>
              <div>
                <div className="flex ">
                  <span className="h-1 w-full   bg-gray-300/60 "></span>
                  <p className="w-full text-center text-slate-600  dark:text-gray-300">
                    <span>{fullDate}</span> : <span>{time}</span>
                  </p>
                  <span className="h-1 w-full  bg-gray-300/60 "></span>
                </div>
                <div className="my-3 flex justify-between">
                  <p className="text-md ml-6  font-normal text-gray-700 dark:text-gray-300">
                    Total Cost: <span className="font-medium ">{items?.TotalAmount}</span> TK
                  </p>
                  <p>
                    <span className="text-md font-medium text-gray-600 dark:text-gray-300 ">Status: </span>
                    <span
                      className={cn("text-sm font-semibold", {
                        "text-yellow-600 dark:text-brand-500": items?.OrderStatus === "Pending",
                        "text-blue-600  ": items?.OrderStatus === "Processing",
                        "text-teal-500": items?.OrderStatus === "Completed",
                        "text-rose-600": items?.OrderStatus === "Cancelled",
                      })}>
                      {items?.OrderStatus}
                    </span>
                  </p>
                </div>
              </div>

              <table className="w-full text-left text-sm text-gray-500 rtl:text-right ">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Per Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items?.Products?.map((product) => {
                    return (
                      <tr className="border-b bg-white hover:bg-gray-50 dark:border-b-gray-100 " key={product?._id}>
                        <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
                          {product?.Product?.name}
                        </th>
                        <td className="px-6 py-4">{product?.Quantity}</td>
                        <td className="px-6 py-4">{product?.Product?.price}</td>
                        <td className="px-6 py-4">{product?.Product?.price * product?.Quantity}</td>
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
    <div className="h-full w-full space-y-14 px-2">
      <UserProfileInfo />
      {isError ? ErrorComponents : isLoading ? loadingComponents : mainComponents}
    </div>
  )
}

export default Profile
