import { cn } from "@/lib"
import type { DetailedHTMLProps, FC } from "react"
import type { UseFormRegisterReturn } from "react-hook-form"

interface InputComboProps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  register: UseFormRegisterReturn
  placeholder: string
  label: string
  className?: string
  labelClassName?: string
  wrapperClassName?: string
  error?: string | undefined
  isLabelHidden?: boolean

  isRequired?: boolean
}

export const InputCombo: FC<InputComboProps> = ({
  register,
  placeholder,
  label,
  error,
  className,
  labelClassName,
  isLabelHidden,
  isRequired = false,
  wrapperClassName,

  ...rest
}) => {
  const { ref, ...registerRest } = register

  return (
    <div className={cn(wrapperClassName)}>
      {!isLabelHidden && (
        <label
          htmlFor={label}
          className={cn(
            "font-fresca  mb-2 text-sm font-medium capitalize  text-gray-900 dark:text-gray-200 ",
            labelClassName
          )}>
          {label}
          <span className="text-md font-bold text-red-800">{isRequired && "*"}</span>
        </label>
      )}

      <input
        {...rest}
        {...registerRest}
        ref={ref}
        type={"text"}
        id={label}
        placeholder={placeholder}
        className={cn(
          "block h-full  w-full rounded-lg    border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 ",
          className
        )}
      />

      {error && <p className="animate-pulse font-normal text-rose-400">{error}</p>}
    </div>
  )
}
