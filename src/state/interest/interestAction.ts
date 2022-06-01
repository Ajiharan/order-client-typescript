import { APIService } from "../../core/util/services/APIServices";
import { AppDispatch } from "../store";
import {
  setInterestFailure,
  setInterestLoading,
  setInterestSuccess,
} from "./interestSlice";

export const setInterest =
  (baseUrl: string, apiSection: string, data: any) =>
  (dispatch: AppDispatch) => {
    dispatch(setInterestLoading());
    const http = new APIService(baseUrl, apiSection);
    http
      .create(data)
      .then((res: any) => {
        dispatch(
          setInterestSuccess({
            data: res.data,
          })
        );
      })
      .catch((err: any) => {
        dispatch(
          setInterestFailure({
            error: err.response.data,
          })
        );
      });
  };
