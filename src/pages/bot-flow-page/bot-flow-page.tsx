import { useParams } from 'react-router-dom';
import { useGetMainFlowQuery } from '@/features/flow/api/flow-api';
import { FC } from 'react';
import { BotFlow } from '@/features/flow/ui/bot-flow/bot-flow';
import { Page } from '@/shared/ui/page/page';

export const BotFlowPage: FC = () => {
    const { data: flow } = useGetMainFlowQuery('flow/main-flow.json');
    const { id } = useParams<{ id: string }>();

    if (!flow || !id) return null;
    return (
        <Page back={true} className="w-full h-screen flex flex-col items-center justify-between min-h-screen max-w-xs mx-auto py-6">
            <BotFlow flow={flow} stepId={id} />
        </Page>
    );
};
