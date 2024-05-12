import { clientEnv, getUsersToken } from "$lib"

interface Fetchers {
  url: string
  body?: object
  header?: HeadersInit
  contentType?: string
}

export async function $GET({ url, body, header }: Fetchers) {
  const response = await fetch(clientEnv.baseUrl + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getUsersToken()}`,
      ...header,
    },
    body: JSON.stringify(body),
  })
  return await response.json()
}

export async function $POST({ url = "", body = {}, header, contentType = "application/json" }: Fetchers) {
  console.log("🚀 ~ file: useFetchers.tsx:25 ~ $POST ~ body:", body)
  const response = await fetch(clientEnv.baseUrl + url, {
    method: "POST",
    headers: {
      "Content-Type": contentType,
      Authorization: `Bearer ${getUsersToken()}`,
      ...header,
    },
    body: JSON.stringify(body),
  })
  return await response.json()
}
export async function $PUT({ url = "", body = {}, header }: Fetchers) {
  const response = await fetch(clientEnv.baseUrl + url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getUsersToken()}`,
      ...header,
    },
    body: JSON.stringify(body),
  })
  return await response.json()
}

export async function $PATCH({ url = "", body = {}, header }: Fetchers) {
  const response = await fetch(clientEnv.baseUrl + url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getUsersToken()}`,
      ...header,
    },
    body: JSON.stringify(body),
  })
  return await response.json()
}

export async function $DELETE({ url = "", header }: Fetchers) {
  const response = await fetch(clientEnv.baseUrl + url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getUsersToken()}`,
      ...header,
    },
  })
  return await response.json()
}
