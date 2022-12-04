import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getMovie from './getMovie';
import getPopularMovie from './getPopularMovie';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  tagTypes: ['Movie'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}`,
  }),
  endpoints: (builder) => ({
    getPopularMovie: builder.query(getPopularMovie),
    getMovie: builder.query(getMovie),
  })
});

export const {
  useGetPopularMovieQuery,
  useGetMovieQuery
} = movieApi;
