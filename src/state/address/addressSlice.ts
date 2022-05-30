import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface addressState {
  addressResponse: any;
  loading: boolean;
  error: any;
}
const initialState: addressState = {
  addressResponse: null,
  loading: true,
  error: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddressLoading: (state) => {
      state.loading = true;
      state.addressResponse = null;
      state.error = null;
    },
    setAddressSuccess: (state, action) => {
      state.loading = false;
      state.addressResponse = action.payload.data;
      state.error = null;
    },
    setAddressFailure: (state, action) => {
      state.loading = false;
      state.addressResponse = null;
      state.error = action.payload.error;
    },
  },
});

export const { setAddressFailure, setAddressLoading, setAddressSuccess } =
  addressSlice.actions;

export const selectAddressDetails = (state: RootState) =>
  state?.address?.addressResponse;

export const selectAddressLoading = (state: RootState) =>
  state?.address?.loading;

export const selectAddressError = (state: RootState) => state.address.error;

export default addressSlice.reducer;
