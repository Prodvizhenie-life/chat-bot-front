import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import { RequestsList } from '@/features/requests/ui/requests-list/requests-list';

export const RequestsPage: FC = () => {
    return (
        <Page back={false}>
            <RequestsList />
        </Page>
    );
};
