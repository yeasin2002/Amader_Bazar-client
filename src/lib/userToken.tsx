"use client"

export const setUsersToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("usersToken", token)
  }
}
export const getUsersToken = () => {
  if (typeof window !== "undefined") {
    const authToken = localStorage.getItem("auth") || ""
    const state = JSON.parse(authToken)
    return state.state.token
  }
}
export const removeUsersToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("usersToken")
  }
}

export const UserToken = {
  setUsersToken,
  getUsersToken,
  removeUsersToken,
}
