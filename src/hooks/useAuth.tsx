/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthContext } from "$src/context/auth.context"
import { useContext } from "react"

interface AuthContextValue {
  token: string
  login: (token: string) => void
  logOut: () => void
  setCustomValue: React.Dispatch<any>
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

export const useAuth = () => useContext(AuthContext) as AuthContextValue
