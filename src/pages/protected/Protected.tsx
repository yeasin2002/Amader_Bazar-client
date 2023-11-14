import { Login } from "$pages"
import { FC } from "react"
import { Outlet } from "react-router-dom"

export const Protected: FC = () => {
  const auth = false
  return auth ? <Login /> : <Outlet />
}
