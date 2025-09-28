import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';
import { useParams } from 'react-router-dom';

export const BotFlowPage: FC = () => {
    const { id } = useParams<{ id?: string }>();

    return (
        <Page back={true}>
            <div>{id}</div>        
        </Page>
    );
};
