import { FC } from 'react';
import { UserInfo } from '../user-info/user-info';
import { MenuItem } from '../menu-item/menu-item';
import { TUser } from '@/entities/user/model/t-user';
import { BurgerMenu } from '@/features/flow/ui/burger-menu/burger-menu';

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
    <nav className="w-full h-full flex flex-col items-center justify-between max-w-xs mx-auto py-6"
        style={{ minHeight: '100vh' }}
    >
      <BurgerMenu />
      <ul className="flex-1 flex flex-col gap-1 mt-40 w-full">
        {items.map((item) => (
          <MenuItem key={item.path} {...item} />
        ))}
      </ul>
      
      <UserInfo user={user} />
    </nav>
  );
}
