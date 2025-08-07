import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter((todo) => todo.title !== action.payload);
    },
    toggleTask: (state, action) => {
      return state.map((todo) =>
        todo.title === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
    editTask: (state, action) => {
      const { oldTitle, newTitle } = action.payload;
      return state.map((todo) =>
        todo.title === oldTitle ? { ...todo, title: newTitle } : todo
      );
    },
  },
});

export const { addTask, removeTask, toggleTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
