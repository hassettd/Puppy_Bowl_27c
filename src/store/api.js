import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "2109-UNF-HY-WEB-PT/players";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

// TODO: configure createApi to use API_URL as the base URL
// TODO: add "Puppy" as a tag type.
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    // change this to localhost3000?
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Puppy"],
  // need to add more within endpoints?
  endpoints: () => ({}),
});
