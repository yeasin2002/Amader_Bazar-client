"use client"


import { $GET } from "$hooks"
import type { CategoriesResponse } from "$types"
import { useQuery } from "@tanstack/react-query"
import { Tag } from "lucide-react"

import { CategoryItemError, CategoryItemSkeleton } from "$components"
import { CategoryItem } from "./CategoryItem"

// Import Swiper
import { kurale } from "@/font"
import { Fragment } from "react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export const DisplayCategory = () => {
  let categoryDisplay = null
  const {
    data: CategoriesData,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories", "all"],
    staleTime: 86400000,
    queryFn: async () => $GET({ url: "/category" }) as Promise<CategoriesResponse>,
  })

  const LoadingComponent = (
    <Fragment>
      {Array.from(Array(5))?.map(() => {
        return (
          <SwiperSlide key={crypto.randomUUID()}>
            <CategoryItemSkeleton />
          </SwiperSlide>
        )
      })}
    </Fragment>
  )

  const ErrorComponent = (
    <Fragment>
      {Array.from(Array(5))?.map(() => {
        return (
          <SwiperSlide key={crypto.randomUUID()}>
            <CategoryItemError />
          </SwiperSlide>
        )
      })}
    </Fragment>
  )

  const mainComponent = (
    <Fragment>
      {CategoriesData?.data?.map((val) => {
        return (
          <SwiperSlide key={val._id}>
            <CategoryItem categoryName={val.name} icon={val.icon} key={val._id} />
          </SwiperSlide>
        )
      })}
    </Fragment>
  )

  if (isError || CategoriesData?.success === false) {
    categoryDisplay = ErrorComponent
  } else {
    if (isLoading) {
      categoryDisplay = LoadingComponent
    } else {
      categoryDisplay = mainComponent
    }
  }

  return (
    <section className="eachSection space-y-3 px-4 py-6">
      <div>
        <div className="flex items-center gap-x-2">
          <span className="grid place-items-center   rounded-full bg-brand-900 p-2  text-white">
            <Tag className="text-gray-700" />
          </span>
          <p className={"  text-2xl font-bold text-gray-800" + kurale.className}>Categories</p>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            600: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper !cursor-grab">
          {categoryDisplay}
        </Swiper>
      </div>
    </section>
  )
}
