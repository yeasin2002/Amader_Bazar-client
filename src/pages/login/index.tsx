import { FC, HTMLAttributes } from "react";

interface LogInProps
    extends React.DetailedHTMLProps<
        HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}

export const Login: FC<LogInProps> = ({ ...rest }) => {
    return <div {...rest}>login</div>;
};
