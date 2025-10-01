import { IndexPage } from '@/pages/index-page/index-page';
import { LoginPage } from '@/pages/login-page/login-page';
import { RegisterPage } from '@/pages/register-page/register-page';
import { ProfilePage } from '@/pages/profile-page/profile-page';
import { ReactElement } from 'react';
import { BotFlowPage } from '@/pages/bot-flow-page/bot-flow-page';
import { MenuPage } from '@/pages/menu-page/menu-page';
import { RequestsPage } from '@/pages/requests-page/requests-page';

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
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/profile', element: <ProfilePage /> },
    { path: '/bot-flow/:id', element: <BotFlowPage /> },
    { path: '/menu', element: <MenuPage /> },
    { path: '/requests', element: <RequestsPage /> },
];
