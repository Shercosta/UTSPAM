import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ["0"],
  status: "idle",
};

export const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.unshift(toString(action.payload));
    },
  },
});

export const { add } = workSlice.actions;

export const selectCount = (state) => state.counter.value;

export default workSlice.reducer;
