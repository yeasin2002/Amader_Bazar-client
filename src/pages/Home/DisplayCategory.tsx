import { $GET } from "$hooks"
import { CategoriesResponse } from "$types"
import { useQuery } from "@tanstack/react-query"
import { Tag } from "lucide-react"

import { CategoryItemError, CategoryItemSkeleton } from "$components"
import { CategoryItem } from "./CategoryItem"

// Import Swiper
import { Fragment } from "react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const DisplayCategory = () => {
  let categoryDisplay
  const {
    data: CategoriesData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["categories", "all"],
    queryFn: async () => $GET({ url: "/category" }) as Promise<CategoriesResponse>,
  })

  const LoadingComponent = (
    <Fragment>
      {Array.from(Array(5)).map((_, index) => {
        return (
          <SwiperSlide key={index}>
            <CategoryItemSkeleton />
          </SwiperSlide>
        )
      })}
    </Fragment>
  )

  const ErrorComponent = (
    <Fragment>
      {Array.from(Array(5)).map((_, index) => {
        return (
          <SwiperSlide key={index}>
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
          <p className="font-serif text-xl font-bold text-gray-800">Categories</p>
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

export default DisplayCategory
