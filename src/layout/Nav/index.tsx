"use client"

import { FavoriteList, SelectedShopping } from "$components"
import { useAuth } from "$hooks/useAuth"
import { Logo } from "$layout"
import { buttonVariants } from "$ui/button"
import { ThemeSwitcher } from "@/components/global"
import { hiddenInMobileRoute as hiddenRoute, navItems } from "@/data/routes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment } from "react"
import { UserProfileCheck } from "./UserProfileCheck"

export const Nav = () => {
  const { isLoggedIn } = useAuth()
  const pathName = usePathname()

  return (
    <Fragment>
      {!hiddenRoute.includes(pathName) && (
        <Fragment>
          <nav className="glass-effect fixed left-0  right-0 top-3  z-10 mx-auto flex w-10/12 items-center justify-between rounded-lg px-6 py-4 xl:py-6 2xl:py-8">
            <Link href={"/"} className="h-10 w-10 ">
              <Logo className="h-full w-full " />
            </Link>
            <div className="hidden gap-x-6  md:flex ">
              {navItems?.map((item) => {
                const isActive = pathName === item.url
                return (
                  <Link
                    href={item.url}
                    defaultValue={"/"}
                    key={item.title}
                    className={`group relative flex items-center   `}>
                    <p className="  cursor-pointer font-kurale text-lg font-semibold text-gray-700  hover:text-gray-900 dark:text-gray-200 xl:text-xl 2xl:text-2xl">
                      {item.title}
                    </p>
                    <span
                      className={`absolute bottom-0   left-0 h-[0.15rem] w-0 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full dark:bg-brand-500 ${
                        isActive && "w-full"
                      } `}
                    />
                  </Link>
                )
              })}
            </div>
            <div className="flex  items-center gap-x-2">
              <ThemeSwitcher />
              <FavoriteList />
              <SelectedShopping />
              {isLoggedIn && <UserProfileCheck />}
              {isLoggedIn || (
                <Link
                  href={"/login"}
                  className={buttonVariants({ variant: "default", className: " text-gray-900", font: "playpenSans" })}>
                  Log In
                </Link>
              )}
            </div>
          </nav>
        </Fragment>
      )}
    </Fragment>
  )
}
