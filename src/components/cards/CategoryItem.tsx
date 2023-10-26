import image from "$assets/temp/category/book.svg";
import Image from "$ui/Image";

export const CategoryItem = () => {
    return (
        <div className=" flex-col into-center py-4">
            <span className="rounded-full bg-blue-400 w-28 h-28 into-center ">
                <Image src={image} alt={""} className="w-full h-full p-4" />
            </span>
            <h2 className="font-bold text-xl text-slate-900 mt-4 mb-2">
                Category Name
            </h2>
            <p className="font-medium text-base text-slate-600">3 Product</p>
        </div>
    );
};
