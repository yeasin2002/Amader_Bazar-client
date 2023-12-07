import lonely from "$assets/illustration/lottiy/woman-shopping-online.json"
import { SearchInput } from "$components/forms/SearchInput"
import Lottie from "lottie-react"
import { Link } from "react-router-dom"
import { UserProfileInfo } from "../useProfileInfo"

export const Default = ({ ...rest }) => {
  const isHaveOrder = false
  const notOrder = (
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

  const showOrders = (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg" {...rest}>
      <div className="flex items-center justify-between px-4">
        <p className=" text-xl font-semibold text-gray-700">History </p>
        <SearchInput className="mb-6 w-80" />
      </div>
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right ">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-white hover:bg-gray-50 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline ">
                Edit
              </a>
            </td>
          </tr>
          <tr className="border-b bg-white hover:bg-gray-50 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline ">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  return (
    <div className="w-full space-y-14 px-2">
      <UserProfileInfo />

      {isHaveOrder ? showOrders : notOrder}
    </div>
  )
}
