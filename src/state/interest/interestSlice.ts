import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface interestState {
  interestResponse: any;
  loading: boolean;
  error: any;
}
const initialState: interestState = {
  interestResponse: null,
  loading: true,
  error: null,
};

const interestSlice = createSlice({
  name: "interest",
  initialState,
  reducers: {
    setInterestLoading: (state) => {
      state.loading = true;
      state.interestResponse = null;
      state.error = null;
    },
    setInterestSuccess: (state, action) => {
      state.loading = false;
      state.interestResponse = action.payload.data;
      state.error = null;
    },
    setInterestFailure: (state, action) => {
      state.loading = false;
      state.interestResponse = null;
      state.error = action.payload.error;
    },
  },
});

export const { setInterestFailure, setInterestLoading, setInterestSuccess } =
  interestSlice.actions;

export const selectInterestDetails = (state: RootState) =>
  state?.interest?.interestResponse;

export const selectInterestLoading = (state: RootState) =>
  state?.interest?.loading;

export const selectInterestError = (state: RootState) => state.interest.error;

export default interestSlice.reducer;
