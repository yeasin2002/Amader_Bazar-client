import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface indexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const index: FC<indexProps> = ({ ...rest }) => {
  return <div {...rest}>FAQ</div>;
};
