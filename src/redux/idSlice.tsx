/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IdState {
  id: string;
}

const initialState: IdState = {
  id: "",
};

export const idSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    updateId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const { updateId } = idSlice.actions;

export default idSlice.reducer;
