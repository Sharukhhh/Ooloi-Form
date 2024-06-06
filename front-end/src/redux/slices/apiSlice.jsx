import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi ( {
    reducerPath : 'api',
    baseQuery: fetchBaseQuery({baseUrl : 'https://ooloi-form-backend.onrender.com/api/'}),

    endpoints : (builder) => ({
        getJsonData : builder.query({
            query: () => 'data',
        }),
    }),
});

export const { useGetJsonDataQuery }  = apiSlice;