import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

type indexProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const index: FC<indexProps> = ({ ...rest }) => {
  return <div {...rest}>FAQ</div>
}
