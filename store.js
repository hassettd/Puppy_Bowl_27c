import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import puppyApi from "../features/puppies/puppySlice";
// TODO: configure the store to use the API slice's auto-generated reducer and custom middleware.
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    register: puppyApi,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(api.middleware),
});
