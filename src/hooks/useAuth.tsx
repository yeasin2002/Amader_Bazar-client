"use client"

import { AuthContext } from "$src/context/auth.context"
import type { User } from "$types"
import { useContext } from "react"

interface AuthContextValue {
  isLoggedIn: boolean
  token: string
  userInfo: User
  setLoggedIn: (token: string) => void
  setLoggedOut: () => void
  setUserInfo: (value: User) => void
}

export const useAuth = () => useContext(AuthContext) as AuthContextValue
