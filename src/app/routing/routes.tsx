
import { IndexPage } from '@/pages/index-page/index-page';
import { ReactElement } from 'react';

interface BaseRoute {
    element: ReactElement;
    children?: RouteObject[];
}

interface PathRoute extends BaseRoute {
    path: string;
}

interface IndexRoute extends BaseRoute {
    index: true;
}

type RouteObject = PathRoute | IndexRoute;

export const routes: RouteObject[] = [
    { path: '/', element: <IndexPage /> },
];