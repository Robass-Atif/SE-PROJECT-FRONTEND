import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.currentUser = null; // Reset the current user on logout
      state.error = null; // Clear any previous errors
      state.loading = false; // Reset loading state
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
