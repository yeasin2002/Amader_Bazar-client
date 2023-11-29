import { useAuth } from "$hooks/index"
import { Popover, PopoverContent, PopoverTrigger } from "$ui"
import { LayoutDashboard, LogOutIcon, User2, User2Icon } from "lucide-react"
import { Link } from "react-router-dom"

export const UserProfileCheck = () => {
  const { userInfo } = useAuth()
  return (
    <Popover>
      <PopoverTrigger>
        <User2 className="ml-4" />
      </PopoverTrigger>
      <PopoverContent className="space-y-6 ">
        <Link to={"/profile"} className="flex">
          <User2Icon />
          Profile
        </Link>
        {userInfo.isAdmin && (
          <Link to={"/dashboard"} className="flex">
            <LayoutDashboard />
            Dashboard
          </Link>
        )}
        <div className="flex">
          <LogOutIcon />
          Log Out
        </div>
      </PopoverContent>
    </Popover>
  )
}
