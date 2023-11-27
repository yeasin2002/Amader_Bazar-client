import { SearchInput } from "$components/forms/SearchInput"
import { Fragment } from "react"

export const ProductTable = ({ ...rest }) => {
  return (
    <Fragment>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg" {...rest}>
        <div className="flex items-center justify-between px-4">
          <p className=" text-gray-700">History </p>
          <SearchInput className="mb-6 w-80" />
        </div>
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right ">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500  "
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
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
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 "
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
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
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 "
                  />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
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
            <tr className="border-b bg-white hover:bg-gray-50  ">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 "
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline ">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 ">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-3"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 "
                  />
                  <label htmlFor="checkbox-table-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
                Apple Watch
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$179</td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline ">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 ">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-3"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 "
                  />
                  <label htmlFor="checkbox-table-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
                iPad
              </th>
              <td className="px-6 py-4">Gold</td>
              <td className="px-6 py-4">Tablet</td>
              <td className="px-6 py-4">$699</td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline ">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white hover:bg-gray-50 ">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-3"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 "
                  />
                  <label htmlFor="checkbox-table-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
                Apple iMac 27"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">PC Desktop</td>
              <td className="px-6 py-4">$3999</td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline ">
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}
