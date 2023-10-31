import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface DescriptionProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Description: FC<DescriptionProps> = ({ ...rest }) => {
    return <div {...rest}>index</div>;
};
