import { APIService } from "../../core/util/services/APIServices";
import { AppDispatch } from "../store";
import {
  setAddressFailure,
  setAddressLoading,
  setAddressSuccess,
} from "./addressSlice";

export const setAddress =
  (baseUrl: string, apiSection: string, data: any) =>
  (dispatch: AppDispatch) => {
    dispatch(setAddressLoading());
    const http = new APIService(baseUrl, apiSection);
    http
      .create(data)
      .then((res: any) => {
        dispatch(
          setAddressSuccess({
            data: res.data,
          })
        );
      })
      .catch((err: any) => {
        dispatch(
          setAddressFailure({
            error: err.response.data,
          })
        );
      });
  };
