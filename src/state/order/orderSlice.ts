import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface orderState {
  orderData: any;
  loading: boolean;
  error: any;
}
const initialState: orderState = {
  orderData: null,
  loading: true,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderLoading: (state) => {
      state.loading = true;
      state.orderData = null;
      state.error = null;
    },
    setOrderSuccess: (state, action) => {
      state.loading = false;
      state.orderData = action.payload.data;
      state.error = null;
    },
    setOrderFailure: (state, action) => {
      state.loading = false;
      state.orderData = null;
      state.error = action.payload.error;
    },
  },
});

export const { setOrderFailure, setOrderLoading, setOrderSuccess } =
  orderSlice.actions;

export const selectOrderDetails = (state: RootState) => state?.order?.orderData;

export const selectOrderLoading = (state: RootState) => state?.order?.loading;

export const selectOrderError = (state: RootState) => state.order.error;

export default orderSlice.reducer;
