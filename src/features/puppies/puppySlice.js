import { api } from "../../store/api";
import { createSlice } from "@reduxjs/toolkit";
import PuppyDetails from "./PuppyDetails";
/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Puppy"],
      transformResponse: (response, meta, arg) => response.data.players,
    }),
    getPuppy: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ["Puppy"],
      transformResponse: (response, meta, arg) => response.data.player,
    }),
    addPuppy: builder.mutation({
      query: () => ({
        url: "/",
        method: "PUT",
      }),
      invalidatesTags: ["Puppy"],
      transformResponse: (response, meta, arg) => response.data,
    }),
    deletePuppy: builder.mutation({
      query: () => ({
        url: "/",
        method: "DELETE",
      }),
      invalidatesTags: ["Puppy"],
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;
export default puppyApi;
