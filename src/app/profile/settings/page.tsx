import { DialogWrapper } from "@/components"
import { exo_2 } from "@/font"
import { cn } from "@/lib"
import { ChangePassword, DeleteAccount, UpdateAvatar, UpdateProfileInfo, UserIntro } from "./index"

const Setting = () => {
  const allComponents = [
    {
      title: "Update Avatar",
      jsx: UpdateAvatar,
    },
    {
      title: "Update Profile Information",
      jsx: UpdateProfileInfo,
    },
    {
      title: "Change Password",
      jsx: ChangePassword,
    },
  ]

  return (
    <div className="grid h-full w-full  translate-y-1/4 place-items-center  ">
      <div className="into-center  -translate-y-24 flex-col  rounded-xl bg-gray-100 p-5  shadow-lg ring-2  ring-blue-400/40  sm:w-1/3 ">
        <UserIntro />

        <div className={cn("mt-5 flex w-full   flex-col gap-y-4 bg-gray-100 p-5")}>
          {allComponents.map((Item) => {
            return (
              <DialogWrapper
                key={Item.title}
                title={Item.title}
                className={cn(
                  "w-full cursor-pointer rounded-md bg-gray-200 p-4 text-left shadow-md hover:bg-gray-200 ",
                  "dark:bg-gray-900",
                  exo_2.className
                )}>
                <Item.jsx />
              </DialogWrapper>
            )
          })}
          <DialogWrapper
            title={"Delete Account"}
            className={
              "mt-5 w-full cursor-pointer rounded-md bg-red-600 p-4  text-left   text-white shadow-md hover:bg-red-700" +
              exo_2.className
            }>
            <DeleteAccount />
          </DialogWrapper>
        </div>
      </div>
    </div>
  )
}

export default Setting
