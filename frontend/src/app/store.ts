import { configureStore } from '@reduxjs/toolkit'

import {newsApi} from "../shared/api/news/newsApi.ts";
import {commentsApi} from "../shared/api/news/commentsApi.ts";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware, commentsApi.middleware),
  devTools: true,
})