import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface AllProductsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AllProduct: FC<AllProductsProps> = ({ ...rest }) => {
  return <div {...rest}>index</div>;
};
