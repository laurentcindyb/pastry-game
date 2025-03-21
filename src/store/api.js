import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const API_URL = 'http://localhost:3001/api-yams';

export const patisserieApi = createApi({
  reducerPath: 'patisserieApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getPatisseriesRemaining: builder.query({
      query: () => '/src/pastrie', 
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login', 
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/user/logout', 
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetPatisseriesRemainingQuery, useLoginMutation, useLogoutMutation } = patisserieApi;
