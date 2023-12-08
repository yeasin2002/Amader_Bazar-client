import loadingImg from "$assets/illustration/lottiy/loading.json"
import errorImg from "$assets/illustration/lottiy/warningjson.json"
import lonely from "$assets/illustration/lottiy/woman-shopping-online.json"
import { $GET } from "$hooks/useFetchers"
import { cn } from "$lib/utils"
import { OrderByUserResponse } from "$types"
import { Button } from "$ui/button"
import { useQuery } from "@tanstack/react-query"
import Lottie from "lottie-react"
import { Link } from "react-router-dom"
import { UserProfileInfo } from "../useProfileInfo"

export const Default = ({ ...rest }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["orders-of-user"],
    queryFn: () => $GET({ url: "/order" }) as Promise<OrderByUserResponse>,
  })
  const loadingComponents = (
    <div className="flex h-full w-full flex-col place-items-center ">
      <Lottie animationData={loadingImg} className="h-40 w-full" loop />
      <p className="text-center  font-exo2 text-gray-500">Please wait for sometime</p>
    </div>
  )
  const ErrorComponents = (
    <div className="flex h-full w-full flex-col place-items-center ">
      <Lottie animationData={errorImg} className="h-40 w-full" loop />
      <p className="text-center  font-exo2 text-gray-600">something went wrong</p>
      <button
        className="mt-5  text-gray-500 underline underline-offset-1 "
        onClick={() => {
          window.location.reload()
        }}>
        Refresh the page
      </button>
    </div>
  )

  const noOrderFound = (
    <div>
      <p className="text-center  font-exo2 text-gray-500">You don't have any orders yet</p>
      <div className="flex justify-center">
        <Link to="/">
          <a className="font-hedvigLettersSerif text-blue-500 hover:underline">Go to shop</a>
        </Link>
      </div>
      <div className="w-full">
        <Lottie animationData={lonely} className="h-96 w-full" loop />
      </div>
    </div>
  )

  const mainComponents = (
    <div className="space-y-10">
      {data?.data.length === 0 && noOrderFound}
      {data?.data.length !== 0 &&
        data?.data.map((items) => {
          const date = new Date(items.createdAt)
          const year = date.getFullYear()
          const month = date.getMonth() + 1
          const day = date.getDate()
          const fullDate = `${day}-${month}-${year}`

          const time = date.toLocaleTimeString()
          return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg" {...rest}>
              <div>
                <div className="flex ">
                  <span className="h-1 w-full   bg-gray-300 "></span>
                  <p className="w-full text-center">
                    <span>{fullDate}</span> : <span>{time}</span>
                  </p>
                  <span className="h-1 w-full  bg-gray-300 "></span>
                </div>
                <div className="my-3 flex justify-between">
                  <p className="text-md ml-6  font-normal text-gray-700">
                    Total Cost: <span className="font-medium ">{items.TotalAmount}</span> TK
                  </p>
                  <p>
                    <span className="text-md font-medium text-gray-600">Status: </span>
                    <span
                      className={cn("text-sm font-semibold", {
                        "text-yellow-600": items.OrderStatus === "Pending",
                        "text-blue-600  ": items.OrderStatus === "Processing",
                        "text-teal-500": items.OrderStatus === "Completed",
                        "text-rose-600": items.OrderStatus === "Cancelled",
                      })}>
                      {items.OrderStatus}
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
                  {items.Products.map((product) => {
                    return (
                      <tr className="border-b bg-white hover:bg-gray-50 ">
                        <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
                          {product.Product.name}
                        </th>
                        <td className="px-6 py-4">{product.Quantity}</td>
                        <td className="px-6 py-4">{product.Product.price}</td>
                        <td className="px-6 py-4">{product.Product.price * product.Quantity}</td>
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
