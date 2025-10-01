import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import { Requests } from '@/features/requests/ui/requests/requests';
import requests from '../../../public/requests/requests.json';

export const RequestsPage: FC = () => {
    return (
        <Page back={false}>
            <Requests requests={requests.requests} />
        </Page>
    );
};
