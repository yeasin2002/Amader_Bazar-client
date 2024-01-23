import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/ui"
import { DetailedHTMLProps, HTMLAttributes } from "react"

interface Props {}

export const UpdateAvatar = ({ ...rest }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="setting-items">Update Avatar</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
