import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface ProductDataProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const ProductData: FC<ProductDataProps> = ({ page, setPage, ...rest }) => {
  return (
    <div className="flex  w-full flex-col  items-center justify-center" {...rest}>
      <div className="xs:mt-0 mt-2 inline-flex gap-x-3">
        <button
          type="button"
          className="flex h-10 items-center justify-center rounded-s bg-gray-800 px-4 text-base font-medium text-white hover:bg-gray-900 "
          onClick={() => {
            if (page === 0) return
            setPage(page - 1)
          }}>
          Prev
        </button>
        <button
          type="button"
          className="flex h-10 items-center justify-center rounded-e border-0 border-s border-gray-700 bg-gray-800 px-4 text-base font-medium text-white hover:bg-gray-900 "
          onClick={() => {
            setPage(page + 1)
          }}>
          Next
        </button>
      </div>
    </div>
  )
}
