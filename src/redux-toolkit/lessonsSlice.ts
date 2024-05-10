import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// import lessonsList from '../utils/lessons.json';

export interface lessonsListState {
  lessonsData: object[];
}
const lessons = lessonsList.lessons;

const initialState: lessonsListState = {
  lessonsData: lessons,
};

export const lessonsSlice = createSlice({
  name: 'lessonsList',
  initialState,
  reducers: {
    allLessons: (state) => {
      return state;
    },
    addNote: (state, action) => {
      state.lessonsData.filter((item) => {
        if (item.name == action.payload[0]) {
          console.log(item.title);
          item.notes = action.payload[1];
          return;
        }
        return;
      });

      return state;
    },
    addDoneFlag: (state, action) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { allLessons, addNote } = lessonsSlice.actions;

export default lessonsSlice.reducer;
