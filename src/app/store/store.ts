import { userApi } from '@/entities/user/api/user-api';
import { envModeSlice } from '@/features/env-mode/model/env-mode-slice';
import { configureStore, Action, ThunkAction, ThunkMiddleware, UnknownAction } from '@reduxjs/toolkit';

import logger from 'redux-logger';

const isDev = process.env.NODE_ENV === 'development';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        envMode: envModeSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware().concat(
            userApi.middleware,
        )

        if (isDev) {
            middlewares.push(logger as ThunkMiddleware<any, UnknownAction>);
        }

        return middlewares;
    },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const makeStore = () => store;
export type TAppStore = ReturnType<typeof makeStore>;
export type TAppState = ReturnType<TAppStore['getState']>;
export type TAppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    TAppState,
    unknown,
    Action
>;