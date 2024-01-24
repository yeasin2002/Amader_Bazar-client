import { InputCombo } from "@/components"
import { Button } from "@/ui"
import { SubmitHandler, useForm } from "react-hook-form"

interface FormValues {
  password: string
}

export const DeleteAccount = () => {
  const { register, formState, handleSubmit } = useForm<FormValues>({
    defaultValues: {},
  })

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-3 ">
      <h3 className="pb-2 pt-10">
        <span className="text-red-600 ">Warning:</span> This action cannot be undone. This will permanently delete your
        account and all of your data.
      </h3>
      <InputCombo
        register={register("password", {
          required: { value: true, message: "password is required " },
        })}
        label="Current Password"
        error={formState?.errors?.password?.message}
        placeholder="Enter your current password"
        wrapperClassName="space-y-3"
      />

      <Button className="w-full bg-red-600 text-white hover:bg-red-700 ">Delete Account</Button>
    </form>
  )
}
