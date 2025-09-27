import { FC } from 'react';
import { UserInfo } from '../user-info/user-info';
import { MenuItem } from '../menu-item/menu-item';
import { TUser } from '@/entities/user/model/t-user';

type MenuProps = {
  user: TUser;
  items: Array<{
    label: string;
    path: string;
    icon?: string;
  }>;
}

export const Menu: FC<MenuProps> = ({ user, items }) => {
  return (
    <div className="w-full h-full flex flex-col max-w-xs mx-auto py-6"
        style={{ minHeight: '100vh' }}
    >
      <div className="flex-1 flex flex-col gap-1 mt-40">
        {items.map((item) => (
          <MenuItem key={item.path} {...item} />
        ))}
      </div>
      
      <UserInfo user={user} />
    </div>
  );
}
