import { Question } from "./question-types";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import reqInstance from "../../lib";

type QuestionState = {
  questions: Question[];
  isLoading: boolean;
  error: string | null;
};

const initialState: QuestionState = {
  questions: [],
  isLoading: false,
  error: null,
};

export const getQuestions = createAsyncThunk(
  "question/fetchQuestions",
  async (_, thunkApi) => {
    try {
      const response = await reqInstance.get<Question[]>("questions");
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getQuestions.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(
        getQuestions.fulfilled,
        (state, action: PayloadAction<Question[]>) => {
          state.isLoading = false;
          state.questions = action.payload;
        }
      )
      .addCase(getQuestions.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default questionSlice.reducer;
