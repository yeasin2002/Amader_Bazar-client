import { CategoryItem } from "$components/cards/CategoryItem";
import { CategoriesData } from "$data/CategoryData";
import { Tag } from "lucide-react";

// Import Swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const DisplayCategory = () => {
    return (
        <section className="space-y-3 px-4 py-6 eachSection">
            <div>
                <div className="flex items-center gap-x-2">
                    <span className="bg-brand-900 p-2   text-white rounded-full grid  place-items-center">
                        <Tag className="text-gray-700" />
                    </span>
                    <p className="text-xl font-bold font-serif text-gray-800">
                        Categories
                    </p>
                </div>
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {CategoriesData.map((val) => {
                        return (
                            <SwiperSlide key={val.name}>
                                <CategoryItem
                                    categoryName={val.name}
                                    icon={val.url}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default DisplayCategory;
