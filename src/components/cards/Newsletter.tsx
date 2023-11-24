import { MailOpen } from "lucide-react"
import { FormEventHandler } from "react"
import { useForm } from "react-hook-form"

import bg from "$assets/cover/main.jpg"
import { Button } from "$ui"
import { InputCombo } from "../index"
interface newsletterElements {
  email: string
}

const Newsletter = () => {
  const { register, formState } = useForm<newsletterElements>()
  const sendMailIntoUs: FormEventHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div
      className="relative h-full w-full px-10 py-10 sm:px-24 md:py-32 2xl:px-24"
      style={{
        backgroundImage: `url(${bg})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="flex items-center gap-x-2">
        <span className="rounded-full bg-brand-900 p-2  2xl:p-4">
          <MailOpen className="2xl:h-10 2xl:w-10" />
        </span>
        <p className="font-serif text-xl font-bold text-white 2xl:text-5xl">Newsletter</p>
      </div>

      <p className="mt-14    font-serif text-lg font-light text-white md:mb-3 md:text-xl   xl:mb-2 2xl:text-2xl">
        Get weekly update
      </p>
      <form className="flex  w-full gap-x-2  " onSubmit={sendMailIntoUs}>
        <InputCombo
          className="w-full flex-1    md:w-96"
          register={register("email", {
            required: { value: true, message: "Email is required" },
            pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid Email" },
          })}
          type="email"
          label="email"
          placeholder="example@gmail.com "
          error={formState.errors.email?.message}
          isLabelHidden={true}
        />
        <Button type="submit" variant={"secondary"} className=" py-7 text-base font-medium md:px-8 xl:px-10">
          Send
        </Button>
      </form>
    </div>
  )
}

export default Newsletter
