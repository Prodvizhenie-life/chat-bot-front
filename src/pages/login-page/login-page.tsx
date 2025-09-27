import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';

export const LoginPage: FC = () => {
    return (
        <Page back={false}>
            <h1 className='text-5xl'>Страница логина</h1>
        </Page>
    );
};
