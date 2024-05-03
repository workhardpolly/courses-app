import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface currentLessonState {
  lessonData: object;
}

const initialState: currentLessonState = {
  lessonData: {},
};

export const currentLessonSlice = createSlice({
  name: 'currentLessonSlice',
  initialState,
  reducers: {
    chooseLesson: (state, action) => {
      console.log(action.payload);

      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { chooseLesson } = currentLessonSlice.actions;

export default currentLessonSlice.reducer;
