import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getMovie from './getMovie';
import getPopularMovie from './getPopularMovie';
import getSearch from './getSearch';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  tagTypes: ['Movie'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}`,
  }),
  endpoints: (builder) => ({
    getPopularMovie: builder.query(getPopularMovie),
    getMovie: builder.query(getMovie),
    getSearch: builder.mutation(getSearch),
  })
});

export const {
  useGetPopularMovieQuery,
  useGetMovieQuery,
  useGetSearchMutation
} = movieApi;
