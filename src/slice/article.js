import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  error: null,
}

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart: state => {
      state.isLoading = true
    },
    getArticlesSuccess: (state, action) => {
      state.articles = action.payload
      state.isLoading = false
    },
    getArticlesFailure: (state, action) => {
      // state.isLoading = false
      state.error = action.payload
    }
  }

});

export const { getArticlesStart, getArticlesSuccess, getArticlesFailure } = articleSlice.actions;
export default articleSlice.reducer;