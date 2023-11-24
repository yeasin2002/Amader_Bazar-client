import { useAuth } from "$hooks/index"
import { Button } from "$ui/button"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

type indexProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Profile: FC<indexProps> = ({ ...rest }) => {
  const { isLoggedIn, logOut } = useAuth()
  return (
    <div {...rest} className="container">
      <h1>Profile</h1>
      <p className="text-2xl">{isLoggedIn ? "Logged in" : "Not  Logged In "}</p>

      <Button
        className="mt-10"
        onClick={() => {
          logOut()
        }}>
        Log out
      </Button>
    </div>
  )
}
