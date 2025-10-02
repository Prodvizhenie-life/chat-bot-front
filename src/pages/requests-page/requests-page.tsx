import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import { Requests } from '@/features/requests/ui/requests/requests';
import { useGetRequestMockQuery } from '@/features/flow/api/flow-api';
import { DataJson } from '@/shared/ui/data-json/data-json';
import { Loading } from '@/shared/ui/loading/loading';

export const RequestsPage: FC = () => {
    const { data, isLoading, error } = useGetRequestMockQuery(
        'requests/requests.json'
    );

    if (error) return <DataJson data={error} />;

    if (isLoading)
        return (
            <Loading
                className="w-full h-full flex items-center justify-center"
                color="text-primary"
                size="loading-xs"
                type="loading-infinity"
            />
        );

    return (
        <Page back={false}>
            <Requests requests={data?.requests || []} />
        </Page>
    );
};
