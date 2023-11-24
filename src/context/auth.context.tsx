import { useLocalStorage } from "$hooks"
import { createContext } from "react"
export const AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { value, setLocalStorage, removeLocalStorage, setCustomValue } = useLocalStorage("usersToken")
  const { value: isLoggedIn, setLocalStorage: setIsLoggedIn } = useLocalStorage("isLoggedIn")

  const login = (token: string) => {
    setLocalStorage(token)
    setIsLoggedIn(true)
  }

  const logOut = () => {
    removeLocalStorage()
    isLoggedIn.setCustomValue(false)
    setIsLoggedIn(false)
  }

  const values = {
    token: value,
    login,
    logOut,
    setCustomValue,
    isLoggedIn,
    setIsLoggedIn,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
