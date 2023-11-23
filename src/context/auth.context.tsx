import { useLocalStorage } from "$hooks"
import { createContext } from "react"
export const AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { value, setLocalStorage, removeLocalStorage, setCustomValue } = useLocalStorage("user")

  const login = (token: string) => {
    setLocalStorage(token)
  }

  const logOut = () => {
    removeLocalStorage()
  }

  const values = {
    value,
    login,
    logOut,
    setCustomValue,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
