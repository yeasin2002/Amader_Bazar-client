import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface LoadingProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Loading: FC<LoadingProps> = ({ ...rest }) => {
    return <div {...rest}>loading...............</div>;
};
