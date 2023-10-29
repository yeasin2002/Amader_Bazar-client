import { FC, HTMLAttributes } from "react";

interface ContactProps
    extends React.DetailedHTMLProps<
        HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}
export const Contact: FC<ContactProps> = ({ ...rest }) => {
    return <div {...rest}>index</div>;
};
