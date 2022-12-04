import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './movie/api';
import movieSlice from './movie';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movie: movieSlice,
  },

  // Thêm cấu hình middleware để dùng được các chức năng của RTK Query như caching, invalidation, polling, ...
  middleware: (gDM) => gDM()
  .concat([
    movieApi.middleware
  ])
});


export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>