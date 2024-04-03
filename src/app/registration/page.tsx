"use client"

import delivery from "$assets/illustration/lottiy/delivery-team.json"
import { FC, HTMLAttributes, useState } from "react"

import { ConfirmRegistration } from "./ConfirmRegistration"
import { Registration } from "./Registration"
import { AnimateLottie } from "@/utils/AnimateLottie"

type SingUpProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const SingUp: FC<SingUpProps> = ({ ...rest }) => {
  const [isConfirmRegistration, setIsConfirmRegistration] = useState(false)
  const [pendingUserToken, setPendingUserToken] = useState("")
  return (
    <div
      {...rest}
      className=" flex    h-screen max-h-full w-full items-center justify-evenly bg-gradient-to-r from-brand-300 to-brand-500  px-8 ">
      <div className="  hidden w-full md:block  ">
        <AnimateLottie data={delivery} autoplay={true} loop={false} />
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
