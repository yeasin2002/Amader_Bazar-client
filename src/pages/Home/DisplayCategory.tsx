import { CategoryItem } from "$components/cards/CategoryItem"
import { CategoriesData } from "$data/CategoryData"
import { Tag } from "lucide-react"

// Import Swiper
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const DisplayCategory = () => {
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
          className="mySwiper !cursor-grab"
        >
          {CategoriesData.map((val) => {
            return (
              <SwiperSlide key={val.name}>
                <CategoryItem categoryName={val.name} icon={val.url} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default DisplayCategory
