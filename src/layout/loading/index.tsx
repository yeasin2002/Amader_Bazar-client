import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

type LoadingProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Loading: FC<LoadingProps> = ({ ...rest }) => {
  return <div {...rest}>loading...............</div>
}
