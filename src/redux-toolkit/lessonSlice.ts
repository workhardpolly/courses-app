import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import lessonsList from '../utils/lessons.json';

export interface lessonsListState {
  lessonsData: object;
}
const lessons = lessonsList.lessons;

const initialState: lessonsListState = {
  lessonsData: lessons,
};

export const lessonsSlice = createSlice({
  name: 'lessonsList',
  initialState,
  reducers: {
    allLessons: (state, action) => {
      return state;
    },
    addNote: (state, action) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { allLessons, addNote } = lessonsSlice.actions;

export default lessonsSlice.reducer;
