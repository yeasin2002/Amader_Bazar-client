import FacebookIcon from "$assets/illustration/3D/facebook.png"
import googleIcon from "$assets/illustration/3D/google.png"
import delivery from "$assets/illustration/lottiy/delivery-team.json"

import { InputCombo } from "$components"
import { Image } from "$ui/Image"

import { Button } from "$ui/button"
import Lottie from "lottie-react"
import { FC, HTMLAttributes } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

type SingUpProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
// email, phone, password, name, address
interface FormValues {
  name: string
  email: string
  phone: string
  password: string
  address: string
  avatar: string
}
export const SingUp: FC<SingUpProps> = ({ ...rest }) => {
  const { register, formState, getValues, handleSubmit } = useForm<FormValues>()
  const onSubmit = (data: FormValues) => console.log(data)
  const allValues = getValues()
  console.log(allValues.avatar)

  return (
    <div
      {...rest}
      className=" flex   h-full w-full items-center justify-evenly bg-gradient-to-r from-brand-300 to-brand-500  px-8 "
    >
      <div className="  hidden w-full md:block  ">
        <Lottie animationData={delivery} autoPlay={true} loop={false} />
      </div>

      <div className="m-auto mx-auto w-full  rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 ">
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-auto flex justify-center">
            <Avatar register={register("avatar")} error={formState?.errors?.avatar?.message} />
          </div>
          <InputCombo
            register={register("name", {
              required: { value: true, message: "name is required " },
            })}
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
            label="Email"
            error={formState?.errors?.email?.message}
            placeholder="Enter your email"
          />

          <InputCombo
            register={register("password", {
              required: { value: true, message: "password is required " },
            })}
            label="password"
            error={formState?.errors?.password?.message}
            placeholder="Enter your password"
          />

          <InputCombo
            register={register("address", {
              required: { value: true, message: "password is required" },
            })}
            label="Address"
            error={formState?.errors?.address?.message}
            placeholder="Enter your address"
          />

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
