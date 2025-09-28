import { useParams } from 'react-router-dom';
import { useGetMainFlowQuery } from '@/features/flow/api/flow-api';
import { FC } from 'react';
import { BotFlow } from '@/features/flow/ui/bot-flow/bot-flow';

export const BotFlowPage: FC = () => {
    const { data: flow } = useGetMainFlowQuery('flow/main-flow.json');
    const { id } = useParams<{ id: string }>();

    if (!flow || !id) return null;
    return <BotFlow flow={flow} stepId={id} />;
};
