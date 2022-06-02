/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TotalData {
  data: DataI;
}
interface DataState {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

interface DataI {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: DataState[] | DataState;
}

const initialState: TotalData = {
  data: {
    page: 1,
    per_page: 5,
    total: 0,
    total_pages: 0,
    data: [],
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;
