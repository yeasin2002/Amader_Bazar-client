import { useFavoriteProductStore } from "$store/favoriteProduct.store";
import { Button } from "$ui";
import { Star } from "lucide-react";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { toast } from "sonner";

interface FeatureProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FeatureProduct: FC<FeatureProductProps> = ({ ...rest }) => {
  const { favoriteProduct, addFavoriteProduct } = useFavoriteProductStore();
  const clickHandler = () => {
    addFavoriteProduct({
      name: "Backpack",
    });
    toast.success("Added to cart", {
      position: "top-left",
    });
  };

  console.log(favoriteProduct);
  return (
    <div {...rest}>
      <div className="flex w-full overflow-hidden rounded-lg bg-white shadow-lg ">
        <div
          className="w-1/3 bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
          }}
        ></div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">Backpack</h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>

          <div className="item-center mt-2 flex ">
            <Star fill="rgb(248 146 30)" color="rgb(248 146 30" />
          </div>

          <div className="item-center mt-3 flex justify-between">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
            <Button onClick={clickHandler}>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
