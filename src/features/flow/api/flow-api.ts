import { TSlideItemProps } from '@/features/onboarding/ui/slide-item/slide-item';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TFlow } from '../model/types/t-flow';
import { TRequestsResponse } from '@/features/requests/model/types/t-requests';

export const flowApi = createApi({
    reducerPath: 'flowApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/', // корень сайта — чтобы доставать из public
    }),
    endpoints: (builder) => ({
        getMainFlow: builder.query<TFlow, string>({
            query: (flowPath) => ({
                url: flowPath,
                method: 'GET',
            }),
        }),
        getOnboardingFlow: builder.query<{ slides: TSlideItemProps[] }, string>({ 
            query: (flowPath) => ({
                url: flowPath,
                method: 'GET',
            }),
        }),
        getRequestMock: builder.query<TRequestsResponse, string>({
            query: (flowPath) => ({
                url: flowPath,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetOnboardingFlowQuery,
    useGetMainFlowQuery,
    useGetRequestMockQuery,
} = flowApi;
