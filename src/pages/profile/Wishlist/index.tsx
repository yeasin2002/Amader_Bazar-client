import { useFavoriteProductStore } from "$store"
import { Image } from "$ui/Image"
import { getImgSrc } from "$utils/getImageSrc"
import { ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

export const Wishlist = () => {
  const { favoriteProduct } = useFavoriteProductStore()
  return (
    <section className="w-full space-y-10 p-4 py-5">
      <h1 className="text-2xl font-semibold text-gray-500 ">Wishlist</h1>

      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right  ">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
              <tr>
                <th scope="col" className="px-6 py-3">
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
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {favoriteProduct.map((item) => {
                const imgSrc = getImgSrc({
                  img: item.img,
                  imgType: "product-img",
                })
                return (
                  <tr className="border-b bg-white hover:bg-gray-50 ">
                    <td className="px-6 py-4">
                      <Image src={imgSrc} alt={item.name} width={100} height={100} />
                    </td>
                    <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4">{item.price} </td>
                    <td className="px-6 py-4 text-right">
                      <Link to={`/shop/${item._id}`} className="cursor-pointer">
                        <ExternalLink />
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
