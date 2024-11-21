import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      state = state + 1;
      return state;
    },
    decrement(state, action) {
      state = state - 1;
      return state;
    },
    reset(state, action) {
      state = 0;
      return state;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
