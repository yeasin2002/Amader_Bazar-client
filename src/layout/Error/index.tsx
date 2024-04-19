import type { FC } from "react"

export const Error: FC = ({ ...rest }) => {
  return (
    <div {...rest}>
      <h1>And Error Occur</h1>
    </div>
  )
}
