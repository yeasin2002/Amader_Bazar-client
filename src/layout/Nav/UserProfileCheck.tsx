import { Popover, PopoverContent, PopoverTrigger } from "$ui"
import { LogOutIcon, User2, User2Icon } from "lucide-react"
import { Link } from "react-router-dom"

export const UserProfileCheck = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <User2 className="ml-4" />
      </PopoverTrigger>
      <PopoverContent className="space-y-6">
        <Link to={"/profile"} className="flex">
          <User2Icon />
          Profile
        </Link>
        <div className="flex">
          <LogOutIcon />
          Log Out
        </div>
      </PopoverContent>
    </Popover>
  )
}
