"use client"

import { Rating } from "@smastrom/react-rating"

import { useMutation } from "@tanstack/react-query"
import { X } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"

import { revalidateProductReview } from "@/actions"
import { useAuth } from "@/hooks"
import { cn, getUsersToken } from "@/lib"
import { Button, Textarea } from "@/ui"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/ui/alert-dialog"
import { $fetch } from "@/utils"

import type { CommonResponse } from "@/interface"
import "@smastrom/react-rating/style.css"

interface Props {
  children: React.ReactNode
  className?: string
  id: string
}

export const AddReviews = ({ children, className, id, ...rest }: Props) => {
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(0)

  const { isLoggedIn } = useAuth()
  const { mutateAsync } = useMutation({
    mutationKey: ["addReview", id],
    mutationFn: ({ id, rating, desc }: { id: string; rating: number; desc: string }) => {
      return $fetch("/product/rating", {
        method: "POST",
        body: JSON.stringify({ productId: id, rating, desc }),
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getUsersToken()}` },
      }) as Promise<CommonResponse>
    },
  })

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!description || rating === 0) {
      return toast.error("provide  description and rating", { position: "bottom-right" })
    }

    const response = await mutateAsync({ id, rating, desc: description })
    if (!response.success) return toast.error(response.message)
    revalidateProductReview()
    return toast.success("Review added successfully")
  }

  const mailElement = (
    <div {...rest}>
      <AlertDialog>
        <AlertDialogTrigger className={cn(className)}>{children}</AlertDialogTrigger>

        <AlertDialogContent>
          <div className="flex justify-end">
            <AlertDialogCancel className="p-4">
              <X />
            </AlertDialogCancel>
          </div>

          <AlertDialogTitle className="w-full rounded-t-lg p-5 font-kurale text-2xl font-bold">
            Add Ratings
          </AlertDialogTitle>
          <form onSubmit={submitHandler}>
            <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your experience"
              className="mt-5 min-h-20  w-full py-2"
            />
            <Button className="mt-5 w-full" type="submit">
              submit
            </Button>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )

  return isLoggedIn ? mailElement : <div></div>
}
