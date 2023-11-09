import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ReviewsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Reviews: FC<ReviewsProps> = ({ ...rest }) => {
    return (
      <div className="rounded-sm border border-teal-600 px-4 py-2" {...rest}>
        Reviews
      </div>
    );
};
