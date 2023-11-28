import { useSelectedProduct } from "$store"
import { Image } from "$ui/Image"
import { getImgSrc } from "$utils/getImageSrc"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Fragment } from "react"

export const SelectedProduct = () => {
  const { selectedProduct, increaseQuantity, decreaseQuantity, updateQuantity, removeProduct } = useSelectedProduct()

  return (
    <section className="w-full">
      <h1 className="my-4 mb-4 text-2xl font-semibold text-gray-900">Selected Product</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full  text-left text-sm text-gray-500 rtl:text-right ">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
            <tr>
              <th scope="col" className="px-16 py-3">
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
                    <td className="p-4">
                      <Image src={imgSrc} height={100} width={100} alt="Apple Watch" />
                    </td>
                    <td className="profile-product-table-td font-semibold text-gray-900 ">{item.name}</td>
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
    </section>
  )
}
