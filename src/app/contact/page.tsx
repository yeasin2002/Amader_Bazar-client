import type { FC, HTMLAttributes } from "react"
import { ContactInfo } from "./ContactInfo"

import location from "$assets/illustration/3D/location-pin.png"
import message from "$assets/illustration/3D/message.png"

import { fresca } from "@/font"
import { ContactForm } from "./ContactForm"

type ContactProps = React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
const Contact: FC<ContactProps> = ({ ...rest }) => {
  return (
    <section className="upperArea container  w-full" {...rest}>
      <div className="my-24 space-y-10 [&>*]:text-center">
        <h1
          className={
            "   font-fresca text-2xl font-bold text-slate-800 dark:text-gray-300 md:text-4xl " + fresca.className
          }>
          Keep in touch with us
        </h1>
        <p className="font-texturina text-xl font-semibold text-slate-600 dark:text-gray-400">Sent a message</p>
      </div>
      <div className=" flex w-full flex-col gap-x-2 p-4 md:flex-row  ">
        <ContactForm />

        <div className=" ml-3 w-2/6 space-y-8 ">
          <ContactInfo imgUrl={message} infoOne="mdkawsarislam2002@gmail.com" infoTwo="01632227965" />
          <ContactInfo imgUrl={location} infoOne="Dhaka Cantonment" infoTwo="Dhaka-1206" />
        </div>
      </div>
    </section>
  )
}

export default Contact
