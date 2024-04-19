"use client"

import delivery from "$assets/illustration/gif/DeliveryTeam.gif"
import type { FC, HTMLAttributes } from "react"
import { useState } from "react"

import Image from "next/image"
import { ConfirmRegistration } from "./ConfirmRegistration"
import { Registration } from "./Registration"

type SingUpProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const SingUp: FC<SingUpProps> = ({ ...rest }) => {
  const [isConfirmRegistration, setIsConfirmRegistration] = useState(false)
  const [pendingUserToken, setPendingUserToken] = useState("")
  return (
    <div
      {...rest}
      className=" flex    h-screen max-h-full w-full items-center justify-evenly bg-gradient-to-r from-brand-300 to-brand-500  px-8 ">
      <div className="  hidden w-full md:block  ">
        <Image src={delivery} alt="Delivery Team" width={500} height={500} />
      </div>
      <div className="m-auto mx-auto w-full  rounded-lg bg-white p-6 shadow-md  dark:bg-gray-900  ">
        {isConfirmRegistration ? (
          <ConfirmRegistration
            setIsConfirmRegistration={setIsConfirmRegistration}
            pendingUserToken={pendingUserToken}
          />
        ) : (
          <Registration setIsConfirmRegistration={setIsConfirmRegistration} setPendingUserToken={setPendingUserToken} />
        )}
      </div>
    </div>
  )
}

export default SingUp
