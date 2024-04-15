import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {INew, INewFull} from './type'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.api_url }),
  endpoints: (builder) => ({
    getLatestNews: builder.query<INew[], void>({
      query: () => `/hackernewslist`,
    }),
    getById: builder.query<INewFull, string>({
      query: (id) => `/hackernew/${id}`,
    })
  }),
})

export const { useGetLatestNewsQuery, useGetByIdQuery } = newsApi