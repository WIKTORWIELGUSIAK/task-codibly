/** @format */

import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageSlice";
import dataReducer from "./dataSlice";
import idReducer from "./idSlice";
import errorReducer from "./errorSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    data: dataReducer,
    id: idReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
