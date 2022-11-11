import { Question } from "./question-types";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import reqInstance from "../../lib";

type QuestionState = {
  question: Question[];
  isLoading: boolean;
  error: string | null;
};

const initialState: QuestionState = {
  question: [],
  isLoading: false,
  error: null,
};

export const getQuestionById = createAsyncThunk(
  "question/fetchQuestions",
  async (id: string) => {
    try {
      const response = await reqInstance.get(`questions?id=${id}`);
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
);

const questionByIdSlice = createSlice({
  name: "singleQuestion",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getQuestionById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(
        getQuestionById.fulfilled,
        (state, action: PayloadAction<Question[]>) => {
          state.isLoading = false;
          state.question = action.payload;
        }
      )
      .addCase(
        getQuestionById.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default questionByIdSlice.reducer;
