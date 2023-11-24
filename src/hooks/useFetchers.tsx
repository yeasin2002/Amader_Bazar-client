import { baseUrl } from "$lib/exportEnv"

interface Fetchers {
  url: string
  body?: object
  header?: HeadersInit
  contentType?: string
}

export async function $GET({ url, body, header }: Fetchers) {
  const response = await fetch(baseUrl + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      ...header,
    },
    body: JSON.stringify(body),
  })
  return await response.json()
}

export async function $POST({ url = "", body = {}, header, contentType = "application/json" }: Fetchers) {
  const response = await fetch(baseUrl + url, {
    method: "POST",
    headers: {
      "Content-Type": contentType,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      ...header,
    },
    body: JSON.stringify(body),
  })
  return await response.json()
}
export async function $PUT({ url = "", body = {}, header }: Fetchers) {
  const response = await fetch(baseUrl + url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      ...header,
    },
    body: JSON.stringify(body),
  })
  return await response.json()
}

export async function $PATCH({ url = "", body = {}, header }: Fetchers) {
  const response = await fetch(baseUrl + url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      ...header,
    },
    body: JSON.stringify(body),
  })
  return await response.json()
}

export async function $DELETE({ url = "", header }: Fetchers) {
  const response = await fetch(baseUrl + url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      ...header,
    },
  })
  return await response.json()
}
