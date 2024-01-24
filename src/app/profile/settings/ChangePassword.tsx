import { InputCombo } from "@/components"
import { Button } from "@/ui"
import { SubmitHandler, useForm } from "react-hook-form"

interface FormValues {
  password: string
  newPassword: string
  confirmPassword: string
}

export const ChangePassword = () => {
  const { register, formState, handleSubmit } = useForm<FormValues>({
    defaultValues: {},
  })

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-3 pt-10">
      <InputCombo
        register={register("password", {
          required: { value: true, message: "password is required " },
        })}
        label="Current Password"
        error={formState?.errors?.password?.message}
        placeholder="Enter your current password"
      />
      <InputCombo
        register={register("newPassword", {
          required: { value: true, message: "New Password is required " },
        })}
        label="New Password"
        error={formState?.errors?.newPassword?.message}
        placeholder="Enter your new password"
      />
      <InputCombo
        register={register("confirmPassword", {
          required: { value: true, message: "Confirm Password is required " },
        })}
        label="Confirm Password"
        error={formState?.errors?.confirmPassword?.message}
        placeholder="Confirm  your new password"
      />
      <Button className="w-full ">Change Password</Button>
    </form>
  )
}
