import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api";

export const store = configureStore({
  reducer: {
    // counter: counterSlice,

    [api.reducerPath]: api.reducer, // caching
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
