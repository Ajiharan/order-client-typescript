import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface userState {
  userResponse: any;
  loading: boolean;
  error: any;
}
const initialState: userState = {
  userResponse: null,
  loading: true,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoading: (state) => {
      state.loading = true;
      state.userResponse = null;
      state.error = null;
    },
    setUserSuccess: (state, action) => {
      state.loading = false;
      state.userResponse = action.payload.data;
      state.error = null;
    },
    setUserFailure: (state, action) => {
      state.loading = false;
      state.userResponse = null;
      state.error = action.payload.error;
    },
  },
});

export const { setUserFailure, setUserLoading, setUserSuccess } =
  userSlice.actions;

export const selectUserDetails = (state: RootState) =>
  state?.user?.userResponse;

export const selectUserLoading = (state: RootState) => state?.user?.loading;

export const selectUserError = (state: RootState) => state.user.error;

export default userSlice.reducer;
