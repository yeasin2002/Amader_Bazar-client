import { cn } from "$lib/utils"
import { Eye, EyeOff } from "lucide-react"
import { DetailedHTMLProps, FC, useState } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

interface InputForPasswordProps
  extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  register: UseFormRegisterReturn
  placeholder: string
  label: string
  className?: string
  labelClassName?: string
  error?: string | undefined
  isLabelHidden?: boolean
  type?: string
  isRequired?: boolean
}

export const InputForPassword: FC<InputForPasswordProps> = ({
  register,
  placeholder,
  label,
  error,
  className,
  labelClassName,
  isLabelHidden,
  isRequired = false,
  type = "text",
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      {!isLabelHidden && (
        <label
          htmlFor={label}
          className={cn("mb-2   text-sm font-medium text-gray-900 dark:text-gray-200", labelClassName)}>
          {label} <span className="text-md font-bold text-red-800">{isRequired && "*"}</span>
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          {...rest}
          {...register}
          className={cn(
            "block h-full  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
            className
          )}
          placeholder={placeholder}
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 transform text-sm text-gray-500"
          onClick={toggleShowPassword}>
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      </div>
      {error && <p className="animate-pulse font-normal text-rose-400">{error}</p>}
    </div>
  )
}
