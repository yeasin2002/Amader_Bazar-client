import { FC, HTMLAttributes } from "react";

interface AboutProps
    extends React.DetailedHTMLProps<
        HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}

export const About: FC<AboutProps> = ({ ...rest }) => {
    return <div {...rest}>index</div>;
};
