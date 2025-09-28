import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import { TUser } from '@/entities/user/model/t-user';
import { ProfileUI } from '@/entities/user/ui/profile';

export const userMock: TUser = {
  id: '1',
  image: 'https://img.daisyui.com/images/profile/demo/superperson@192.webp',
  firstName: 'Сергей',
  lastName: 'Иванов',
  patronymic: 'Федорович',
  email: 'sergey.ivanov@example.com'
};

export const ProfilePage: FC = () => {
  return (
    <Page back={false}>
      <ProfileUI user={userMock} />
    </Page>
  );
};
