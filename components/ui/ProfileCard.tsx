import { Avatar } from "@mantine/core";
import { SignOut } from "./AuthComponent";
import { User } from "@/lib/types";

import { PiSignOut } from "react-icons/pi";

interface ProfileCardProps {
  readonly user: User;
}

function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className='flex items-center'>
      <SignOut>
        <PiSignOut />
      </SignOut>

      <div className='flex items-center space-x-3'>
        <Avatar size={"sm"} src={user?.image} />
        <div>
          <h6 className='font-semibold text-sm'>{user?.name}</h6>
          <p className='text-xs'>{user?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
