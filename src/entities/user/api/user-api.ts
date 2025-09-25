import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TUser } from '../model/t-user';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_BASE_URL + '/user',
    }),
    endpoints: (builder) => ({
        getUser: builder.query<TUser, string>({
            query: (authKey) => ({
                url: '',
                method: 'GET',
                credentials: 'include',
                headers: {
                    Authorization: 'tma ' + authKey,
                },
            }),
        }),

    }),
});

export const {
    useGetUserQuery,
} = userApi;
