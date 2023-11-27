import { ProductTable } from "../ProductTable"
import { UserProfileInfo } from "../useProfileInfo"

import { Fragment } from "react"

export const Default = () => {
  return (
    <Fragment>
      <div className="w-full px-2">
        <UserProfileInfo />
        <div>
          <ProductTable />
        </div>
      </div>
    </Fragment>
  )
}
