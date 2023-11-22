import FacebookIcon from "$assets/illustration/3D/facebook.png"
import googleIcon from "$assets/illustration/3D/google.png"
import delivery from "$assets/illustration/lottiy/delivery-team.json"

import { InputCombo } from "$components"
import { Logo } from "$layout"
import { Image } from "$ui/Image"

import { Button } from "$ui/button"
import Lottie from "lottie-react"
import { FC, HTMLAttributes } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"

type SingUpProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
interface FormValues {
  email: string
  password: string
}

export const SingUp: FC<SingUpProps> = ({ ...rest }) => {
  const navigate = useNavigate()
  const { register, formState } = useForm<FormValues>()

  return (
    <div
      {...rest}
      className=" flex   w-full items-center justify-evenly  bg-gradient-to-r from-brand-300 to-brand-500  px-10 "
    >
      <div className="  hidden w-full md:block  ">
        <Lottie animationData={delivery} autoPlay={true} loop={false} />
      </div>

      <div className="m-auto mx-auto w-full  rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 ">
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
            <Button variant={"dark"} className="w-full">
              Sign In
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
      </div>
    </div>
  )
}
