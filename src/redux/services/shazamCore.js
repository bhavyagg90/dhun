import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "e470bd00afmsh168f3b4f9a9c765p11b31ajsn07795b22cfbe"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/track" }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get-details?key=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/songs/get-related-artist?id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/get-details?id=${artistId}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
} = shazamCoreApi;
