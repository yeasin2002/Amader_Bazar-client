import { footerContact, footerItems } from "$data/footerData";
import { Logo } from "$layout/Logo";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <Logo className="w-14 h-14" />
                            <span className="ml-3 text-xl">Amader Bazar</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">
                            Air plant banjo lyft occupy retro adaptogen indego
                        </p>
                    </div>
                    <div className="flex-grow grid grid-cols-3 md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        {footerItems.map((val, index) => {
                            return (
                                <div
                                    className=" w-full px-4"
                                    key={val.heading + index}
                                >
                                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                        {val.heading}
                                    </h2>
                                    <div className="list-none mb-10">
                                        {val.items.map((item) => {
                                            return (
                                                <li
                                                    key={item.link + item.title}
                                                >
                                                    <a
                                                        className="text-gray-600 hover:text-gray-800"
                                                        href={item.link}
                                                    >
                                                        {item.title}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">
                            ©{currentYear} Amader Bazar
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-x-2">
                            {footerContact.map((item, index) => {
                                return (
                                    <a
                                        className="text-gray-500"
                                        href={item.link}
                                        key={item.link + index}
                                    >
                                        <item.icon />
                                    </a>
                                );
                            })}
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
