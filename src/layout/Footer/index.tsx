import { Logo } from "$layout/Logo";
import { Facebook, Globe, LinkIcon } from "lucide-react";
import type { FunctionComponent } from "react";

const contactLInk = [
    {
        title: "facebook",
        Icon: <Facebook />,
        link: "/",
    },
    {
        title: "linkedin",
        Icon: <LinkIcon />,
        link: "/",
    },
    {
        title: "website ",
        Icon: <Globe />,
        link: "/",
    },
];

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <div>
            <footer className="bg-white ">
                <div className="container mx-auto flex flex-col items-center justify-between space-y-4 p-6 sm:flex-row sm:space-y-0">
                    <Logo className="w-14 h-14" />
                    <p className="text-sm text-gray-600 ">
                        © Copyright 2021. All Rights Reserved.
                    </p>
                    <div className="-mx-2 flex">
                        {contactLInk.map((val) => {
                            return (
                                <>
                                    <a
                                        key={val.title + val.link}
                                        href={val.link}
                                        className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500  "
                                        aria-label="Reddit"
                                    >
                                        {val.Icon}
                                    </a>
                                </>
                            );
                        })}
                    </div>
                </div>
            </footer>
        </div>
    );
};
