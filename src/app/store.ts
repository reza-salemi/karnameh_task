import { configureStore } from "@reduxjs/toolkit";

import questionReducer from "../features/question/question-slice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
