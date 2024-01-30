import { useAuth } from "$hooks/index"
import { navItems } from "@/data/routes"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui"
import { LayoutDashboard, LogOutIcon, User2, User2Icon } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export const UserProfileCheck = () => {
  const { setLoggedOut, userInfo } = useAuth()
  const { resolvedTheme } = useTheme()

  return (
    <Popover>
      <PopoverTrigger>
        <User2 className="ml-4" />
      </PopoverTrigger>
      <PopoverContent className="max-w-44 space-y-6 ">
        <Link href={"/profile"} className="flex">
          <User2Icon />
          Profile
        </Link>
        {userInfo?.isAdmin && (
          <Link href={"/dashboard"} className="flex">
            <LayoutDashboard />
            Dashboard
          </Link>
        )}
        <div className="flex flex-col gap-y-2 md:hidden">
          {navItems.map((menu) => {
            return (
              <Link
                href={menu.url}
                key={menu.title + menu.url}
                className="flex items-center gap-x-1 text-gray-200 hover:text-gray-300">
                {menu.icons}
                <span className="text-sm font-medium ">{menu.title}</span>
              </Link>
            )
          })}
        </div>
        <div
          className="flex cursor-pointer items-end gap-x-2  hover:text-gray-500"
          onClick={() => {
            setLoggedOut()
          }}>
          <LogOutIcon />
          Log Out
        </div>
      </PopoverContent>
    </Popover>
  )
}
