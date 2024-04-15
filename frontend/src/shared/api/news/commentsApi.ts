import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IComment, INewsCommentsInfo } from './type'

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.api_url }),
  endpoints: (builder) => ({
    getCommentRepliesById: builder.query<IComment[], number>({
      query: (id) => `/replies/${id}`,
    }),
    getNewsCommentsInfo: builder.query<INewsCommentsInfo, number>({
      query: (id) => `/hacker-new-comments-info/${id}`,
    }),
  }),
})

export const { useGetCommentRepliesByIdQuery, useGetNewsCommentsInfoQuery } = commentsApi