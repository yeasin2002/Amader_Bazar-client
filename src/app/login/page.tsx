"use client"

import { useMutation } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { FC, HTMLAttributes } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import type { AuthResponse } from "$types"
import delivery from "@/assets/illustration/gif/Delivery Service.gif"
import { InputCombo } from "@/components"
import { $POST, useAuth } from "@/hooks"
import { Logo } from "@/layout"
import { Button, InputForPassword } from "@/ui"

type LogInProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
interface FormValues {
  email: string
  password: string
}

const Login: FC<LogInProps> = ({ ...rest }) => {
  const auth = useAuth()
  const navigate = useRouter()

  const { register, formState, handleSubmit } = useForm<FormValues>()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: (body: object) => $POST({ url: "/auth/login", body }) as Promise<AuthResponse>,
  })

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await mutateAsync(data)

      if (response.success) {
        auth.setLoggedIn(response.data.token)
        auth.setUserInfo(response.data.user)
        navigate.push("/")

        return toast.success("Login Success")
      }
      if (response.statusCode === 404) {
        return toast.error("Please Register First")
      }
      toast.error("Sometime went wrong")
    } catch (error) {
      toast.error("Sometime went wrong")
    }
  }

  //* Note: Need to add Captcha to prevent bot before log in and sign up
  return (
    <div
      {...rest}
      className="flex max-h-full min-h-screen w-full  items-center justify-evenly bg-gradient-to-r  from-brand-300 to-brand-500 px-10 ">
      <div className="hidden h-full w-full md:block ">
        <Image src={delivery} alt="delivery" layout="responsive" width={500} height={500} objectFit="contain" />
      </div>

      <div className="m-auto mx-auto w-full  rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 ">
        <div className="mx-auto flex justify-center">
          <Logo className="h-14 w-14 cursor-pointer" />
        </div>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)} key={"Log_in"}>
          <div>
            <InputCombo
              register={register("email", {
                required: { value: true, message: "Email is required " },
              })}
              label="Email"
              error={formState?.errors?.email?.message}
              placeholder="Enter your email"
            />
          </div>

          <div className="mt-4">
            <div className="my-4 flex items-center justify-end">
              <a href="#forgot" className="text-xs text-gray-600 hover:underline dark:text-gray-400">
                Forget Password?
              </a>
            </div>

            <InputForPassword
              register={register("password", {
                required: { value: true, message: "password is required " },
              })}
              label="Password"
              error={formState?.errors?.password?.message}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <div className="mt-6">
            <Button variant={"dark"} className="w-full  dark:bg-brand-500 dark:text-gray-950" font={"playpenSans"}>
              {isPending ? "Loading..." : "Log In"}
            </Button>
          </div>
        </form>

        <p className="mt-8 text-center text-xs font-light text-gray-300 ">
          {"Don't"} have an account?
          <Link href="/registration" className="ml-2 font-medium text-gray-400 hover:underline">
            Create One
          </Link>
        </p>
      </div>
    </div>
  )
}
export default Login
