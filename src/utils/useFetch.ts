import { clientEnv } from "@/lib"

export const $fetch = async (url: string | URL | Request, options?: RequestInit | undefined) => {
  const req = await fetch(clientEnv.baseUrl + url, options)
  return await req.json()
}
