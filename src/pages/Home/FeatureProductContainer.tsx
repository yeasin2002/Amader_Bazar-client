import { FeatureProduct } from "$components/cards/FeatureProduct"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface MicroProductContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: string
}

export const FeatureProductContainer: FC<MicroProductContainerProps> = ({ heading = "", ...rest }) => {
  return (
    <div {...rest} className="w-full">
      <h4 className="mb-10 text-xl font-bold ">{heading}</h4>
      <div className="w-full space-y-10">
        <FeatureProduct />
        <FeatureProduct />
        <FeatureProduct />
      </div>
    </div>
  )
}
