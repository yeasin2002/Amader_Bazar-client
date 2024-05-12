"use client"

import { useAuthStore } from "$store"
import { createContext } from "react"
export const AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, token, userInfo, setLoggedIn, setLoggedOut, setUserInfo } = useAuthStore()
  const values = {
    isLoggedIn,
    token,
    userInfo,
    setLoggedIn,
    setLoggedOut,
    setUserInfo,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
