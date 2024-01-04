import { Minus, Plus, Trash2 } from "lucide-react"
import { Fragment } from "react"

import emptyCard from "$assets/illustration/3D/empty-shopping-bucket.png"
import { useSelectedProduct } from "$store"
import { Image } from "$ui"
import { getImgSrc } from "$utils"
import { Link } from "react-router-dom"
import { ConfirmOrder } from "./ConfirmOrder"

export const Checkout = () => {
  const { selectedProduct, increaseQuantity, decreaseQuantity, updateQuantity, removeProduct } = useSelectedProduct()
  return (
    <section className="w-full px-4 py-6">
      <div className="flex items-center justify-between">
        <h1 className="profile-route-title ">Order Placement</h1>
        <ConfirmOrder />
      </div>
      {selectedProduct?.length !== 0 && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full  text-left text-sm text-gray-500 rtl:text-right ">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
              <tr>
                <th scope="col" className="hidden-mobile px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
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
              {selectedProduct?.map((item) => {
                const imgSrc = getImgSrc({
                  img: item.img,
                  imgType: "product-img",
                })
                return (
                  <Fragment key={item._id}>
                    <tr className="profile-product-table-tr ">
                      <td className="hidden-mobile p-4">
                        <Image src={imgSrc} height={100} width={100} alt="Apple Watch" />
                      </td>
                      <td className="profile-product-table-td font-semibold text-gray-900 ">
                        <Link to={`/shop/${item._id}`} className="hover:underline">
                          {item.name}
                        </Link>
                      </td>
                      <td className="profile-product-table-td">
                        <div className="flex items-center gap-x-3">
                          <button
                            className="profile-product-action-btn"
                            type="button"
                            id={"increaseQuantity"}
                            onClick={() => increaseQuantity(item._id)}>
                            <Plus />
                          </button>
                          <div>
                            <input
                              type="number"
                              id={item._id + "Update Quantity"}
                              value={item.SelectedQuantity}
                              onChange={(e) => {
                                if (e.target.valueAsNumber < 0) return
                                updateQuantity(item._id, e.target.valueAsNumber)
                              }}
                              className="profile-product-quantity-input "
                            />
                          </div>
                          <button
                            className="profile-product-action-btn"
                            type="button"
                            id={"decreaseQuantity"}
                            onClick={() => decreaseQuantity(item._id)}>
                            <Minus />
                          </button>
                        </div>
                      </td>
                      <td className="profile-product-table-td font-semibold text-gray-900 ">{item.price}</td>
                      <td className="profile-product-table-td ">
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
          <img src={emptyCard} alt="Empty" className="aspect-square  h-80 " />
          <h1 className="text-center font-jost text-2xl font-semibold text-gray-900">No Product Selected</h1>
        </div>
      )}
    </section>
  )
}
