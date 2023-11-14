import { FC, HTMLAttributes } from "react"

type registerProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Register: FC<registerProps> = ({ ...rest }) => {
  return <div {...rest}>register</div>
}
