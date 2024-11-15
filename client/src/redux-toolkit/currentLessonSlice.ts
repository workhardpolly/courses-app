import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const currentLessonSlice = createSlice({
  name: "currentLessonReducer",
  initialState,
  reducers: {
    chooseLesson: (state: string, action: { payload: string }) => {
      // console.log(action.payload);
      // console.log(state);

      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { chooseLesson } = currentLessonSlice.actions;

export default currentLessonSlice.reducer;
