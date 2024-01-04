import { User } from "$types"
import { create } from "zustand"
import { combine, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

export const useAuthStore = create(
  persist(
    immer(
      combine(
        {
          isLoggedIn: false,
          token: "",
          userInfo: {
            avatar: "",
            email: "",
            id: "",
            isAdmin: false,
            name: "",
          } as User,
        },
        (set) => {
          return {
            setLoggedIn: (token: string) => {
              set((state) => {
                state.isLoggedIn = true
                state.token = token
              })
            },
            setLoggedOut: () => {
              set((state) => {
                state.isLoggedIn = false
                state.token = ""
              })
            },
            setUserInfo: (value: User) => {
              set((state) => {
                state.userInfo = value
              })
            },
          }
        }
      )
    ),
    { name: "auth" }
  )
)
