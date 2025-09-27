import { Avatar } from '@/shared/ui/avatar/avatar';
import { FC } from 'react';
import { TUser } from '../model/t-user';

type ProfileUIProps = {
  user: TUser;
}

export const ProfileUI: FC<ProfileUIProps> = ({ user }) => {
  const fullName = `${user.lastName} ${user.firstName} ${user.patronymic}`;

  return (
    <div
      className="w-full h-full flex flex-col gap-6 items-center max-w-xs mx-auto pt-30 p-4"
      style={{ minHeight: '100vh' }}
    >
      <Avatar image={user.image} name={user.firstName} size="xl"/>
      <div className="flex flex-col gap-2 items-center w-full">
        <p className="text-sm text-base-content/40 truncate" style={{ maxWidth: '100%' }}>
          {user.email}
        </p>
        <h2 className="text-2xl font-medium text-center w-full">
          {fullName}
        </h2>
      </div>
    </div>
  )
}