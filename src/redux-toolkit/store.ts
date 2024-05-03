import { configureStore } from '@reduxjs/toolkit';
import lessonsSlice from './lessonSlice';
import currentLessonSlice from './currentLessonSlice';

export const store = configureStore({
  reducer: { lessonsSlice, currentLessonSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
