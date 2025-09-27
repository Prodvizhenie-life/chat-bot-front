import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import { Onboarding } from '@/features/onboarding/ui/onboarding/onboarding';

export const IndexPage: FC = () => {
    return (
        <Page back={false}>
            <Onboarding />
        </Page>
    );
};
