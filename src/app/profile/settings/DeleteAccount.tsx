import { LoadingSpinner } from "@/components"
import { useAuth } from "@/hooks"
import type { SingleUserFullResponse } from "@/interface"
import { getUsersToken } from "@/lib"
import { Button, InputForPassword } from "@/ui"
import { $fetch } from "@/utils"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { type SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"

interface FormValues {
  password: string
}

export const DeleteAccount = () => {
  const { register, formState, handleSubmit } = useForm<FormValues>()
  const { setLoggedOut } = useAuth()
  const router = useRouter()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["delete-account"],
    mutationFn: (value: FormValues) => {
      return $fetch("/auth/delete-account", {
        method: "DELETE",
        body: JSON.stringify(value),
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getUsersToken()}` },
      }) as Promise<SingleUserFullResponse>
    },
  })

  const onSubmitHandler: SubmitHandler<FormValues> = async (data) => {
    const response = await mutateAsync(data)
    console.log("🚀Delete Response:", response)
    if (!response?.success) {
      toast.error("Unable To  Deleted  Account")
      return setLoggedOut()
    }
    toast.success("Account Deleted Successfully")
    return router.push("/")
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-3 ">
      <h3 className="pb-2 pt-10">
        <span className="text-red-600 ">Warning:</span> This action cannot be undone. This will permanently delete your
        account and all of your data.
      </h3>
      <InputForPassword
        register={register("password", {
          required: { value: true, message: "password is required " },
        })}
        label="Current Password"
        error={formState?.errors?.password?.message}
        placeholder="Enter your current password"
      />

      <Button className="w-full bg-red-600 text-white hover:bg-red-700 ">
        {isPending ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          "Delete Account"
        )}
      </Button>
    </form>
  )
}
