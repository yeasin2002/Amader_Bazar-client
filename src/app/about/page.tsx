import { FC, HTMLAttributes } from "react"

type AboutProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const About: FC<AboutProps> = ({ ...rest }) => {
  return <div {...rest}>index</div>
}
