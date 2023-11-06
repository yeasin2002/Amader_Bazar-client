import { useToast } from "$ui/use-toast";
import { Star } from "lucide-react";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ProductAtaGlanceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProductAtaGlance: FC<ProductAtaGlanceProps> = ({ ...rest }) => {
  const { toast } = useToast();
  const clickHandler = () => {
    toast({
      title: "Success",
      description: "Added To Card",
    });
  };
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
            <button
              onClick={clickHandler}
              className="transform rounded bg-gray-800 px-2 py-1 text-xs font-bold uppercase text-white transition-colors duration-300 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
