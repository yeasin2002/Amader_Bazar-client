import { CategoryItem } from "$components/cards/CategoryItem";
import { Tag } from "lucide-react";

const DisplayCategory = () => {
    return (
        <>
            <section className="space-y-3 px-4 py-6">
                <div>
                    <div className="flex items-center gap-x-2">
                        <span className="bg-yellow-400 p-2   text-white rounded-full grid  place-items-center">
                            <Tag color="black" />
                        </span>
                        <p className="text-xl font-bold text-gray-800">
                            Categories
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-4  ">
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                </div>
            </section>
        </>
    );
};

export default DisplayCategory;
