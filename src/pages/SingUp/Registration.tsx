import { useMutation } from "@tanstack/react-query"
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { InputCombo } from "$components"
import { Image } from "$ui/Image"
import { Button } from "$ui/button"
import { $POST } from "$utils"
import { Avatar } from "./Avatar"

import FacebookIcon from "$assets/illustration/3D/facebook.png"
import googleIcon from "$assets/illustration/3D/google.png"
import { toast } from "sonner"

interface RegistrationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setIsConfirmRegistration: React.Dispatch<React.SetStateAction<boolean>>
}

export interface FormValues {
  name: string
  email: string
  phone: string
  password: string
  address: string
  avatar: string
}

export const Registration: FC<RegistrationProps> = ({ setIsConfirmRegistration }) => {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: (body: FormValues) =>
      $POST({
        url: "/auth/register",
        body,
      }),
  })

  // Handle Form
  const { register, formState, handleSubmit } = useForm<FormValues>()
  const onSubmit = async (data: FormValues) => {
    try {
      const postRegister = await mutateAsync(data)
      console.log(postRegister)
      console.log("Result : ", postRegister)
      if (postRegister.success) {
        console.log("success")
        setIsConfirmRegistration(true)
      } else {
        console.log("Not success")
        toast.error("Something went wrong, please try again")
      }
    } catch (error: unknown) {
      if (error instanceof Error) toast.error(error?.message)
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
        <InputCombo
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

        <div className="mt-6">
          <Button variant={"dark"} className="w-full">
            {isPending ? "Loading..." : "Sign In"}
          </Button>
        </div>
      </form>

      <div className="mt-4 flex items-center justify-between">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <p className="text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400">
          or register with Social Media
        </p>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
      </div>

      <div className=" mt-6 flex items-center gap-x-5">
        <Button type="button" variant={"sky"} className="w-full">
          <Image src={googleIcon} alt="Google" className="h-full " />
          <p className="mx-2  "> Google</p>
        </Button>
        <Button type="button" value={"sky"} className=" flex w-full space-x-2">
          <Image src={FacebookIcon} alt="Google" className="h-full " />
          <p> Facebook</p>
        </Button>
      </div>

      <p className="mt-8 text-center text-xs font-light text-gray-400 ">
        Already have an account?
        <Link to="/login" className="ml-2 font-medium text-gray-700 hover:underline">
          Login instead
        </Link>
      </p>
    </Fragment>
  )
}
