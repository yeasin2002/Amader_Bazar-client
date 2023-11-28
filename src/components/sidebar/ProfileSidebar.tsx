import homeImg from "$assets/illustration/3D/home.png"

import { ChevronRightSquare } from "lucide-react"
import { HTMLAttributes, useState } from "react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface ProfileSidebarProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menuItem: {
    title: string
    url: string
    icon: JSX.Element
  }[]
}

export const ProfileSidebar = ({ menuItem, ...rest }: ProfileSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(menuItem[0].title)

  return (
    <aside
      {...rest}
      className={twMerge(
        "sticky left-0 top-0 flex h-screen   flex-col  items-center justify-between bg-slate-100 px-2 py-10 transition-all ",
        isOpen ? "w-40" : "w-16"
      )}>
      <Link to={"/"}>
        <img src={homeImg} alt="Home" className="h-14 w-14" />
      </Link>
      <div className="my-6 space-y-2">
        {menuItem.map((items) => {
          return (
            <Link
              onClick={() => setActiveMenu(items.title)}
              to={items.url}
              className={twMerge(
                `flex  cursor-pointer gap-x-2  border-b-4 border-white p-2 font-semibold
              text-gray-700 hover:text-gray-900 `,
                activeMenu === items.title && "border-brand-900"
              )}
              key={items.title + items.url}>
              {items.icon}
              {isOpen && items.title}
            </Link>
          )
        })}
      </div>
      <div
        className={twMerge("cursor-pointer rounded-full bg-gray-300 p-3", isOpen && "rotate-180")}
        onClick={() => setIsOpen(!isOpen)}>
        <ChevronRightSquare />
      </div>
    </aside>
  )
}
