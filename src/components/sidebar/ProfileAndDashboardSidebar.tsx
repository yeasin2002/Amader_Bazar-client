"use client"

import homeImg from "@/assets/illustration/3D/home.png"
import { ChevronRightSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment, HTMLAttributes, useState } from "react"
import { twMerge } from "tailwind-merge"
import { ThemeSwitcherLegacy } from "../global"

interface ProfileAndDashboardSidebarProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menuItem: {
    title: string
    url: string
    icon: JSX.Element
  }[]
}

export const ProfileAndDashboardSidebar = ({ menuItem, ...rest }: ProfileAndDashboardSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const LargeDevice = (
    <aside
      {...rest}
      className={twMerge(
        "sticky left-0 top-0 hidden h-screen   flex-col  items-center justify-between bg-slate-100 px-2 py-10 transition-all  md:flex ",
        "dark:bg-gray-600",
        isOpen ? "w-40" : "w-16"
      )}>
      <Link href={"/"}>
        <Image src={homeImg} alt="Home" className="h-14 w-14" />
      </Link>
      <div className="my-6 space-y-2">
        {menuItem?.map((items) => {
          return (
            <Link
              href={items.url}
              className={twMerge(
                `flex  cursor-pointer gap-x-2  border-b-4 border-white p-2 font-semibold
              text-gray-700 hover:text-gray-900 dark:text-gray-100 `,
                pathname === items.url && "border-brand-900"
              )}
              key={items.title + items.url}>
              {items.icon}
              {isOpen && items.title}
            </Link>
          )
        })}
      </div>

      <div className="flex flex-col items-end justify-center gap-y-2 ">
        <ThemeSwitcherLegacy className="p-4" />
        <div
          className={twMerge("cursor-pointer rounded-full bg-gray-300 p-3  dark:bg-gray-950", isOpen && "rotate-180")}
          onClick={() => setIsOpen(!isOpen)}>
          <ChevronRightSquare />
        </div>
      </div>
    </aside>
  )
  const MobileNav = (
    <aside className=" glass-effect fixed bottom-3 left-0  right-0 z-10  mx-auto flex w-10/12 items-center justify-between rounded-lg px-6 py-4 md:hidden ">
      {menuItem?.map((item) => {
        return (
          <Link
            key={item.title + item.url}
            href={item.url}
            className={twMerge(
              `flex  cursor-pointer gap-x-2  border-b-4 border-white p-2 font-semibold
              text-gray-700 hover:text-gray-900 `,
              pathname === item.url && "border-brand-900"
            )}>
            <p className="flex flex-col items-center justify-center gap-y-2 font-fresca capitalize">
              {item.icon}
              {item.title}
            </p>
          </Link>
        )
      })}
    </aside>
  )

  return (
    <Fragment>
      {LargeDevice}
      {MobileNav}
    </Fragment>
  )
}
