import { InputCombo } from "$components/index"
import { Button } from "$ui/button"
import { $POST } from "$utils"
import { useMutation } from "@tanstack/react-query"
import { ArrowLeft } from "lucide-react"
import { DetailedHTMLProps, FC, Fragment } from "react"
import { useForm } from "react-hook-form"

interface ConfirmRegistrationProps
  extends DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  setIsConfirmRegistration: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ConfirmFormValues {
  OTP: string
}

export const ConfirmRegistration: FC<ConfirmRegistrationProps> = ({ setIsConfirmRegistration, ...rest }) => {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["confirm-registration"],
    mutationFn: (body: ConfirmFormValues) => $POST({ url: "/auth/confirm-registration", body }),
  })
  const { register, formState, handleSubmit } = useForm<ConfirmFormValues>()
  const onSubmit = async (data: ConfirmFormValues) => {
    await mutateAsync(data)
  }
  return (
    <Fragment>
      <div className="flex ">
        <div
          className=" cursor-pointer rounded-full  bg-gray-300 p-2  "
          onClick={() => setIsConfirmRegistration(false)}
        >
          <ArrowLeft />
        </div>
        <h2 className="flex-1 text-center text-2xl font-bold">Confirm Registration</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-10" {...rest}>
        <InputCombo
          register={register("OTP", {
            required: { value: true, message: "OTP is required " },
          })}
          isRequired={true}
          label="OTP"
          error={formState?.errors?.OTP?.message}
          placeholder="Enter your OTP "
        />
        <Button type="submit" className="w-full">
          {isPending ? "Loading..." : "Singup"}
        </Button>
      </form>
    </Fragment>
  )
}
