"use client"

import type { SingleUserFullResponse } from "@/interface"
import { cn, getUsersToken } from "@/lib"
import { $fetch } from "@/utils"
import { useMutation } from "@tanstack/react-query"
import { revalidatePath } from "next/cache"
import type { DetailedHTMLProps, HTMLAttributes } from "react"
import toast from "react-hot-toast"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  userId: string
  isBanned: boolean
}

export const UserBandAndDeleteAction = ({ isBanned, userId, ...rest }: Props) => {
  const banAndUnbanned = useMutation({
    mutationKey: ["ban-or-unbanned"],
    mutationFn: (isBannedPreValue: boolean) => {
      return $fetch("/dashboard/ban-or-unbanned", {
        method: "PATCH",
        body: JSON.stringify({ isBannedPreValue }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getUsersToken()}`,
        },
      })
    },
  })

  const deleteUser = useMutation({
    mutationKey: ["ban-or-unbanned"],
    mutationFn: (id: string) => {
      return $fetch(`/dashboard/user/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getUsersToken()}`,
        },
      }) as Promise<SingleUserFullResponse>
    },
  })

  const handleBannedOrUnbanned = async () => {
    const response = await banAndUnbanned.mutateAsync(isBanned)
    console.log("🚀 ~ BannedOrUnbanned ~ response:", response)
  }
  const handleUserDelete = async () => {
    const response = await deleteUser.mutateAsync(userId)
    if (response.success) {
      toast.success("User Deleted Successfully")
      return revalidatePath("users")
    }
    return toast.error("Failed to delete user")
  }

  return (
    <div {...rest}>
      <h5 className="mb-2 mt-4 text-lg font-bold text-gray-950 dark:text-gray-300 ">Actions</h5>
      <div className="flex items-center  gap-x-3">
        <button type="button" onClick={handleUserDelete} className="rounded-md bg-red-500 px-4 py-2 text-white">
          {deleteUser.isPending ? "Deleting...." : "Delete User"}
        </button>
        <button
          type="button"
          onClick={handleBannedOrUnbanned}
          className={cn("rounded-md bg-rose-500 px-4 py-2 text-white")}>
          {banAndUnbanned.isPending ? "Loading..........." : "Ban User"}
        </button>
      </div>
    </div>
  )
}
