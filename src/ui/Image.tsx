import { useId } from "react"
import { twMerge } from "tailwind-merge"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  height?: number | string
  width?: number | string
}

export const Image = ({ src, alt = "", className, height = "%100", width = "%100" }: ImageProps) => {
  const uuid = useId()
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      key={alt + uuid}
      height={height}
      width={width}
      className={twMerge("", className)}
      crossOrigin="anonymous"
    />
  )
}
