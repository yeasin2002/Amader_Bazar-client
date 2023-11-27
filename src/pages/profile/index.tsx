import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { ProductTable } from "./ProductTable"
import { ProfileSidebar } from "./ProfileSidebar"
import { UserProfileInfo } from "./useProfileInfo"

type indexProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Profile: FC<indexProps> = ({ ...rest }) => {
  // const { isLoggedIn, logOut } = useAuth()
  return (
    <section {...rest} className=" flex h-full w-full ">
      <ProfileSidebar />
      <div className="w-full px-2">
        <UserProfileInfo />
        <div>
          <ProductTable />
        </div>
      </div>
    </section>
  )
}
