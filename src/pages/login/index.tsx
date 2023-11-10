import delivery from "$assets/illustration/lottiy/delivery-service.json"
import Facebook from "$assets/illustration/lottiy/facebookWave.json"
import googleLottie from "$assets/illustration/lottiy/google.json"

import { InputCombo } from "$components"
import { Logo } from "$layout"
import { cn } from "$lib/utils"

import { Button, buttonVariants } from "$ui/button"
import Lottie from "lottie-react"
import { FC, HTMLAttributes } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

interface LogInProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
interface FormValues {
  email: string
  password: string
}

export const Login: FC<LogInProps> = ({ ...rest }) => {
  const navigate = useNavigate()
  const { register, formState } = useForm<FormValues>()
  return (
    <div
      {...rest}
      className="flex max-h-full min-h-screen w-full  items-center justify-evenly bg-gradient-to-r  from-brand-300 to-brand-500 px-10 "
    >
      <Lottie animationData={delivery} autoPlay={true} className="hidden md:block" />

      <div className="m-auto mx-auto w-full  rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <div className="mx-auto flex justify-center">
          <Logo
            className="h-14 w-14 cursor-pointer"
            onClick={() => {
              navigate(-1)
            }}
          />
        </div>
        <form className="mt-6">
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
              <a href="#" className="text-xs text-gray-600 hover:underline dark:text-gray-400">
                Forget Password?
              </a>
            </div>

            <InputCombo
              register={register("email", {
                required: { value: true, message: "Email is required " },
              })}
              label="Email"
              error={formState?.errors?.email?.message}
              placeholder="Enter your email"
            />
          </div>

          <div className="mt-6">
            <button
              className={cn(
                "w-full",
                buttonVariants({
                  variant: "dark",
                })
              )}
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-4 flex items-center justify-between">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a href="#" className="text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400">
            or login with Social Media
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className=" mt-6 flex items-center gap-x-5">
          <Button type="button" className="w-full" variant={"sky"}>
            <Lottie animationData={googleLottie} autoplay={true} className="h-full w-full" />
            <p className="mx-2 hidden sm:inline"> Google</p>
          </Button>
          <Button type="button" value={"sky"} className="w-full space-x-2">
            <Lottie animationData={Facebook} autoplay={true} className="h-full w-full" />
            <span className="  text-gray-800"> Facebook</span>
          </Button>
        </div>

        <p className="mt-8 text-center text-xs font-light text-gray-400">
          Don't have an account?
          <a href="#" className="font-medium text-gray-700 hover:underline dark:text-gray-200">
            Create One
          </a>
        </p>
      </div>
    </div>
  )
}
