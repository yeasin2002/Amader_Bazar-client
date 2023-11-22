import { twMerge } from "tailwind-merge"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
}

export const Image = ({ src, alt = "", className }: ImageProps) => {
  return <img src={src} alt={alt} loading="lazy" key={alt} className={twMerge("", className)} crossOrigin="anonymous" />
}
