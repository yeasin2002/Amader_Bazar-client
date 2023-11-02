import { CategoryItem } from "$components/cards/CategoryItem";
import { Tag } from "lucide-react";

// import { useId } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

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
            <div
            className="grid grid-cols-4 "
            >
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </div>
          
        </section>
    );
};

export default DisplayCategory;
