import { configureStore } from '@reduxjs/toolkit'

import {newsApi} from "../shared/api/news/newsApi.ts";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
  devTools: true,
})