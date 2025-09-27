import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import { RegisterForm } from '@/features/auth/ui/register-form/register-form';

export const RegisterPage: FC = () => {
    return (
        <Page back={false}>
            <RegisterForm />
        </Page>
    );
};
