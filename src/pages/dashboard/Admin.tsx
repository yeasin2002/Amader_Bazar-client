import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$ui"

import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface AdminProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Admin: FC<AdminProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <h1>DASHBOARD</h1>
      <p>Multikart Admin Panel</p>
    </div>
  )
}
