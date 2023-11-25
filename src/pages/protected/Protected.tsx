import { useAuth } from "$hooks"
import { Login } from "$pages"
import { FC } from "react"
import { Outlet } from "react-router-dom"

export const Protected: FC = () => {
  const { isLoggedIn } = useAuth()

  return !isLoggedIn ? <Login /> : <Outlet />
}
