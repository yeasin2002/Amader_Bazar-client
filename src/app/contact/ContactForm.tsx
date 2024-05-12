"use client"

import { useMutation } from "@tanstack/react-query"
import { type SubmitHandler, useForm } from "react-hook-form"

import { InputCombo } from "$components"
import { $POST } from "$hooks"
import { Button, Textarea } from "$ui"
import type { DetailedHTMLProps, FormHTMLAttributes } from "react"

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

interface Inputs {
  name: string
  email: string
  subject: string
  message: string
}

export const ContactForm = ({ ...rest }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["contact"],
    mutationFn: (data: Inputs) =>
      $POST({
        url: "/extra/contact",
        body: data,
      }),
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)

    mutateAsync(data)
    return data
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full flex-1     p-4" {...rest}>
      <InputCombo
        register={register("name", {
          required: { value: true, message: "name  is required" },
          minLength: { value: 3, message: "name must be at least 3 characters" },
        })}
        label="name"
        placeholder="name"
        error={errors.name?.message}
        className="input-dark"
      />
      <InputCombo
        register={register("email", {
          required: { value: true, message: "email" },
          pattern: { value: /\S+@\S+\.\S+/, message: "email is not valid" },
        })}
        label="email"
        placeholder="Enter your email"
        type="email"
        error={errors.email?.message}
        className="input-dark"
      />
      <InputCombo
        register={register("subject", {
          required: { value: true, message: "subject is   required" },
        })}
        label="Subject"
        placeholder="Subject "
        type="Write your subject"
        error={errors.subject?.message}
        className="input-dark"
      />
      <Textarea
        {...register("message", {
          required: { value: true, message: "message is   required" },
          minLength: { value: 5, message: "message must be at least 5 characters" },
        })}
        name="message"
        id="message"
        placeholder="Write your message"
        className="input-dark mt-10 h-32 w-full rounded-md border border-slate-600/40"
      />

      {errors.message && <p className="animate-pulse font-normal text-rose-400">{errors.message.message}</p>}

      <Button font={"playpenSans"} type="submit" className="mt-10">
        {isPending ? " Sending..." : "Send"}
      </Button>
    </form>
  )
}
