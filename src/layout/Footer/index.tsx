import { footerContact, footerItems } from "$data/footerData"
import { Logo } from "$layout/logo"

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="body-font text-gray-600">
      <div className="   mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-grow text-center md:mx-0 md:text-left">
          <div className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <Logo className="h-14 w-14" />
            <span className="ml-3 font-kurale text-xl font-bold dark:text-gray-100 lg:text-2xl">Amader Bazar</span>
          </div>
          <p className="mt-2 font-ptSansNarrow text-sm  text-gray-500  dark:text-gray-200">
            Best online shop in Bangladesh.
            <br />
            We provide home delivery service. We have a wide range of products.
          </p>
        </div>
        <div className="-mb-10 mt-10 grid flex-grow grid-cols-2 text-center  md:mt-0 md:pl-20 md:text-left">
          {footerItems?.map((val) => {
            return (
              <div className=" w-full px-4  " key={val.heading}>
                <h2 className="mb-3 font-exo2 text-sm font-medium tracking-widest text-gray-900 dark:text-gray-100">
                  {val.heading}
                </h2>
                <div className="mb-10 list-none">
                  <ul>
                    {val.items?.map((item) => {
                      return (
                        <li key={item.link + item.title}>
                          <a
                            className=" text-gray-600 hover:text-gray-800 dark:text-gray-300"
                            style={{ minWidth: "48px", minHeight: "48px" }}
                            href={item.link}
                            target="_blank"
                            aria-label={`Link to ${item.title}`}
                            rel="noreferrer">
                            {item.title}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-gray-100  dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
          <p className="text-center font-kurale text-sm text-gray-500  sm:text-left ">©{currentYear} Amader Bazar</p>
          <span className="mt-2 inline-flex justify-center gap-x-2 sm:ml-auto sm:mt-0 sm:justify-start">
            {footerContact?.map((item) => {
              return (
                <a className="text-gray-500" href={item.link} key={item.link} target="_blank" rel="noreferrer">
                  <item.icon />
                </a>
              )
            })}
          </span>
        </div>
      </div>
    </footer>
  )
}
