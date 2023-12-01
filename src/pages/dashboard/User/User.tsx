import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "$ui/table"

import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { UserDetails } from "./UserDetails"

interface UserProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const User: FC<UserProps> = ({ ...rest }) => {
  return (
    <div {...rest} className="container w-full space-y-10">
      <h1 className="heading-2">User Information</h1>

      <table className="w-full">
        <Table>
          <TableCaption>A list of your user.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="text-right">isBanned</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">
                <UserDetails />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </table>
    </div>
  )
}
