import { InputCombo } from "@/components"
import { useAuth } from "@/hooks"
import { getUsersToken } from "@/lib"
import { Button } from "@/ui"
import { $fetch } from "@/utils"
import { useMutation } from "@tanstack/react-query"
import type { DetailedHTMLProps, HTMLAttributes } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

interface FormValues {
  name: string
  email: string
  address: string
  phone: string
}

export const UpdateProfileInfo = ({ ...rest }: Props) => {
  const { userInfo, setUserInfo } = useAuth()

  const updateAction = useMutation({
    mutationKey: ["update-profile-info"],
    mutationFn: (data: FormValues) => {
      return $fetch(`/user/${userInfo?.id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${getUsersToken()}`,
          "Content-Type": "application/json",
        },
      })
    },
  })

  const { register, formState, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: userInfo?.name,
      email: userInfo?.email,
      address: userInfo?.address,
      phone: userInfo?.phone,
    },
  })

  const onSubmitHandler: SubmitHandler<FormValues> = async (data) => {
    const response = await updateAction.mutateAsync(data)

    if (response.success && response.statusCode === 200) {
      toast.success("Profile updated successfully")
      return setUserInfo(response.data)
    }
    return toast.error("Something went wrong")
  }

  return (
    <div {...rest}>
      <form className="pt-10" onSubmit={handleSubmit(onSubmitHandler)}>
        <InputCombo
          register={register("name", {
            required: { value: true, message: "Email is required " },
          })}
          label="Full Name"
          error={formState?.errors?.name?.message}
          placeholder="Enter your full name"
        />
        <InputCombo
          register={register("email", {
            required: { value: true, message: "Email is required " },
          })}
          label="Email"
          error={formState?.errors?.email?.message}
          placeholder="Enter your email"
        />
        <InputCombo
          register={register("address", {
            required: { value: true, message: "address is required " },
          })}
          label="Address"
          error={formState?.errors?.address?.message}
          placeholder="Enter your address"
        />
        <InputCombo
          register={register("phone")}
          label="Phone"
          error={formState?.errors?.phone?.message}
          placeholder="Enter your Phone"
        />
        <Button className="mt-3 w-full">{updateAction.isPending ? "Updating..." : "Update"}</Button>
      </form>
    </div>
  )
}
