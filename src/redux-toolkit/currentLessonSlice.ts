import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface currentLessonState {
  lessonData: string | null;
}

const initialState: currentLessonState = {
  lessonData: '5188',
};

export const currentLessonSlice = createSlice({
  name: 'currentLessonReducer',
  initialState,
  reducers: {
    chooseLesson: (state, action) => {
      console.log(action.payload);
      // console.log(state);

      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { chooseLesson } = currentLessonSlice.actions;

export default currentLessonSlice.reducer;
