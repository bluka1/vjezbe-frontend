import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error;
      }
    });
  },
});

export default dataSlice.reducer;
