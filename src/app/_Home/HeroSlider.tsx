"use client"
import { useId } from "react"
import "swiper/css"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { HeroItems } from "$data"


import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import Image from "next/image"
interface HeroSliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const HeroSlider: FC<HeroSliderProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <Swiper
        className="mySwiper"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        {HeroItems?.map((items) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const id = useId()
          return (
            <SwiperSlide className="h-2/4  w-2/4 cursor-grab" key={id}>
              <Image
                className="h-full w-full   rounded-md  object-cover "
                src={items.img.src}
                alt="apple watch photo"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
