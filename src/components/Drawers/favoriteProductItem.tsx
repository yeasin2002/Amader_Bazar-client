import { Image } from "$ui/Image"
import { getImgSrc } from "$utils/getImageSrc"
import { Fragment } from "react"

export interface Product {
  _id: string
  name: string
  img: string
  price: number
  category: string
  discount?: number
  isFeature?: boolean
}

export const FavoriteProductItem = ({ name, img, price }: Product) => {
  const imgUrl = getImgSrc({ img, imgType: "product-img" })

  return (
    <Fragment>
      <a
        href="#"
        className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
        <Image
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={imgUrl}
          alt={name}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          <p className="mb-3  text-xl font-semibold text-gray-700 dark:text-gray-400">{price} &#2547;</p>
        </div>
      </a>
    </Fragment>
  )
}
