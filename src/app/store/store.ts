import { userApi } from '@/entities/user/api/user-api';
import { ahunterSuggestApi } from '@/features/ahunter-suggest/api/ahunter-suggest-api';
import { envModeSlice } from '@/features/env-mode/model/env-mode-slice';
import { flowApi } from '@/features/flow/api/flow-api';
import { flowSlice } from '@/features/flow/model/flow-slice';
import { configureStore, Action, ThunkAction, ThunkMiddleware, UnknownAction } from '@reduxjs/toolkit';

import logger from 'redux-logger';

const isDev = process.env.NODE_ENV === 'development';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [flowApi.reducerPath]: flowApi.reducer,
        [ahunterSuggestApi.reducerPath]: ahunterSuggestApi.reducer,
        envMode: envModeSlice.reducer,
        flow: flowSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware().concat(
            flowApi.middleware,
            userApi.middleware,
            ahunterSuggestApi.middleware,
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