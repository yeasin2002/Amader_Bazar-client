import { DetailedHTMLProps, FC, Fragment, HTMLAttributes, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import { InputCombo } from "$components"
import { clientEnv } from "$lib"

import { InputForPassword } from "$ui/InputForPassword"
import { Button } from "$ui/button"
import Link from "next/link"
import { Avatar } from "./Avatar"

interface RegistrationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setIsConfirmRegistration: React.Dispatch<React.SetStateAction<boolean>>
  setPendingUserToken: React.Dispatch<React.SetStateAction<string>>
}

interface registerResponse {
  success: boolean
  message: string
  statusCode: number
  data: string
}

export interface FormValues {
  name: string
  email: string
  phone: string
  password: string
  address: string
  avatar: string
}

export const Registration: FC<RegistrationProps> = ({ setIsConfirmRegistration, setPendingUserToken }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, formState, handleSubmit } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true)
      const formData = new FormData()
      formData.append("name", data.name)
      formData.append("email", data.email)
      formData.append("phone", data.phone)
      formData.append("password", data.password)
      formData.append("address", data.address)
      formData.append("avatar", data.avatar[0])

      const postRegister = await fetch(clientEnv.baseUrl + "/auth/register", {
        method: "POST",
        body: formData,
      })
      const res = (await postRegister.json()) as registerResponse

      if (!res.success) {
        return toast.error("Something went wrong")
      }

      setIsConfirmRegistration(true)
      setIsLoading(false)
      toast.success(" successfully Registered ")
      return setPendingUserToken(res.data)
    } catch (error: unknown) {
      setIsLoading(false)
      if (error instanceof Error) console.log(error?.message)
      console.log(error)
    }
  }
  return (
    <Fragment>
      <form className="mt-6 space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto flex justify-center">
          <Avatar register={register("avatar")} error={formState?.errors?.avatar?.message} />
        </div>
        <InputCombo
          register={register("name", {
            required: { value: true, message: "name is required " },
          })}
          isRequired={true}
          label="Full Name"
          error={formState?.errors?.name?.message}
          placeholder="Enter your name"
        />

        <InputCombo
          register={register("email", {
            required: { value: true, message: "Email is required " },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          isRequired={true}
          label="Email"
          error={formState?.errors?.email?.message}
          placeholder="Enter your email"
        />

        <InputCombo
          register={register("phone", {
            required: { value: true, message: "phone number is required " },
          })}
          label="Phone Number"
          error={formState?.errors?.password?.message}
          placeholder="Enter your Number"
          isRequired={true}
          type="number"
        />
        <InputForPassword
          register={register("password", {
            required: { value: true, message: "password is required " },
          })}
          label="password"
          error={formState?.errors?.password?.message}
          placeholder="Enter your password"
          isRequired={true}
          type="password"
        />

        <InputCombo
          register={register("address")}
          label="Address"
          error={formState?.errors?.address?.message}
          placeholder="Enter your address"
        />

        <div className="my-6">
          <Button variant={"dark"} className="w-full">
            {isLoading ? "Loading...." : "Sign In"}
          </Button>
        </div>
      </form>

      <p className="mt-8 text-center text-xs font-light text-gray-400 ">
        Already have an account?
        <Link href="/login" className="ml-2 font-medium text-gray-700 hover:underline">
          Login instead
        </Link>
      </p>
    </Fragment>
  )
}
