import { Table, TableBody, TableHead, TableHeader, TableRow } from "$ui"
import { ProductTableItems } from "@/components"
import { SingleOrdersResponse } from "@/interface"
import { $fetch, getImgSrc } from "@/utils"
import { DetailedHTMLProps, HTMLAttributes } from "react"

import defaultImg from "@/assets/illustration/others/user.jpg"
import Image from "next/image"
import { SingleOrderActions } from "./SingleOrderActions"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  params: { id: string }
}

const OrderDetails = async ({ params, ...rest }: Props) => {
  const data = (await $fetch(`/dashboard/order/${params.id}`)) as SingleOrdersResponse
  const user = data.data.User

  const imgSrc = getImgSrc({
    img: user?.avatar,
    imgType: "user-img",
    notFoundImg: defaultImg,
  })

  const properDate = new Date(user?.createdAt ?? Date.now()).toDateString()

  return (
    <div {...rest} className="mt-32 size-full px-2">
      <h2 className="my-10 text-center font-kurale text-2xl font-bold">Orderer Details</h2>
      <div className="my-10 flex  flex-col  items-center justify-between md:flex-row">
        <div className="flex items-center  gap-x-3">
          <Image
            src={imgSrc}
            alt="User's Image"
            width={500}
            height={500}
            className="aspect-auto size-32 rounded-full   object-cover p-1 ring  ring-brand-500"
          />
          <div>
            <p className="font-kurale  text-2xl font-bold capitalize dark:text-gray-200">{user?.name}</p>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-400">{properDate}</p>
          </div>
        </div>

        <div>
          <h5 className="mb-2 mt-4 text-lg font-bold text-gray-950 dark:text-gray-300   ">Contact Information</h5>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-400">{user?.phone}</p>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-400">{user?.email}</p>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-400">{user?.address}</p>
        </div>
      </div>
      <SingleOrderActions id={params.id} />
      <hr />

      <p className="mb-2 mt-4 text-xl font-bold ">Ordered Products</p>
      <Table className="  w-full">
        <TableHeader>
          <TableRow className="rounded-lg bg-gray-100 text-sm font-semibold uppercase text-gray-600 dark:bg-gray-800 dark:text-gray-500">
            <TableHead>img</TableHead>
            <TableHead>name</TableHead>
            <TableHead>price</TableHead>
            <TableHead className="text-end">
              quantity
              <br />&<br />
              totalSold
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.Products?.map((item) => <ProductTableItems product={item.Product} key={item._id} />)}
        </TableBody>
      </Table>
    </div>
  )
}

export default OrderDetails
