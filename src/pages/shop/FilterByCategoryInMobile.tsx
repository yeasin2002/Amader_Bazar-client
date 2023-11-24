import { category } from "$data"
import { buttonVariants } from "$ui/button"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
// Import Swiper
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

interface FilterByCategoryInMobileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categories?: number[]
}

export const FilterByCategoryInMobile: FC<FilterByCategoryInMobileProps> = ({ ...rest }) => {
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
        {category.map((item) => {
          return (
            <SwiperSlide
              key={item.name}
              className={buttonVariants({
                variant: "default",
              })}>
              {item.name}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
