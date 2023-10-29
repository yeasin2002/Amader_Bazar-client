import { FC, HTMLAttributes } from "react";

interface registerProps
    extends React.DetailedHTMLProps<
        HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}

export const Register: FC<registerProps> = ({ ...rest }) => {
    return <div {...rest}>register</div>;
};
