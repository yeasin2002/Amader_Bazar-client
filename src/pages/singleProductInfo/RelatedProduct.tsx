// import shoe from "$assets/temp/products/electronic3.jpg"
// import { ProductItem } from "$components/index"

export const RelatedProduct = () => {
  return (
    <div className="px-10">
      <p className="my-10 text-2xl  font-bold">Related Products</p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4   ">
        {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((val) => {
          return (
            <ProductItem key={val} title="shoe" category="shoe" img={shoe} price={100} discountPrice={90} review="4" />
          )
        })} */}
      </div>
    </div>
  )
}
