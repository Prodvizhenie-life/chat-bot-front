import { IndexPage } from '@/pages/index-page/index-page';
import { ReactElement } from 'react';

type TBaseRoute = {
    element: ReactElement;
    children?: TRouteObject[];
};

type TPathRoute = TBaseRoute & {
    path: string;
};

type TIndexRoute = TBaseRoute & {
    index: true;
};

type TRouteObject = TPathRoute | TIndexRoute;

export const routes: TRouteObject[] = [
    { path: '/', element: <IndexPage /> }
];
