import { navItems } from "@/data/routes"
import { useAuth } from "@/hooks/"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui"
import { LayoutDashboard, LogOutIcon, User2, User2Icon } from "lucide-react"
import Link from "next/link"

export const UserProfileCheck = () => {
  const { setLoggedOut, userInfo } = useAuth()

  return (
    <Popover>
      <PopoverTrigger>
        <User2 className="navIcons" aria-label="user profile" />
      </PopoverTrigger>
      <PopoverContent className="max-w-44 space-y-6 ">
        <Link href={"/profile"} className="flex">
          <User2Icon className="navIcons" />
          Profile
        </Link>
        {userInfo?.isAdmin && (
          <Link href={"/dashboard"} className="flex">
            <LayoutDashboard className="navIcons" />
            Dashboard
          </Link>
        )}
        <div className="flex flex-col gap-y-2 md:hidden">
          {navItems.map((menu) => {
            return (
              <Link href={menu.url} key={menu.title + menu.url} className="flex items-center gap-x-1 text-gray-800">
                {menu.icons}
                <span className="text-sm font-medium ">{menu.title}</span>
              </Link>
            )
          })}
        </div>
        <div className="flex cursor-pointer items-end gap-x-2  hover:text-gray-500" onClick={() => setLoggedOut()}>
          <LogOutIcon className="navIcons" />
          Log Out
        </div>
      </PopoverContent>
    </Popover>
  )
}
