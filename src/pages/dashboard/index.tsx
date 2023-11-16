import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface dashboardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string
}

export const Dashboard: FC<dashboardProps> = ({ ...rest }) => {
  return <div {...rest}>Dashboard</div>
}
