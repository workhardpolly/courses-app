import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface currentLessonState {
  lessonData: object;
}

const initialState: currentLessonState = {
  lessonData: {},
};

export const currentLessonSlice = createSlice({
  name: 'currentLessonReducer',
  initialState,
  reducers: {
    chooseLesson: (state, action) => {
      // console.log(action.payload);
      // console.log(state);

      return action.payload;
    },
    updateLesson: (state, action) => {
      const notes = action.payload;

      return { ...state, notes };
    },
  },
});

// Action creators are generated for each case reducer function
export const { chooseLesson, updateLesson } = currentLessonSlice.actions;

export default currentLessonSlice.reducer;
