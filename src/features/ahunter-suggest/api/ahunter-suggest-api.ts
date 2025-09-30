import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TPersonSuggestResponse } from '../model/types/t-person-suggest-response';
import { TAddressSuggestResponse } from '../model/types/t-address-suggest-response.ts';

export const ahunterSuggestApi = createApi({
    reducerPath: 'ahunterSuggestApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_SUGGEST_URL,
    }),
    endpoints: (builder) => ({
        getPersonSuggestions: builder.query<TPersonSuggestResponse, string>({
            query: (query) =>
                `person?output=json&query=${encodeURIComponent(query)}`,
            keepUnusedDataFor: 60,
        }),
        getAddressSuggestions: builder.query<TAddressSuggestResponse, string>({
            query: (query) =>
                `address?output=json&query=${encodeURIComponent(query)}`,
            keepUnusedDataFor: 60,
        }),
    }),
});

export const {
    useGetPersonSuggestionsQuery,
    useGetAddressSuggestionsQuery,
} = ahunterSuggestApi;
