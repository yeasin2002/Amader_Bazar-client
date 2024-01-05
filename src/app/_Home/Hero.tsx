"use client"

import { Fragment, useId } from "react"
import "swiper/css"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { HeroItems } from "$data"
import { useAuth } from "$hooks/index"
import { cn } from "$lib/utils"

import Image from "next/image"


import { buttonVariants } from "@/ui"
import Link from "next/link"
import { randomDesc } from "./HeroDesc"

export const Hero = () => {
  const { isLoggedIn } = useAuth()

  return (
    <Fragment>
      <main className="eachSection  grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col place-items-center space-y-8 px-2">
            <h1 className="mb-4 text-center font-kurale text-4xl font-bold text-gray-800">Amader Bazar</h1>
            <p>{randomDesc()}</p>
          </div>
          <div className="my-3 mt-8 flex justify-between gap-x-2 ">
            <Link
              href={"/search"}
              // className={cn("mr-2  rounded-xl", { "w-full": !isLoggedIn })}
              className={buttonVariants({
                className: cn("mr-2  rounded-xl", { "w-full": !isLoggedIn }),
              })}>
              Start Shopping
            </Link>
            {!isLoggedIn && (
              <Link
                href={"/singup"}
                //  className={"mr-2 w-full rounded-xl "}
                className={buttonVariants({
                  className: cn("mr-2  rounded-xl", { "w-full": !isLoggedIn }),
                  variant: "dark",
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
            {HeroItems?.map((items) => {
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
