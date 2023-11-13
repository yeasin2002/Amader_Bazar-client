import pd from "$assets/temp/products/menu-product-img-1.jpg"
import { useFavoriteProductStore } from "$store/favoriteProduct.store"
import { Button } from "$ui"
import { Star } from "lucide-react"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { toast } from "sonner"

interface FeatureProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FeatureProduct: FC<FeatureProductProps> = ({ ...rest }) => {
  const { addFavoriteProduct } = useFavoriteProductStore()
  const clickHandler = () => {
    addFavoriteProduct({
      name: "Backpack",
    })
    toast.success("Added to cart", {
      position: "top-left",
    })
  }

  return (
    <div {...rest}>
      <div className="flex w-full overflow-hidden rounded-lg bg-white shadow-lg ">
        <div
          className="w-1/3 bg-cover"
          style={{
            backgroundImage: `url(${pd})`,
          }}
        ></div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white  md:text-2xl">Backpack</h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>

          <div className="item-center mt-2 flex ">
            <Star fill="rgb(248 146 30)" color="rgb(248 146 30" />
          </div>

          <div className="item-center mt-3 flex justify-between">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
            <Button onClick={clickHandler} className="xl:text-lg 2xl:px-4 2xl:py-6">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
