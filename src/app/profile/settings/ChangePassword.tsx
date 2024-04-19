import { LoadingSpinner } from "@/components"
import type { SingleUserFullResponse } from "@/interface"
import { getUsersToken } from "@/lib"
import { Button, InputForPassword } from "@/ui"
import { $fetch } from "@/utils"
import { useMutation } from "@tanstack/react-query"
import { type SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"

interface FormValues {
  password: string
  newPassword: string
  confirmPassword: string
}

export const ChangePassword = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["change-password"],
    mutationFn: (value: FormValues) => {
      return $fetch("/auth/change-password", {
        method: "PUT",
        body: JSON.stringify(value),
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getUsersToken()}` },
      }) as Promise<SingleUserFullResponse>
    },
  })

  const { register, formState, handleSubmit, getValues } = useForm<FormValues>()

  const onSubmitHandler: SubmitHandler<FormValues> = async (data) => {
    const response = await mutateAsync(data)
    console.log("🚀  response :", response)

    if (response.success) return toast.success("Password Changed Successfully", { position: "top-right" })
    return toast.error("Unable To Change Password", { position: "top-right" })
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-3 pt-10">
      <InputForPassword
        register={register("password", {
          required: { value: true, message: "password is required " },
        })}
        label="Current Password"
        error={formState?.errors?.password?.message}
        placeholder="Enter your current password"
        className="*: dark:placeholder:text-gray-900 "
      />
      <InputForPassword
        register={register("newPassword", {
          required: { value: true, message: "New Password is required " },
        })}
        label="New Password"
        error={formState?.errors?.newPassword?.message}
        placeholder="Enter your new password"
        className="*: dark:placeholder:text-gray-900 "
      />
      <InputForPassword
        register={register("confirmPassword", {
          required: {
            value: true,
            message: "Confirm Password is required ",
          },
          validate: (value) => {
            return value === getValues("newPassword") ? true : "Confirm Password din't match with new password"
          },
        })}
        label="Confirm Password"
        error={formState?.errors?.confirmPassword?.message}
        placeholder="Confirm  your new password"
        className="*: dark:placeholder:text-gray-900 "
      />
      <Button className="w-full ">
        {isPending ? (
          <span>
            <LoadingSpinner />
          </span>
        ) : (
          "Change Password"
        )}
      </Button>
    </form>
  )
}
