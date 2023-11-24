import delivery from "$assets/illustration/lottiy/delivery-team.json"
import Lottie from "lottie-react"
import { FC, HTMLAttributes, useState } from "react"

import { ConfirmRegistration } from "./ConfirmRegistration"
import { Registration } from "./Registration"

type SingUpProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const SingUp: FC<SingUpProps> = ({ ...rest }) => {
  const [isConfirmRegistration, setIsConfirmRegistration] = useState(false)
  return (
    <div
      {...rest}
      className=" flex    h-screen max-h-full w-full items-center justify-evenly bg-gradient-to-r from-brand-300 to-brand-500  px-8 ">
      <div className="  hidden w-full md:block  ">
        <Lottie animationData={delivery} autoPlay={true} loop={false} />
      </div>
      <div className="m-auto mx-auto w-full  rounded-lg bg-white p-6 shadow-md ">
        {isConfirmRegistration ? (
          <ConfirmRegistration setIsConfirmRegistration={setIsConfirmRegistration} />
        ) : (
          <Registration setIsConfirmRegistration={setIsConfirmRegistration} />
        )}
      </div>
    </div>
  )
}
