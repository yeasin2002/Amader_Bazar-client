import { ProductAtaGlance } from "$components/cards/ProductAtaGlance";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface MicroProductContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const MicroProductContainer: FC<MicroProductContainerProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <h4>Category Name</h4>
      <div className="space-y-4">
        <ProductAtaGlance />
        <ProductAtaGlance />
        <ProductAtaGlance />
        <ProductAtaGlance />
      </div>
    </div>
  );
};
