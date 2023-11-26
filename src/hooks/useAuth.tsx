import { AuthContext } from "$src/context/auth.context"
import { useContext } from "react"

interface AuthContextValue {
  token: string
  login: (token: string, redirectTo?: string) => void
  logOut: (redirectTo: string) => void
  setCustomValue: React.Dispatch<boolean>
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

export const useAuth = () => useContext(AuthContext) as AuthContextValue
