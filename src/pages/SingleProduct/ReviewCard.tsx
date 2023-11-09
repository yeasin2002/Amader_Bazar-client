import { Star } from "lucide-react"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface ReviewsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Reviews: FC<ReviewsProps> = ({ ...rest }) => {
  return (
    <div className="rounded-lg border p-8 dark:border-gray-700" {...rest}>
      <p className="leading-loose text-gray-500 dark:text-gray-400">
        “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus
        expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti
        aspernatur a.”.
      </p>

      <div className="my-5 flex items-center gap-x-2">
        <Star fill="rgb(248 146 30 )" color="rgb(248 146 30 )" size={20} />
        <Star fill="rgb(248 146 30 )" color="rgb(248 146 30 )" size={20} />
      </div>

      <div className="-mx-2 mt-8 flex items-center">
        <img
          className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300 dark:ring-gray-700"
          src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="mx-2">
          <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager at Stech</span>
        </div>
        S
      </div>
    </div>
  )
}
