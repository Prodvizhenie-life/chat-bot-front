import { useMemo } from 'react';
import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';
import {
    retrieveLaunchParams,
    useSignal,
    isMiniAppDark,
} from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';

import { routes } from '@/app/routing/routes';

export function App() {
    const lp = useMemo(() => retrieveLaunchParams(), []);
    const isDark = useSignal(isMiniAppDark);

    return (
        <AppRoot
            appearance={isDark ? 'dark' : 'light'}
            platform={
                ['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'
            }
        >
            <HashRouter>
                <Routes>
                    {routes.map((route, i) =>
                        'index' in route ? (
                            <Route key={i} index element={route.element} />
                        ) : (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.element}
                            >
                                {route.children &&
                                    route.children.map((child, ci) =>
                                        'index' in child ? (
                                            <Route
                                                key={ci}
                                                index
                                                element={child.element}
                                            />
                                        ) : (
                                            <Route
                                                key={child.path}
                                                path={child.path}
                                                element={child.element}
                                            />
                                        )
                                    )}
                            </Route>
                        )
                    )}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </HashRouter>
        </AppRoot>
    );
}
