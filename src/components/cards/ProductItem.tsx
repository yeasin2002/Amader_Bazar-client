import notFound from "@/assets/illustration/others/notFound.png"
import type { Product } from "@/interface"
import { calculateDiscount, getImgSrc } from "@/utils"
import Image from "next/image"
import type { FC } from "react"
import { BdTaka } from ".."
import { ProductItemActions } from "./ProductItemActions"

interface productsPros {
  _id: string
  img: string
  title: string
  review: string
  category: string
  price: number
  discountPrice?: number
  theProduct?: Product
}

export const ProductItem: FC<productsPros> = ({ title, category, img, price, discountPrice = 0, theProduct, _id }) => {
  const imgUrl = getImgSrc({
    img,
    imgType: "product-img",
    notFoundImg: notFound,
  })

  const costAfterDiscount = calculateDiscount(price, discountPrice)

  return (
    <div className="grid max-h-full min-h-[30rem]  grid-rows-2   space-y-4 rounded-lg  border border-gray-700/20 shadow-md dark:border-gray-500/20 ">
      <Image
        src={imgUrl}
        alt="product image"
        className=" aspect-auto size-full cursor-pointer rounded-b-sm rounded-t-lg object-cover "
        width={384}
        height={443}
      />

      <div className=" flex flex-col justify-between p-4 ">
        <div>
          <span className="rounded-full border border-gray-800/40 px-2 py-1 font-playfairDisplay text-xs font-medium text-gray-800 dark:border-gray-400/40 dark:text-gray-200">
            {category}
          </span>
          <h2 className="heading-5 mt-2 font-dosis capitalize">{title}</h2>
          <div className="mt-2 space-y-2 ">
            <p className="mt-4 flex items-center gap-x-1 font-ptSansNarrow text-xl font-bold dark:text-white">
              <BdTaka className="dark:fill-slate-50" /> {costAfterDiscount}
            </p>
            {discountPrice !== 0 && (
              <div className=" flex items-start gap-x-2 ">
                <p className="text-base text-gray-600 line-through">{price}</p>
                <p className="text-xs">{discountPrice}%</p>
              </div>
            )}
          </div>
        </div>

        <ProductItemActions id={_id} theProduct={theProduct} />
      </div>
    </div>
  )
}
