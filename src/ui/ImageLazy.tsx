import { useId } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { twMerge } from "tailwind-merge"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  height?: number | string
  width?: number | string
}

export const ImageLazy = ({ src, alt = "", className, height = "%100", width = "%100" }: ImageProps) => {
  const uuid = useId()
  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      width={width}
      effect="blur"
      src={src}
      className={twMerge("", className)}
      key={alt + uuid}
      crossOrigin="anonymous"
    />
  )
}
