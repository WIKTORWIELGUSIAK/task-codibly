/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  page: number;
}

const initialState: CounterState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: "pageNumber",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
