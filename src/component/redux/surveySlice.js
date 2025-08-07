import { createSlice } from "@reduxjs/toolkit";

const surveySlice = createSlice({
  name: "survey",
  initialState: [],
  reducers: {
    addData: (state, action) => {
      state.push(action.payload);
    },
    removeData: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addData, removeData } = surveySlice.actions;
export default surveySlice.reducer;
