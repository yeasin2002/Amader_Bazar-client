import { Fragment, useId } from "react"
import "swiper/css"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { HeroItems } from "$data"
import { useAuth } from "$hooks/index"
import { cn } from "$lib/utils"
import { Image, buttonVariants } from "$ui"
import { Link } from "react-router-dom"
import { randomDesc } from "./HeroDesc"

const Hero = () => {
  const { isLoggedIn } = useAuth()
  // const isLoggedIn = false
  return (
    <Fragment>
      <main className="eachSection my-32 grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col place-items-center space-y-8 px-2">
            <h1 className="mb-4 text-center text-4xl font-bold text-gray-800">Amader Bazar</h1>
            <p className="font-kurale">{randomDesc()}</p>
          </div>
          <div className="my-3 mt-8 flex justify-between gap-x-2 ">
            <Link
              to={"/search"}
              className={buttonVariants({
                variant: "default",
                className: cn("mr-2  rounded-xl", { "w-full": !isLoggedIn }),
              })}>
              Start Shopping
            </Link>
            {!isLoggedIn && (
              <Link
                to={"/singup"}
                className={buttonVariants({
                  variant: "dark",
                  className: "mr-2 w-full rounded-xl",
                })}>
                Sing UP
              </Link>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
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
