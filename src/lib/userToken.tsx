export const setUsersToken = (token: string) => {
  localStorage.setItem("usersToken", token)
}
export const getUsersToken = () => {
  return localStorage.getItem("usersToken")
}
export const removeUsersToken = () => {
  localStorage.removeItem("usersToken")
}

export const UserToken = {
  setUsersToken,
  getUsersToken,
  removeUsersToken,
}
