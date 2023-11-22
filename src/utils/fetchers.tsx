import { baseUrl } from "$lib/exportEnv"

const defaultHeader = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
}

interface Fetchers {
  url: string
  body?: object
  header?: HeadersInit
}

export async function $GET({ url, body, header = defaultHeader }: Fetchers) {
  const response = await fetch(baseUrl + url, {
    method: "GET",
    headers: header,
    body: JSON.stringify(body),
  })
  return await response.json()
}

export async function $POST({ url = "", body = {}, header = defaultHeader }: Fetchers) {
  const response = await fetch(url, {
    method: "POST",
    headers: header,
    body: JSON.stringify(body),
  })
  return await response.json()
}
export async function $PUT({ url = "", body = {}, header = defaultHeader }: Fetchers) {
  const response = await fetch(url, {
    method: "PUT",
    headers: header,
    body: JSON.stringify(body),
  })
  return await response.json()
}

export async function $PATCH({ url = "", body = {}, header = defaultHeader }: Fetchers) {
  const response = await fetch(url, {
    method: "PATCH",
    headers: header,
    body: JSON.stringify(body),
  })
  return await response.json()
}

export async function $DELETE({ url = "", header = defaultHeader }: Fetchers) {
  const response = await fetch(url, {
    method: "DELETE",
    headers: header,
  })
  return await response.json()
}
