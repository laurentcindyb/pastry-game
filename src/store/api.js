import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// URL de ton API (remplace par l'URL réelle)
const API_URL = 'http://localhost:5000/api';

export const patisserieApi = createApi({
  reducerPath: 'patisserieApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getPatisseriesRemaining: builder.query({
      query: () => '/patisseries/remaining', // Remplace par ton endpoint réel
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login', // Remplace par l'endpoint réel pour se connecter
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/user/logout', // Remplace par l'endpoint réel pour se déconnecter
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetPatisseriesRemainingQuery, useLoginMutation, useLogoutMutation } = patisserieApi;
