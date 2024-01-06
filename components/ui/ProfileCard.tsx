import { Avatar } from "@mantine/core";
import { SignOut } from "./AuthComponent";

import { PiSignOut } from "react-icons/pi";
import { User } from "@/lib/db/schema";

interface ProfileCardProps {
  readonly user: User | undefined;
}

function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className='flex items-center space-x-4'>
      <SignOut>
        <PiSignOut />
      </SignOut>

      <div className='flex items-center space-x-3'>
        {user?.image ? (
          <Avatar size={"sm"} src={user?.image} />
        ) : (
          <Avatar size={"sm"}>{user?.name?.charAt(0)}</Avatar>
        )}
        <div>
          <h6 className='font-semibold text-sm'>{user?.name}</h6>
          <p className='text-xs'>{user?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
