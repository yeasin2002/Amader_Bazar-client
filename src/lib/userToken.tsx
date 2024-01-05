"use client"
export const setUsersToken = (token: string) => {
  localStorage.setItem("usersToken", token)
}
export const getUsersToken = () => {
  const authToken = localStorage.getItem("auth") || ""
  const state = JSON.parse(authToken)

  return state.state.token
}
export const removeUsersToken = () => {
  localStorage.removeItem("usersToken")
}

export const UserToken = {
  setUsersToken,
  getUsersToken,
  removeUsersToken,
}
