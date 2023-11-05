import { useToast } from "$ui/use-toast";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ProductAtaGlanceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProductAtaGlance: FC<ProductAtaGlanceProps> = ({ ...rest }) => {
  const { toast } = useToast();
const clickHandler = () => { 
    toast({
        title: "Scheduled: Catch up",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
 }
  return (
    <div {...rest}>
      <div className="flex max-w-md overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
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

          <div className="item-center mt-2 flex">
            <svg className="h-5 w-5 fill-current text-gray-500" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
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
