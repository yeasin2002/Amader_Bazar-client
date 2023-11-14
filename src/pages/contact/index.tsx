/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, HTMLAttributes } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { ContactInfo } from "./ContactInfo"

import location from "$assets/illustration/3D/location-pin.png"
import message from "$assets/illustration/3D/message.png"
import { InputCombo } from "$components"

import { Textarea } from "$ui/textarea"

interface Inputs {
  title: string
  email: string
  subject: string
  message: string
}

type ContactProps = React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
export const Contact: FC<ContactProps> = ({ ...rest }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    return data
  }

  return (
    <section className="container  w-full" {...rest}>
      <div className="my-24 space-y-2 [&>*]:text-center">
        <h1 className="   text-2xl font-bold text-slate-800  md:text-4xl ">Keep in touch with us</h1>
        <p className="text-xl font-semibold text-slate-600">Sent a message</p>
      </div>
      <div className=" flex w-full flex-col gap-x-2 p-4 md:flex-row  ">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full flex-1   space-y-3  p-4">
          <InputCombo
            register={register("title", {
              required: { value: true, message: "name  is required" },
              minLength: { value: 3, message: "name must be at least 3 characters" },
            })}
            label="Title"
            placeholder="Title"
            error={errors.title?.message}
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
          />

          <InputCombo
            register={register("subject", {
              required: { value: true, message: "subject is   required" },
            })}
            label="Subject"
            placeholder="Subject "
            type="Write your subject"
            error={errors.subject?.message}
          />
          <Textarea
            name="message"
            id="message"
            placeholder="Write your message"
            className="mt-10 h-32 w-full rounded-md border border-slate-600/40 "
          />
        </form>

        <div className="order-first ml-3 w-2/6 space-y-8 md:order-last">
          <ContactInfo imgUrl={message} infoOne="mdkawsarislam2002@gmail.com" infoTwo="01632227965" />
          <ContactInfo imgUrl={location} infoOne="Dhaka Cantonment" infoTwo="Dhaka-1206" />
        </div>
      </div>
    </section>
  )
}
