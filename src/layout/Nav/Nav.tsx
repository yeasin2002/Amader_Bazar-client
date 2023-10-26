import { Logo } from "$layout";
import { ChevronDown, Heart, ShoppingCart, User2 } from "lucide-react";

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
            className="w-10/12 mx-auto flex  items-center justify-between bg-gray-200 px-6 py-4 rounded-lg
         relative top-4
        "
        >
            <Logo className="w-10 h-10 " />
            <div className="flex gap-x-4  ">
                {navItems.map((item, index) => {
                    return (
                        <span key={index} className="flex items-center ">
                            <p className="font-semibold text-lg text-gray-700 hover:text-gray-900 cursor-pointer">
                                {item.title}
                            </p>
                            <ChevronDown className="text-gray-400" />
                        </span>
                    );
                })}
            </div>
            <div className="flex  items-center gap-x-2">
                <Heart />
                <ShoppingCart />
                <User2 className="ml-4" />
            </div>
        </nav>
    );
};

export default Nav;
