import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { INew } from './type'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.api_url }),
  endpoints: (builder) => ({
    getLatestNews: builder.query<INew[], void>({
      query: () => `/hackernewslist`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLatestNewsQuery } = newsApi