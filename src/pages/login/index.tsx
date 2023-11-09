import { InputCombo } from "$components";
import { FC, HTMLAttributes } from "react";
import { useForm } from "react-hook-form";

interface LogInProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
interface FormValues {
  email: string;
  password: string;
}

export const Login: FC<LogInProps> = ({ ...rest }) => {
  const { register, formState } = useForm<FormValues>();
  return (
    <div {...rest} className="max-h-full min-h-screen w-full bg-blue-100 ">
      <div className="flex justify-between">
        <div className="h-full max-h-full  min-h-screen flex-1 bg-red-700">left</div>
        <div className="relative h-full max-h-full min-h-screen w-2/5 bg-teal-500">
          <div>
            <InputCombo
              register={register("email", {
                required: { value: true, message: "Email is required " },
              })}
              label="Email"
              error={formState?.errors?.email?.message}
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
