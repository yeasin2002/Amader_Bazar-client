import { InputCombo, LoadingSpinner } from "@/components"
import { useAuth } from "@/hooks"
import { SingleUserFullResponse } from "@/interface"
import { getUsersToken } from "@/lib"
import { Button } from "@/ui"
import { $fetch } from "@/utils"
import { useMutation, useQuery } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"

interface FormValues {
  name: string
  email: string
  address: string
  phone: string
}

export const UpdateProfileInfo = () => {
  const { userInfo } = useAuth()

  const getUserData = useQuery({
    queryKey: ["userInfo"],

    queryFn: () => {
      return $fetch("/user/info", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${getUsersToken()}` },
      }) as Promise<SingleUserFullResponse>
    },
  })

  //! Need to fix, Body is not sending properly
  const updateAction = useMutation({
    mutationKey: ["update-profile-info"],
    mutationFn: (data: FormValues) => {
      return $fetch(`/user/${userInfo?.id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${getUsersToken()}`,
          "Content-Type": "application/json",
        },
      })
    },
  })

  const { register, formState, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: getUserData?.data?.data.name,
      email: getUserData?.data?.data.email,
      address: getUserData?.data?.data.address,
      phone: getUserData?.data?.data.phone,
    },
  })

  // 2. update profile info -> PATCH: user/:id
  const onSubmitHandler: SubmitHandler<FormValues> = async (data) => {
    const response = await updateAction.mutateAsync({
      name: data.name,
      email: data.email,
      address: data.address,
      phone: data.phone,
    })
    console.log("🚀 response:", response)
  }
  return (
    <form className="pt-10" onSubmit={handleSubmit(onSubmitHandler)}>
      {getUserData.isLoading ? (
        <div>
          <p>
            Loading Your Data <span className="animate-pulse">...</span>
          </p>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <InputCombo
            register={register("name", {
              required: { value: true, message: "Email is required " },
            })}
            label="Full Name"
            error={formState?.errors?.name?.message}
            placeholder="Enter your full name"
          />
          <InputCombo
            register={register("email", {
              required: { value: true, message: "Email is required " },
            })}
            label="Email"
            error={formState?.errors?.email?.message}
            placeholder="Enter your email"
          />
          <InputCombo
            register={register("address", {
              required: { value: true, message: "address is required " },
            })}
            label="Address"
            error={formState?.errors?.address?.message}
            placeholder="Enter your address"
          />
          <InputCombo
            register={register("phone")}
            label="Phone"
            error={formState?.errors?.phone?.message}
            placeholder="Enter your Phone"
          />
          <Button className="mt-3 w-full">{updateAction.isPending ? "Updating..." : "Update"}</Button>
        </>
      )}
    </form>
  )
}
