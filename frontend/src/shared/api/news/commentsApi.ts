import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IComment } from './type'

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.api_url }),
  endpoints: (builder) => ({
    getCommentRepliesById: builder.query<IComment[], number>({
      query: (id) => `/replies/${id}`,
    })
  }),
})

export const { useGetCommentRepliesByIdQuery } = commentsApi