import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getMovie from './getMovie';
import getMovieList from './getMovieList';
import getSearch from './getSearch';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  tagTypes: ['Movie'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}`,
  }),
  endpoints: (builder) => ({
    getMovieList: builder.query(getMovieList),
    getMovie: builder.query(getMovie),
    getSearch: builder.mutation(getSearch),
  })
});

export const {
  useGetMovieListQuery,
  useGetMovieQuery,
  useGetSearchMutation
} = movieApi;
