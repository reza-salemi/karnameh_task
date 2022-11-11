import { Question } from "./question-types";

import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  nanoid,
} from "@reduxjs/toolkit";
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

const now = new Date();

const formatedDate = String(new Intl.DateTimeFormat("fa-IR").format(now));
const formatedTime = String(
  new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(now)
);

const commentsCount = 0;

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
  reducers: {
    addQuestion: {
      reducer(state, action: PayloadAction<Question>) {
        state.questions.push(action.payload);
      },
      prepare(title: string, text: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            text,
            date: formatedDate,
            time: formatedTime,
            commentsCount,
          },
        };
      },
    },
  },
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

export const { addQuestion } = questionSlice.actions;
export default questionSlice.reducer;
