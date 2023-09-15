import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
  baseUrl: "https://6501fb3f736d26322f5c9696.mockapi.io/",
});

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery,
  tagTypes: ["Cars"],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: ({ page, limit }) => ({
        url: `adverts`,
        params: { page, limit },
      }),
      providesTags: ["Cars"],
    }),
  }),
});

export const {useGetCarsQuery} = carsApi