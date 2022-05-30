import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface autoFillState {
  autoFillData: any[];
  loading: boolean;
  error: any;
}
const initialState: autoFillState = {
  autoFillData: [],
  loading: true,
  error: null,
};

const autoFillSlice = createSlice({
  name: "autoFill",
  initialState,
  reducers: {
    getAutoFillLoading: (state) => {
      state.loading = true;
      state.autoFillData = [];
      state.error = null;
    },
    getAutoFillSuccess: (state, action) => {
      state.loading = false;
      state.autoFillData = action.payload.data;
      state.error = null;
    },
    getAutoFillFailure: (state, action) => {
      state.loading = false;
      state.autoFillData = [];
      state.error = action.payload.error;
    },
  },
});

export const { getAutoFillFailure, getAutoFillLoading, getAutoFillSuccess } =
  autoFillSlice.actions;

export const selectAutoFillDetails = (state: RootState) =>
  state?.autoFill?.autoFillData;

export const selectAutoFillLoading = (state: RootState) =>
  state?.autoFill?.loading;

export const selectAutoFillError = (state: RootState) => state.autoFill.error;
export default autoFillSlice.reducer;
