import { useId } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

import { FavoriteList, SelectedShopping } from "$components"
import { Logo } from "$layout"
import { UserProfileCheck } from "./UserProfileCheck"

export const Nav = () => {
  const location = useLocation()

  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Shop",
      url: "/shop",
    },
    {
      title: "login",
      url: "/login",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "singup",
      url: "/singup",
    },
  ]
  return (
    <nav
      className="fixed left-0 right-0  top-3 z-10  mx-auto flex w-10/12 items-center justify-between rounded-lg px-6 py-4 xl:py-6 2xl:py-8"
      //  glass effect
      style={{
        background: `rgba(255, 255, 255, 0.2)`,
        boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
        backdropFilter: `blur(5px)`,
        border: `1px solid rgba(255, 255, 255, 0.3)`,
      }}
    >
      <Link to={"/"} className="h-10 w-10 ">
        <Logo className="h-full w-full " />
      </Link>
      <div className="hidden gap-x-6  md:flex ">
        {navItems.map((item) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const uuId = useId()
          const isActive = location.pathname === item.url
          return (
            <NavLink to={item.url} defaultValue={"/"} key={uuId} className={`group relative flex items-center   `}>
              <p className="cursor-pointer text-lg font-semibold text-gray-700  hover:text-gray-900 xl:text-xl 2xl:text-2xl">
                {item.title}
              </p>
              <span
                className={`absolute bottom-0 left-0 h-[0.15rem] w-0 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full ${
                  isActive && "w-full"
                } `}
              />
            </NavLink>
          )
        })}
      </div>

      <div className="flex  items-center gap-x-2">
        <FavoriteList />
        <SelectedShopping />
        <UserProfileCheck />
      </div>
    </nav>
  )
}
