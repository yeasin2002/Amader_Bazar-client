import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { ProductTable } from "./ProductTable"
import { UserProfileInfo } from "./useProfileInfo"

type indexProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Profile: FC<indexProps> = ({ ...rest }) => {
  // const { isLoggedIn, logOut } = useAuth()
  return (
    <div {...rest} className="container">
      <UserProfileInfo />
      <div>
        <ProductTable />
      </div>
    </div>
  )
}
