import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getPopularMovie from './getPopularMovie';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  tagTypes: ['Movie'],
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/movie`,
  }),
  endpoints: (builder) => ({
    getPopularMovie: builder.query(getPopularMovie),
  })
});

export const {
  useGetPopularMovieQuery,
} = movieApi;
