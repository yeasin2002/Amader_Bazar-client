import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface AdditionalInformationProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AdditionalInformation: FC<AdditionalInformationProps> = ({
    ...rest
}) => {
    return <div {...rest}>index</div>;
};
