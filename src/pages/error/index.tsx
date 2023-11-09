import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface indexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const error: FC<indexProps> = ({ ...rest }) => {
  return <div {...rest}></div>;
};
