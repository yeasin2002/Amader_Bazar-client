import { Popover, PopoverContent, PopoverTrigger } from "$ui";
import { LogOutIcon, User2, User2Icon } from "lucide-react";

export const UserProfileCheck = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <User2 className="ml-4" />
      </PopoverTrigger>
      <PopoverContent className="space-y-6">
        <div className="flex">
          <User2Icon />
          Profile
        </div>
        <div className="flex">
          <LogOutIcon />
          Log Out
        </div>
      </PopoverContent>
    </Popover>
  );
};
