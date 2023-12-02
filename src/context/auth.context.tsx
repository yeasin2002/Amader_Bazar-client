import { useLocalStorage } from "$hooks"
import { UserToken } from "$lib/userToken"
import { createContext } from "react"
import { useNavigate } from "react-router-dom"
export const AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { value: userInfo, setLocalStorage: serUserinfo } = useLocalStorage("userInfo")
  const { value: isLoggedIn, setLocalStorage: setIsLoggedIn } = useLocalStorage("isLoggedIn")
  const navigate = useNavigate()

  const login = (token: string, redirectTo: string) => {
    // setLocalStorage(token)
    UserToken.setUsersToken(token)
    setIsLoggedIn(true)
    navigate(redirectTo)
  }

  const logOut = (redirectTo: string) => {
    UserToken.removeUsersToken()
    setIsLoggedIn(false)
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
