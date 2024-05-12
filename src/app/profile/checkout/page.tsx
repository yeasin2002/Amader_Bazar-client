"use client"

import emptyCard from "@/assets/illustration/3D/empty-shopping-bucket.png"
import { useSelectedProduct } from "@/store"
import { getImgSrc } from "@/utils"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"
import { ConfirmOrder } from "./ConfirmOrder"
import { QTY_manage } from "./QTY_manage"

const Checkout = () => {
  const { selectedProduct, removeProduct } = useSelectedProduct()

  return (
    <section className="w-full px-4 py-6">
      <div className="flex items-center justify-between">
        <h1 className="profile-route-title ">Order Placement</h1>
        <ConfirmOrder />
      </div>
      {selectedProduct?.length !== 0 && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full  text-left text-sm text-gray-500 rtl:text-right ">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-50 ">
              <tr>
                <th scope="col" className="hidden-mobile px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="hidden px-6  py-3 sm:table-cell">
                  Qty
                </th>
                <th scope="col" className=" px-6 py-3 ">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedProduct?.map((item) => {
                const imgSrc = getImgSrc({
                  img: item.img,
                  imgType: "product-img",
                })

                return (
                  <Fragment key={item._id}>
                    <tr className="profile-product-table-tr  transition-all dark:bg-gray-600 dark:hover:bg-gray-700">
                      <td className="hidden-mobile p-4">
                        <Image
                          src={imgSrc}
                          height={500}
                          width={500}
                          alt="Apple Watch"
                          className="size-20  rounded-md"
                        />
                      </td>
                      <td className="profile-product-table-td font-semibold text-gray-900 dark:text-gray-200  ">
                        <Link href={`/shop/${item._id}`} className="hover:underline">
                          {item.name}
                        </Link>
                        <QTY_manage itemsId={item._id} item={item} className="mt-5 sm:hidden" />
                      </td>

                      <td className="profile-product-table-td hidden sm:table-cell ">
                        <QTY_manage itemsId={item._id} item={item} />
                      </td>
                      <td className="profile-product-table-td   font-semibold         text-gray-900 dark:text-gray-200  ">
                        {item.price}
                      </td>
                      <td className="profile-product-table-td " align="center">
                        <span className="profile-product-dlt-btn" onClick={() => removeProduct(item._id)}>
                          <Trash2 color="rgb(220 38 38)" />
                        </span>
                      </td>
                    </tr>
                  </Fragment>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
      {selectedProduct?.length === 0 && (
        <div className="mt-6   grid w-full place-items-center gap-y-1">
          <Image src={emptyCard} alt="Empty" className="aspect-square  size-96" />
          <h1 className="text-center font-jost text-2xl font-semibold text-gray-900 dark:text-gray-300">
            No Product Selected
          </h1>
        </div>
      )}
    </section>
  )
}

export default Checkout
