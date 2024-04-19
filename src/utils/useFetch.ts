import { clientEnv, getUsersToken } from "@/lib"

export const $fetch = async (url: string | URL | Request, options?: RequestInit | undefined) => {
  try {
    const req = await fetch(clientEnv.baseUrl + url, options)
    return await req.json()
  } catch (error) {
    console.log("error", error)
    return undefined
  }
}
