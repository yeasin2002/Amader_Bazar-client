"use client"

import emptyCard from "$assets/illustration/others/empty-cart.svg"
import { useFavoriteProductStore } from "$store"
import { getImgSrc } from "$utils/getImageSrc"
import { ExternalLink, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Wishlist = () => {
  const { favoriteProduct, removeFavoriteProduct } = useFavoriteProductStore()
  return (
    <section className="h-full w-full space-y-10 p-4 py-5">
      <h1 className="profile-route-title">Wishlist</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {favoriteProduct?.length !== 0 && (
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right  ">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
              <tr>
                <th scope="col" className="hidden-mobile px-6 py-3 ">
                  img
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>

                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {favoriteProduct?.map((item) => {
                const imgSrc = getImgSrc({
                  img: item.img,
                  imgType: "product-img",
                })
                return (
                  <tr className="border-b bg-white hover:bg-gray-50 " key={item._id}>
                    <td className="hidden-mobile px-6 py-4">
                      <Image src={imgSrc} alt={item.name} width={100} height={100} />
                    </td>
                    <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4">{item.price} </td>
                    <td className=" px-6  py-4 text-right ">
                      <div className="flex items-center gap-x-2">
                        <span className="cursor-pointer " onClick={() => removeFavoriteProduct(item._id)}>
                          <Trash2 color="red" />
                        </span>
                        <Link href={`/shop/${item._id}`} className="cursor-pointer">
                          <ExternalLink />
                        </Link>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
      {favoriteProduct?.length === 0 && (
        <div className=" grid h-full w-full place-items-center">
          <Image src={emptyCard} alt="Empty" className="  h-5/6  w-5/6 lg:h-1/2 lg:w-1/2" />
          <h1 className="text-center font-jost text-2xl font-semibold text-gray-900">Wishlist is empty</h1>
        </div>
      )}
    </section>
  )
}

export default Wishlist
