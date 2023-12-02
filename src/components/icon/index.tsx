import { FC, SVGProps } from "react"
interface SVGProp extends SVGProps<SVGSVGElement> {}

export function People(props: SVGProp) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path fill="currentColor" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Z"></path>
      <path
        fill="currentColor"
        d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"></path>
    </svg>
  )
}

export const Facebook = () => {
  return (
    <svg
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="h-5 w-5"
      viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    </svg>
  )
}

export function LoadingSpinner(props: SVGProp) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
        opacity=".5"></path>
      <path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">
        <animateTransform
          attributeName="transform"
          dur="1s"
          from="0 12 12"
          repeatCount="indefinite"
          to="360 12 12"
          type="rotate"></animateTransform>
      </path>
    </svg>
  )
}

export const FullStar: FC<SVGProp> = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      className="mr-1 h-4 w-4 text-brand-900"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  )
}

interface OutlineStarProps extends SVGProps<SVGSVGElement> {}
export const OutlineStar: FC<OutlineStarProps> = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      className="mr-1 h-4 w-4 text-gray-300 dark:text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  )
}
