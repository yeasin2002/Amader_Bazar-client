import { DetailedHTMLProps, FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputComboProps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  register: UseFormRegisterReturn;
  placeholder: string;
  label: string;
  className?: string;
  labelClassName?: string;
  error: string | undefined;
}

export const InputCombo: FC<InputComboProps> = ({
  register,
  placeholder,
  label,
  className,
  labelClassName,
  error,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor="first_name" className={twMerge("mb-2 block text-sm font-medium text-gray-900", labelClassName)}>
        {label}
      </label>
      <input
        {...rest}
        {...register}
        type="text"
        id={label}
        placeholder={placeholder}
        className={twMerge(
          "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 ",
          className
        )}
      />
      {error && <p>something went wrong</p>}
    </div>
  );
};
