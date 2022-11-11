import { Comment } from "./comment-types";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import reqInstance from "../../lib";

type CommentState = {
  comments: Comment[];
  isLoading: boolean;
  error: string | null;
};

const initialState: CommentState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const getCommentsById = createAsyncThunk(
  "comments/fetchComments",
  async (id: string) => {
    try {
      const response = await reqInstance.get(`comments?questionId=${id}`);
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCommentsById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(
        getCommentsById.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false;
          state.comments = action.payload;
        }
      )
      .addCase(
        getCommentsById.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default commentSlice.reducer;
