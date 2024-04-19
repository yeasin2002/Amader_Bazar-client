import { Provider } from "@/components/global/Provider"
import { Nav } from "@/layout"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NextTopLoader from "nextjs-toploader"

import "../styles/globals.css"
import "../styles/styles.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amader Bazar",
  description: "Best online shop in Bangladesh.We provide home delivery service. We have a wide range of products.   ",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + "dark:text-gray-200"}>
        <NextTopLoader color="#f8921e" showSpinner={false} />
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  )
}
