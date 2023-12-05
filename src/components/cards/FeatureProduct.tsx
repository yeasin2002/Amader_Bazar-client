import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"

import { Product } from "$src/interface"
import { Image } from "$ui"
import { getImgSrc } from "$utils/getImageSrc"
import { Link } from "react-router-dom"
import { BdTaka } from ".."
import { FeatureProductErrorSkeleton, FeatureProductSkeleton } from "../index"

interface FeatureProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: string
  product: Product[] | undefined
  isLoading?: boolean
  isError?: boolean
}

export const FeatureProducts: FC<FeatureProductProps> = ({ heading, product, isLoading, isError, ...rest }) => {
  const LoadingComponent = (
    <div className="space-y-3">
      {Array.from(Array(3)).map((_, index) => {
        return <FeatureProductSkeleton key={index} />
      })}
    </div>
  )
  const ErrorComponent = (
    <div className="space-y-3">
      {Array.from(Array(3)).map((_, index) => {
        return <FeatureProductErrorSkeleton key={index} />
      })}
    </div>
  )
  const MainComponents = (
    <Fragment>
      {product?.map((val) => {
        const imgSrc = getImgSrc({
          img: val.img,
          imgType: "product-img",
        })
        const costAfterDiscount = val.price - (val.price * val.discount || 0) / 100
        return (
          <Link
            to={`/shop/${val._id}`}
            className="  flex  gap-x-4  rounded-sm border border-gray-200/40 px-2 py-4"
            key={val._id}>
            <div className="mx-2 h-full w-2/5 ">
              <Image className="aspect-square h-full  w-full " src={imgSrc} alt={val.name} width={150} height={150} />
            </div>
            <div className="flex w-full  flex-1 flex-col gap-y-3  ">
              <p className="heading-6 font-dosis"> {val.name} </p>
              <p className="flex items-center gap-x-1 font-quando text-sm font-medium ">
                <BdTaka /> {costAfterDiscount}
                {val.discount !== 0 && <span className="text-xs text-gray-400 line-through"> {val.price} </span>}
              </p>
            </div>
          </Link>
        )
      })}
    </Fragment>
  )

  return (
    <div {...rest}>
      <h4 className="mb-10 text-xl font-bold ">{heading}</h4>
      {isError ? ErrorComponent : isLoading ? LoadingComponent : MainComponents}
    </div>
  )
}
