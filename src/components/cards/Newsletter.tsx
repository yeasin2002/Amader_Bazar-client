import { MailOpen } from "lucide-react"
import { FormEventHandler } from "react"
import { useForm } from "react-hook-form"

import bg from "$assets/cover/main.jpg"
import { Button } from "$ui"
import { InputCombo } from ".."
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
      className="h-full w-full space-y-4 px-24  py-10 md:py-32"
      style={{
        backgroundImage: `url(${bg})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center gap-x-2">
        <span className="rounded-full bg-brand-900 p-2 ">
          <MailOpen />
        </span>
        <p className="font-serif text-xl font-bold text-white">Newsletter</p>
      </div>
      <div className=" text-lg  font-light ">
        <p className="mt-14 font-serif text-lg font-light text-white">Get weekly update</p>
      </div>

      <form className="flex w-full gap-x-2 md:w-2/4" onSubmit={sendMailIntoUs}>
        <div className=" flex gap-x-2 ">
          <InputCombo
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
          <Button type="submit" variant={"secondary"}>
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Newsletter
