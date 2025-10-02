import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import { RequestCategories } from '@/features/requests/ui/request-categories/request-categories';
import { useGetMainFlowQuery } from '@/features/flow/api/flow-api';
import { Loading } from '@/shared/ui/loading/loading';
import { DataJson } from '@/shared/ui/data-json/data-json';

export const RequestCategoriesPage: FC = () => {
    const {
        data: flow,
        isLoading,
        error,
    } = useGetMainFlowQuery('flow/main-flow.json');

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
            <RequestCategories categories={flow ? flow.categories : []} />
        </Page>
    );
};
