import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import { Requests } from '@/features/requests/ui/requests/requests';
import requestsData from '../../../public/requests/requests.json';
import { TRequest } from '@/features/requests/model/types/t-requests';

const requests = requestsData.requests as TRequest[];

export const RequestsPage: FC = () => {
    return (
        <Page back={false}>
            <Requests requests={requests} />
        </Page>
    );
};
