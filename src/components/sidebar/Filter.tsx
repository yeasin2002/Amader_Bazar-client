import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface FilterAreaProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FilterArea: FC<FilterAreaProps> = ({ ...rest }) => {
    return (
        <div {...rest}>
            <h1>Yeasin</h1>
        </div>
    );
};
