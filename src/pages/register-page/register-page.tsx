import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';

export const RegisterPage: FC = () => {
    return (
        <Page back={false}>
            <h1 className='text-5xl'>Страница регистрации</h1>
        </Page>
    );
};
