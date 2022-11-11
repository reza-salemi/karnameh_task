import { configureStore } from "@reduxjs/toolkit";

import questionReducer from "../features/question/question-slice";
import commentReducer from "../features/comments/comment.slice";
import questionByIdReducer from "../features/question/question-by-id.slice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
    questionById: questionByIdReducer,
    comments: commentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
