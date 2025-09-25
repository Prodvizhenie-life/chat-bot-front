import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';
import { routes } from '@/app/routing/routes';
import { AppRoot } from '@telegram-apps/telegram-ui';

export function App() {
    return (
        <AppRoot appearance="light" platform="base">
            <HashRouter future={{ v7_relativeSplatPath: true }}>
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
