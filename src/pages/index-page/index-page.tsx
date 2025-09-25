import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';

export const IndexPage: FC = () => {
    return (
        <Page back={true}>
            <p className="font-light ...">The quick brown fox ...</p>
            <p className="font-normal ...">The quick brown fox ...</p>
            <p className="font-medium ...">The quick brown fox ...</p>
            <p className="font-semibold ...">The quick brown fox ...</p>
            <p className="font-bold ...">The quick brown fox ...</p>

            <p className="text-sm ...">The quick brown fox ...</p>
            <p className="text-base ...">The quick brown fox ...</p>
            <p className="text-lg ...">The quick brown fox ...</p>
            <p className="text-xl ...">The quick brown fox ...</p>
            <p className="text-2xl ...">The quick brown fox ...</p>

            <p className="italic font-bold text-7xl">The quick brown fox ...</p>
        </Page>
    );
};
