import { Login } from "$pages"
import { FC } from "react"
import { Outlet } from "react-router-dom"

interface ProtectedProps {}

export const Protected: FC<ProtectedProps> = () => {
  const auth = false
  return auth ? <Login /> : <Outlet />
}
