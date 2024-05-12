import { InputCombo } from "$components/index"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "$ui/alert-dialog"
import { Button, buttonVariants } from "$ui/button"
import type { FC } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"

interface ChangePasswordInputs {
  currentPassword: string
  newPassword: string
}

export const ChangePassword: FC = ({ ...rest }) => {
  const { register, handleSubmit } = useForm<ChangePasswordInputs>()
  const onSubmit: SubmitHandler<ChangePasswordInputs> = (data) => {
    console.log(data)
  }

  return (
    <div {...rest}>
      <AlertDialog>
        <AlertDialogTrigger
          className={buttonVariants({
            variant: "default",
          })}>
          Change Password
        </AlertDialogTrigger>
        <AlertDialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <AlertDialogTitle className="my-6">Change Password</AlertDialogTitle>
            <div className="space-y-2">
              <InputCombo
                register={register("currentPassword")}
                label="Current Password"
                type="password"
                placeholder="Enter your current password"
              />
              <InputCombo
                register={register("newPassword")}
                label="New Password"
                type="password"
                placeholder="Enter your new password"
              />
            </div>
            <div className=" mt-5 space-x-2">
              <AlertDialogCancel
                className={buttonVariants({
                  variant: "dark",
                })}>
                Cancel
              </AlertDialogCancel>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
