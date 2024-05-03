import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import lessonsList from '../utils/lessons.json';

export interface lessonsListState {
  lessonData: object;
}
const lessons = lessonsList.lessons;

const initialState: lessonsListState = {
  lessonData: lessons,
};

export const lessonsSlice = createSlice({
  name: 'lessonsList',
  initialState,
  reducers: {
    allLessons: (state, action) => {
      return state;
    },
    currentLesson: (state, action: PayloadAction) => {
      const currentLesson = lessons.filter((lessonItem) => lessonItem.name === action.payload)[0];

      console.log(currentLesson);

      return currentLesson;
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentLesson } = lessonsSlice.actions;

export default lessonsSlice.reducer;
