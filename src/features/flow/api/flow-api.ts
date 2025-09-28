import { TSlideItemProps } from '@/features/onboarding/ui/slide-item/slide-item';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const flowApi = createApi({
    reducerPath: 'flowApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/', // корень сайта — чтобы доставать из public
    }),
    endpoints: (builder) => ({
        getMainFlow: builder.query<TFlow, string>({ // TODO описать тип для flow
            query: (flowPath) => ({
                url: flowPath,
                method: 'GET',
            }),
        }),
        getOnboardingFlow: builder.query<{ slides: TSlideItemProps[] }, string>({ // TODO описать тип для flow
            query: (flowPath) => ({
                url: flowPath,
                method: 'GET',
            }),
        }),

    }),
});

export const {
    useGetOnboardingFlowQuery,
    useGetMainFlowQuery
} = flowApi;
