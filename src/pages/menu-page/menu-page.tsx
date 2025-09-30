import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import { Menu } from '@/features/menu/ui/menu/menu';
import { userMock } from '../profile-page/profile-page';

const itemsMock = [
    {
      label: "Профиль",
      path: "/profile",
    },
    {
      label: "Заявки",
      path: "/requests",
    },
    {
      label: "Выход",
      path: "/logout",
    },
]

export const MenuPage: FC = () => {
    return (
        <Page back={false}>
            <Menu user={userMock} items={itemsMock} />
        </Page>
    );
};
