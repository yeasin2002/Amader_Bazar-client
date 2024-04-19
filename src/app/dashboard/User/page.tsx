import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "$ui/table"

import type { AllUsersResponse } from "@/interface"
import { getUsersToken } from "@/lib"
import { Button } from "@/ui"
import { $fetch } from "@/utils"
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Refetch } from "./Refetch"
import { UserDetails } from "./UserDetails"

interface UserProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const User: FC<UserProps> = async ({ ...rest }) => {
  const data = (await $fetch("/user", {
    next: { revalidate: 60 * 60, tags: ["users"] },
  })) as AllUsersResponse

  return (
    <div {...rest} className="container w-full space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="profile-route-title">User Information</h1>
        <Refetch />
      </div>

      <table className="w-full">
        <Table>
          <TableHeader className="rounded-md bg-gray-200 dark:bg-gray-700">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="text-right">Address</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((user) => {
              return (
                <TableRow key={user?._id}>
                  <TableCell className="font-medium">{user?.name}</TableCell>
                  <TableCell>{user?.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell className="text-right">
                    {user.address || <p className="text-rose-600/60">------</p>}
                  </TableCell>
                  <TableCell className="text-right">
                    <UserDetails user={user} />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </table>
    </div>
  )
}

export default User
