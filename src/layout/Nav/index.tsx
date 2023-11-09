import { useId } from "react";
import { NavLink } from "react-router-dom";

import { FavoriteList, SelectedShopping } from "$components/index";
import { Logo } from "$layout";

import { UserProfileCheck } from "./UserProfileCheck";

const Nav = () => {
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
            title: "About",
            url: "/about",
        },
        {
            title: "Contact",
            url: "/contact",
        },
    ];
    return (
      <nav
        className="fixed left-0 right-0  top-3 z-10  mx-auto flex w-10/12 items-center justify-between rounded-lg px-6 py-4"
        //  glass effect
        style={{
          background: `rgba(255, 255, 255, 0.2)`,
          boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
          backdropFilter: `blur(5px)`,
          border: `1px solid rgba(255, 255, 255, 0.3)`,
        }}
      >
        <Logo className="h-10 w-10 " />
        <div className="hidden gap-x-6  md:flex ">
          {navItems.map((item) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const uuId = useId();
            return (
              <NavLink to={item.url} defaultValue={"/"} key={uuId} className="group relative flex items-center">
                <p className="cursor-pointer text-lg font-semibold text-gray-700 hover:text-gray-900">{item.title}</p>
                <span className="absolute -bottom-1  left-0 h-1 w-0 bg-teal-900 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            );
          })}
        </div>
        <div className="flex  items-center gap-x-2">
          <FavoriteList />
          <SelectedShopping />
          <UserProfileCheck />
        </div>
      </nav>
    );
};

export default Nav;
