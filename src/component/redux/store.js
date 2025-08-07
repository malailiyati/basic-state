import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import surveyReducer from "./surveySlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    survey: surveyReducer,
  },
});
