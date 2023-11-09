import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface RatingGraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RatingGraph: FC<RatingGraphProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <div className="mb-2 flex items-center">
        <svg
          className="mr-1 h-4 w-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="mr-1 h-4 w-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="mr-1 h-4 w-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="mr-1 h-4 w-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="mr-1 h-4 w-4 text-gray-300 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
      <div className="mt-4 flex items-center">
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          5 star
        </a>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
          <div className="h-5 w-4/5 rounded bg-yellow-300"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
      </div>
      <div className="mt-4 flex items-center">
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          4 star
        </a>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
          <div className="h-5 w-[17%] rounded bg-yellow-300"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
      </div>
      <div className="mt-4 flex items-center">
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          3 star
        </a>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
          <div className="h-5 w-[8%] rounded bg-yellow-300"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
      </div>
      <div className="mt-4 flex items-center">
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          2 star
        </a>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
          <div className="h-5 w-[4%] rounded bg-yellow-300"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
      </div>
      <div className="mt-4 flex items-center">
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          1 star
        </a>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
          <div className="h-5 w-[1%] rounded bg-yellow-300"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
      </div>
    </div>
  )
}
