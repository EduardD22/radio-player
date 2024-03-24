import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const RADIO_API_KEY = process.env.REACT_APP_RADIO_API_KEY;

const baseQuery = fetchBaseQuery({
  baseUrl: "https://connect.fm-world.com/client2/",
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${RADIO_API_KEY}`);
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: (builder) => ({
    getRadios: builder.query({
      query: (searchQuery: string) => `radios?query=${searchQuery}&limit=25`,
    }),
  }),
});

export const { useGetRadiosQuery } = apiSlice;
