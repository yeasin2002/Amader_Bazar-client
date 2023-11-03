import { InputCombo } from "$components";
import { FC, HTMLAttributes } from "react";

interface ContactProps
    extends React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Contact: FC<ContactProps> = ({ ...rest }) => {
    return (
        <section className="container" {...rest}>
            <h1 className="my-32 text-center text-2xl font-bold ">
                Keep in touch with us
            </h1>

            <div>
                <div>
                    <h2 className="">Sent A Message</h2>
                    <InputCombo />
                </div>

                {/* icons */}
                <div></div>
            </div>
        </section>
    );
};
