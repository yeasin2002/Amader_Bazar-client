import { AuthContext } from "$src/context/auth.context"
import { User } from "$types"
import { useContext } from "react"

interface AuthContextValue {
  token: string
  login: (token: string, redirectTo: string, obg?: User) => void
  logOut: (redirectTo: string) => void
  setCustomValue: React.Dispatch<string>
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
  userInfo: User
  serUserinfo: (value: object) => void
}

export const useAuth = () => useContext(AuthContext) as AuthContextValue
