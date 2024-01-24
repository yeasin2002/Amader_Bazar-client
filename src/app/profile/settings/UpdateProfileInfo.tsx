import { InputCombo } from "@/components"
import { Button } from "@/ui"
import { SubmitHandler, useForm } from "react-hook-form"

interface FormValues {
  name: string
  email: string
  address: string
  phone: string
}

export const UpdateProfileInfo = () => {
  const { register, formState, handleSubmit } = useForm<FormValues>({
    defaultValues: {},
  })

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <form className="pt-10" onSubmit={handleSubmit(onSubmitHandler)}>
      <InputCombo
        register={register("name", {
          required: { value: true, message: "Email is required " },
        })}
        label="Full Name"
        error={formState?.errors?.email?.message}
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
        error={formState?.errors?.email?.message}
        placeholder="Enter your address"
      />
      <InputCombo
        register={register("phone")}
        label="Phone"
        error={formState?.errors?.email?.message}
        placeholder="Enter your Phone"
      />
      <Button className="mt-3 w-full">Submit</Button>
    </form>
  )
}
