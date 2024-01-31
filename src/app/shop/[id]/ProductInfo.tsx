"use client"

import { FacebookIcon, GithubIcon, Heart, LinkedinIcon, Star } from "lucide-react"
import Image from "next/image"
import { Fragment } from "react"

import notFound from "$assets/illustration/others/notFound.png"
import { EachProductErrorSkeleton, EachProductSkeleton } from "$components"
import { clientEnv } from "$lib"
import { useFavoriteProductStore, useSelectedProduct } from "$store"
import { Product } from "$types"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "$ui"
import { Button } from "$ui/button"

export interface ProductInfoProps {
  data: Product | null | undefined
  isLoading?: boolean
  isError?: boolean
  totalReviews: number
}

export const DisplayProductInfo = ({
  data,
  isError = false,
  isLoading = false,
  totalReviews,
  ...rest
}: ProductInfoProps) => {
  const { favoriteProduct, toggleFavoriteProduct } = useFavoriteProductStore()
  const { toggleSelectedProduct, selectedProduct } = useSelectedProduct()
  let imgUrl
  if (!data?.img) {
    imgUrl = notFound
  } else {
    imgUrl = `${clientEnv.baseUrl}/extra/product-img/${data?.img}`
  }
  const favoriteProductHandler = () => {
    if (!data) return

    toggleFavoriteProduct(data)
  }
  const selectedProductHandler = () => {
    if (!data) return
    toggleSelectedProduct(data)
  }
  const checkFavoriteProduct = favoriteProduct.filter((item) => item._id === data?._id)[0]
  const checkIsSelected = selectedProduct.filter((item) => item._id == data?._id)[0]

  const MainComponent = (
    <Fragment>
      <section className="body-font overflow-hidden text-gray-600" {...rest}>
        <div className="container mx-auto px-5 py-24">
          <div className="mx-auto flex flex-wrap lg:w-4/5">
            <Image
              src={imgUrl}
              alt={`${data?.name}'s image`}
              className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
              crossOrigin="anonymous"
              width={1000}
              height={1000}
            />
            <div className="mt-6 w-full dark:text-gray-200 lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
              <h2 className="title-font dark:text-gray- 300 text-sm tracking-widest text-gray-500">{data?.category}</h2>
              <h1 className="title-font mb-1 text-3xl font-medium text-gray-900 dark:text-gray-200">{data?.name}</h1>
              <div className="my-4 flex items-center ">
                <Star className="text-yellow-500" fill="rgb(234 179 8 )" />
                <span className="ml-3 text-gray-600 dark:text-gray-300">{totalReviews} Reviews</span>
              </div>
              <p className="leading-relaxed">
                {data?.desc || <span className="animate-pulse">No description found</span>}
              </p>
              <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                <div className="flex">
                  {data?.color && (
                    <>
                      <span className="mr-3">Color</span>
                      <Button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none" />
                    </>
                  )}
                </div>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SM">SM</SelectItem>
                    <SelectItem value="MD">MD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex">
                <span className="title-font text-2xl font-medium text-gray-900 dark:text-gray-300">
                  {" "}
                  &#2547;{data?.price}
                </span>
                <Button
                  variant={!checkIsSelected ? "default" : "dark"}
                  className="ml-auto flex rounded border-0 px-6 py-2 focus:outline-none"
                  onClick={selectedProductHandler}>
                  {checkIsSelected ? "Remove from Cart" : "Add to Cart"}
                </Button>
                <Button
                  className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500"
                  onClick={favoriteProductHandler}>
                  <Heart
                    className={`${checkFavoriteProduct ? "text-red-500" : "text-gray-500"}`}
                    fill={`${checkFavoriteProduct ? "rgb(239 68 68)" : "rgb(107 114 128)"}`}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )

  let renderedComponent
  if (isError) {
    renderedComponent = <EachProductErrorSkeleton />
  } else {
    if (isLoading) {
      renderedComponent = <EachProductSkeleton />
    } else {
      renderedComponent = MainComponent
    }
  }

  return <Fragment>{renderedComponent}</Fragment>
}
