import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import data from '../../../public/flow/main-flow.json';
import { RequestCategories } from '@/features/requests/ui/request-categories/request-categories';

export const RequestCategoriesPage: FC = () => {
  const categories = data.categories;

    return (
        <Page back={false}>
            <RequestCategories categories={categories} />
        </Page>
    );
};