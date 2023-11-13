import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface indexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const error: FC<indexProps> = ({ ...rest }) => {
  return (
    <section {...rest}>
      <h1>An Error Occur</h1>
    </section>
  )
};
