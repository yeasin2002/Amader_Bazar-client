import { Fragment, useId } from "react"
import "swiper/css"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { HeroItems } from "$data"
import { Image } from "$ui"

const Hero = () => {
  return (
    <Fragment>
      <main className="eachSection my-32 grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col place-items-center space-y-8 px-2">
          <h1 className="mb-4 text-center text-4xl font-bold text-gray-800">Amader Bazar</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt eos voluptatum accusamus totam architecto
            autem nostrum assumenda tempora soluta!
          </p>
        </div>

        <div className="md:col-span-2">
          <Swiper
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
            {HeroItems.map((items) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const id = useId()
              return (
                <SwiperSlide className=" cursor-grab" key={id}>
                  <Image className="h-full w-full rounded-sm    " src={items.img} alt="apple watch photo" />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </main>
    </Fragment>
  )
}

export default Hero
