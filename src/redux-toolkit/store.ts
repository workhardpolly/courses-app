import { configureStore } from '@reduxjs/toolkit';
// import lessonsSlice from './lessonsSlice';
import currentLessonReducer from './currentLessonSlice';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
  // reducer: { lessonsSlice, currentLessonSlice },
  reducer: { currentLesson: currentLessonReducer, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// https://www.youtube.com/watch?v=HyZzCHgG3AY&t=1195s
