import { InputCombo } from "$components/index"
import { $POST, useAuth } from "$hooks"
import { confirmRegistration } from "$src/interface"
import { Button } from "$ui/button"
import { useMutation } from "@tanstack/react-query"
import { ArrowLeft } from "lucide-react"
import { DetailedHTMLProps, FC, Fragment } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

interface ConfirmRegistrationProps
  extends DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  setIsConfirmRegistration: React.Dispatch<React.SetStateAction<boolean>>
  pendingUserToken: string
}
export interface ConfirmFormValues {
  otp: string
}

export const ConfirmRegistration: FC<ConfirmRegistrationProps> = ({
  setIsConfirmRegistration,
  pendingUserToken,
  ...rest
}) => {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["confirm-registration"],
    mutationFn: (body: { token: string; OTP: string }) =>
      $POST({ url: "/auth/confirm-registration", body: body }) as Promise<confirmRegistration>,
  })
  const { login } = useAuth()

  const { register, formState, handleSubmit } = useForm<ConfirmFormValues>()
  const onSubmit = async (data: ConfirmFormValues) => {
    const req = await mutateAsync({ token: pendingUserToken, OTP: data.otp })
    console.log("🚀 ~ file: ConfirmRegistration.tsx:34 ~ onSubmit ~ req:", req)

    if (!req?.success) return toast.error("Failed to confirm registration")
    login(req?.data?.token, "/")
    toast.success("Registration confirmed successfully")
  }
  return (
    <Fragment>
      <div className="flex ">
        <div
          className=" cursor-pointer rounded-full  bg-gray-300 p-2  "
          onClick={() => setIsConfirmRegistration(false)}>
          <ArrowLeft />
        </div>
        <h2 className="flex-1 text-center text-2xl font-bold">Confirm Registration</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-10" {...rest}>
        <InputCombo
          register={register("otp", {
            required: { value: true, message: "OTP is required " },
          })}
          isRequired={true}
          label="OTP"
          error={formState?.errors?.otp?.message}
          placeholder="Enter your OTP "
        />
        <Button type="submit" className="w-full">
          {isPending ? "Loading..." : "Singup"}
        </Button>
      </form>
    </Fragment>
  )
}
