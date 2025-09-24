import type { FC } from 'react';

import { Page } from '@/shared/ui/page/page';


export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <h1 className='text-3xl font-bold'>Старт</h1>
    </Page>
  );
};
