import { useLocalStorage } from "$hooks"
import { UserToken } from "$lib"
import { User } from "$types"
import { createContext } from "react"
import { useNavigate } from "react-router-dom"
export const AuthContext = createContext({})
const defaultUser = {
  avatar: "",
  email: "",
  id: "",
  isAdmin: false,
  name: "",
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const { value: userInfo, setLocalStorage: serUserinfo } = useLocalStorage("userInfo", defaultUser)
  const { value: isLoggedIn, setLocalStorage: setIsLoggedIn } = useLocalStorage("isLoggedIn")

  const login = (token: string, redirectTo: string, obg: User) => {
    UserToken.setUsersToken(token)
    setIsLoggedIn(true)
    serUserinfo(obg)
    navigate(redirectTo)
  }

  const logOut = (redirectTo: string) => {
    UserToken.removeUsersToken()
    setIsLoggedIn(false)
    serUserinfo({})
    navigate(redirectTo)
  }

  const values = {
    token: UserToken.getUsersToken,
    setUserToken: UserToken.setUsersToken,
    login,
    logOut,
    isLoggedIn,
    setIsLoggedIn,
    userInfo,
    serUserinfo,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
