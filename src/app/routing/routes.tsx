import { IndexPage } from '@/pages/index-page/index-page';
import { ProfilePage } from '@/pages/profile-page/profile-page';
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
    { path: '/', element: <IndexPage /> },
    { path: '/profile', element: <ProfilePage /> }
];
