"use client"

import { InputCombo } from "@/components"
import type { Product } from "@/interface"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  Button,
} from "@/ui"
import { X } from "lucide-react"
import { type SubmitHandler, useForm } from "react-hook-form"

type Props = {
  defaultProduct?: Product
  isEditMode?: boolean
  title?: string
  onSave: (latestProduct: Product) => void
}

export const EditAndAddProduct = ({ isEditMode = false, defaultProduct, title, onSave, ...rest }: Props) => {
  const defaultProductData = {
    _id: "",
    name: "",
    category: "",
    desc: "",
    discount: 0,
    img: "",
    isFeature: false,
    price: 0,
    quantity: 0,
    totalSold: 0,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: defaultProduct || defaultProductData,
  })

  const onSubmit: SubmitHandler<Product> = (data) => {
    onSave(data)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button {...rest} variant={"outline"}>
          {title ? title : isEditMode ? "Edit" : "Add"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogFooter className="flex items-center justify-end">
          <AlertDialogCancel className="p-2">
            <X />
          </AlertDialogCancel>
        </AlertDialogFooter>
        <AlertDialogHeader>{isEditMode ? "Edit" : "Add"} Product</AlertDialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputCombo
            register={register("name")}
            placeholder="Write product name"
            label="Name"
            error={errors.name?.message}
          />
          <Button type="submit" className="mt-4 w-full">
            Submit
          </Button>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
