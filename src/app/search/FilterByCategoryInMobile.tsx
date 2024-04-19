"use client"

import type { categoryData } from "$types"
import { Button, buttonVariants } from "$ui/button"
import { Skeleton } from "$ui/skeleton"
import { type DetailedHTMLProps, type FC, Fragment, type HTMLAttributes, useState } from "react"
// Import Swiper
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

interface FilterByCategoryInMobileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categories?: categoryData[] | null | undefined
  isLoading?: boolean
  isError?: boolean
}

const LoadingComponent = (
  <div className="flex gap-x-4">
    <Skeleton className="h-10 w-full bg-gray-300" />
    <Skeleton className="h-10 w-full bg-gray-300" />
    <Skeleton className="h-10 w-full bg-gray-300" />
    <Skeleton className="h-10 w-full bg-gray-300" />
  </div>
)
const ErrorComponent = <div></div>

export const FilterByCategoryInMobile: FC<FilterByCategoryInMobileProps> = ({
  categories,
  isLoading = false,
  isError = false,
  ...rest
}) => {
  const mainComponent = (
    <Fragment>
      {categories?.map((item) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isSelected, setIsSelected] = useState(false)
        return (
          <SwiperSlide key={item.name}>
            <Button
              key={item.name}
              onClick={() => setIsSelected(!isSelected)}
              className={buttonVariants({
                variant: `${!isSelected ? "default" : "dark"}`,
                className: "flex   h-full w-full cursor-grab items-center justify-center py-3",
              })}>
              {item.name}
            </Button>
          </SwiperSlide>
        )
      })}
    </Fragment>
  )

  return (
    <div {...rest} className="my-10 md:hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
          200: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 3,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper !cursor-grab">
        {isError ? ErrorComponent : isLoading ? LoadingComponent : mainComponent}
      </Swiper>
    </div>
  )
}
