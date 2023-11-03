import { InputCombo } from "$components";
import { FC, HTMLAttributes } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  email: string;
};

interface ContactProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Contact: FC<ContactProps> = ({ ...rest }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section className="container" {...rest}>
      <h1 className="my-32 text-center text-2xl font-bold ">Keep in touch with us</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2 className="">Sent A Message</h2>
          <InputCombo
            register={register("title", {
              required: { value: true, message: "name  is required" },
              minLength: { value: 3, message: "name must be at least 3 characters" },
            })}
            label="Title"
            placeholder="Title"
            error={errors.title?.message}
          />
          <InputCombo
            register={register("email", {
              required: { value: true, message: "email" },
              pattern: { value: /\S+@\S+\.\S+/, message: "email is not valid" },
            })}
            label="email"
            placeholder="Enter your email"
            type="email"
            error={errors.title?.message}
          />
        </div>

        {/* icons */}
        <div></div>
      </form>
    </section>
  );
};
