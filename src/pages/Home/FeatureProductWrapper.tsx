import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { FeatureProductContainer } from "./FeatureProductContainer"

type MicroProductWrapperProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const FeatureProductWrapper: FC<MicroProductWrapperProps> = ({ ...rest }) => {
  return (
    <div {...rest} className="grid  w-full grid-cols-1 gap-x-1 gap-y-24  px-4 md:grid-cols-2 lg:grid-cols-3 ">
      <FeatureProductContainer heading="Feature Product" />
      <FeatureProductContainer heading="Best Sell" />
      <FeatureProductContainer heading="Best For you" />
    </div>
  )
}
