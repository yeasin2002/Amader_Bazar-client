import { createContext, useContext, useState } from "react"

export const AuthContext = createContext({})
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogIn, setIsLogIn] = useState(false)

  const login = () => {
    setIsLogIn(true)
  }

  const logOut = () => {
    setIsLogIn(false)
  }

  const value = {
    isLogIn,
    setIsLogIn,
    login,
    logOut,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
