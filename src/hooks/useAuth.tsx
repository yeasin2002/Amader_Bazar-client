import { AuthContext } from "$src/context"
import { useContext } from "react"

export const useAuth = () => useContext(AuthContext)
