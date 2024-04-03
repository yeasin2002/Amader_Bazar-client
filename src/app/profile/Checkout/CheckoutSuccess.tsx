import lottieData from "$assets/illustration/lottiy/fast-shopping-delivery.json"
import doneICon from "$assets/illustration/lottiy/success.json"
import { AlertDialogAction } from "$ui/alert-dialog"
import { pt_sans_narrow } from "@/font"
import { AnimateLottie } from "@/utils/AnimateLottie"

import { DetailedHTMLProps, FC, HTMLAttributes, useEffect, useState } from "react"

interface CheckoutSuccessProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CheckoutSuccess: FC<CheckoutSuccessProps> = ({ ...rest }) => {
  const [isNextStep, setIsNextStep] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsNextStep(true)
    }, 2000)
  }, [])

  const FirstStep = (
    <div>
      <AnimateLottie data={doneICon} className="h-3/5 w-full" />
      <h2 className={"heading-4 text-center " + pt_sans_narrow.className}>Order Placed Successfully</h2>
    </div>
  )
  const SecondStep = (
    <div>
      <AnimateLottie data={lottieData} className="h-3/5 w-full" />
      <h2 className={"heading-4 text-center font-ptSansNarrow" + pt_sans_narrow.className}>Order is on the way</h2>
      <h3 className={"heading-5 px-4 text-center font-ptSansNarrow" + +pt_sans_narrow.className}>
        Thank you for shopping with us
      </h3>
      <p className={"heading-6 mt-5 px-16 text-center font-ptSansNarrow" + +pt_sans_narrow.className}>
        We will contact with you for verification and deliver your order as soon as possible.
      </p>
    </div>
  )
  return (
    <div {...rest} className="flex flex-col justify-between">
      {isNextStep ? SecondStep : FirstStep}

      <div className="flex items-center justify-end gap-x-2">
        <AlertDialogAction type="submit">Close</AlertDialogAction>
      </div>
    </div>
  )
}
