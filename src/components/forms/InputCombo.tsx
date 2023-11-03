import { DetailedHTMLProps, FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputComboProps
    extends DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    register: UseFormRegisterReturn;
    placeholder: string;
    title?: string;
    label: string;
    labelClassName: string;
}

export const InputCombo: FC<InputComboProps> = ({
    register,
    placeholder,
    ...rest
}) => {
    return (
        <div>
            <label
                htmlFor="first_name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
                First name
            </label>
            <input
                {...rest}
                {...register}
                type="text"
                id="first_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  "
                placeholder={placeholder}
            />
        </div>
    );
};
