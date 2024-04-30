import { Contact, Home, Search } from "lucide-react"

export const hiddenInMobileRoute = [
  "/dashboard",
  "/dashboard/order",
  "/dashboard/user",
  "/dashboard/wishlist",
  "/dashboard/products",
  "/dashboard/products",
  "/dashboard/settings",
  "/profile",
  "/profile/wishlist",
  "/profile/orders",
  "/profile/checkout",
  "/profile/products",
  "/profile/settings",
]

export const navItems = [
  {
    title: "Home",
    url: "/",
    icons: <Home />,
  },
  {
    title: "Search",
    url: "/search",
    icons: <Search />,
  },

  {
    title: "Contact",
    url: "/contact",
    icons: <Contact />,
  },
]
