import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import { LoginForm } from '@/features/auth/ui/login-form/login-form';

export const LoginPage: FC = () => {
    return (
        <Page back={false}>
            <LoginForm />
        </Page>
    );
};
