import { DetailedHTMLProps, FC } from "react"
import { UseFormRegisterReturn } from "react-hook-form"
import { twMerge } from "tailwind-merge"

interface InputComboProps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  register: UseFormRegisterReturn
  placeholder: string
  label: string
  className?: string
  labelClassName?: string
  error: string | undefined
  isLabelHidden?: boolean
  type?: string
}

export const InputCombo: FC<InputComboProps> = ({
  register,
  placeholder,
  label,
  error,
  className,
  labelClassName,
  isLabelHidden,
  type = "text",
  ...rest
}) => {
  return (
    <div>
      {!isLabelHidden && (
        <label htmlFor={label} className={twMerge("mb-2   text-sm font-medium text-gray-900", labelClassName)}>
          {label}
        </label>
      )}

      <input
        {...rest}
        {...register}
        type={type}
        id={label}
        placeholder={placeholder}
        className={twMerge(
          "block h-full  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 ",
          className
        )}
      />
      {error && <p>{error}</p>}
    </div>
  )
}
