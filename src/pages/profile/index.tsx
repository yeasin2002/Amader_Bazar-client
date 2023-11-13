import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface indexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Profile: FC<indexProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <h1>Profile</h1>
    </div>
  )
}
