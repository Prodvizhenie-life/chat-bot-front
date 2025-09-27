import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import { ProfileUI } from '@/entities/user/ui/Profile';

const userMock = {
  // image: 'https://img.daisyui.com/images/profile/demo/superperson@192.webp',
  name: 'Сергей'
}

export const ProfilePage: FC = () => {
    return (
        <Page back={false}>
            <ProfileUI 
              image={userMock.image}
              name={userMock.name}
            />
        </Page>
    );
};
