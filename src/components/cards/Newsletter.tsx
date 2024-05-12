"use client"

import { MailOpen, Send } from "lucide-react"
import { type SubmitHandler, useForm } from "react-hook-form"

import { $POST } from "$hooks/useFetchers"
import { Button } from "$ui"
import bg from "@/assets/cover/main.jpg"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { toast } from "react-hot-toast"
import { InputCombo, LoadingSpinner } from "../index"

interface newsletterElements {
  email: string
}

export const Newsletter = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["newsletter"],
    mutationFn: (email: string) =>
      $POST({
        url: "/extra/newsletter",
        body: { email },
      }),
  })
  const { register, formState, handleSubmit } = useForm<newsletterElements>()
  const onSubmit: SubmitHandler<newsletterElements> = async (data) => {
    const response = await mutateAsync(data.email)
    if (response.success) {
      return toast.success("Thank you for subscribing to our newsletter")
    }
    return toast.error("Something went wrong, please try again")
  }
  return (
    <div
      className="relative h-full w-full px-10 py-10 sm:px-24 md:py-32 2xl:px-24"
      style={{
        backgroundImage: `url(${bg.src})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="flex items-center gap-x-2">
        <span className="rounded-full bg-brand-900 p-2  2xl:p-4">
          <MailOpen className="2xl:h-10 2xl:w-10" />
        </span>
        <p className="font-kurale  text-xl font-bold text-white 2xl:text-5xl">Newsletter</p>
      </div>

      <p className="mt-14  font-firaSans   text-lg font-light text-white md:mb-3 md:text-xl   xl:mb-2 2xl:text-2xl">
        Get weekly update
      </p>
      <form className="flex  w-full gap-x-2  " onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" variant={"secondary"} className=" py-7 font-dhurjati text-lg font-medium md:px-4 ">
          {isPending ? (
            <Fragment>
              <LoadingSpinner />
              Sending...
            </Fragment>
          ) : (
            <span className="flex items-center gap-x-2">
              <Send size={20} />
              Send
            </span>
          )}
        </Button>
      </form>
    </div>
  )
}
