import { Search } from "lucide-react"
import { DetailedHTMLProps, Fragment } from "react"
import { twMerge } from "tailwind-merge"
interface SearchInputProps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  inputClassName?: string
}

export const SearchInput = ({ inputClassName, ...rest }: SearchInputProps) => {
  return (
    <Fragment>
      <div className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <Search />
          </div>
          <input
            {...rest}
            type="text"
            id="simple-search"
            className={twMerge(
              inputClassName,
              "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            )}
            placeholder="Search branch name..."
            required
          />
        </div>
      </div>
    </Fragment>
  )
}
