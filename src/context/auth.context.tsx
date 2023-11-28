import { useLocalStorage } from "$hooks"
import { createContext } from "react"
import { useNavigate } from "react-router-dom"
export const AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { value, setLocalStorage, removeLocalStorage, setCustomValue } = useLocalStorage("usersToken")
  const { value: userInfo, setLocalStorage: serUserinfo } = useLocalStorage("userInfo")
  const { value: isLoggedIn, setLocalStorage: setIsLoggedIn } = useLocalStorage("isLoggedIn")
  const navigate = useNavigate()

  const login = (token: string, redirectTo: string) => {
    setLocalStorage(token)
    setIsLoggedIn(true)
    navigate(redirectTo)
  }

  const logOut = (redirectTo: string) => {
    removeLocalStorage()
    setCustomValue(false)
    setIsLoggedIn(false)
    navigate(redirectTo)
  }

  const values = {
    token: value,
    login,
    logOut,
    setCustomValue,
    isLoggedIn,
    setIsLoggedIn,
    userInfo,
    serUserinfo,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
