import { Avatar } from '@/shared/ui/avatar/Avatar';
import { FC } from 'react';

type ProfileUIProps = {
  image?: string;
  name: string;
}

export const ProfileUI: FC<ProfileUIProps> = ({image, name}) => {
  return (
    <div
      className="flex flex-col gap-6 items-center max-w-xs mx-auto py-6"
      style={{ minHeight: '100vh' }}
    >
      <Avatar image={image} name={name}/>
      <div className='flex flex-col gap-2 items-center'>
        <h2 className='text-2xl font-medium'>{name}</h2>
      </div>
    </div>
  )
}
