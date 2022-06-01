import { APIService } from "../../core/util/services/APIServices";
import { AppDispatch } from "../store";
import {
  getAutoFillFailure,
  getAutoFillSuccess,
  getAutoFillLoading,
} from "./autoFillSlice";

export const getAutoFill =
  (baseUrl: string, params: any) => (dispatch: AppDispatch) => {
    dispatch(getAutoFillLoading());
    const http = new APIService(baseUrl);
    http
      .getAll(params)
      .then((res: any) => {
        dispatch(
          getAutoFillSuccess({
            data: res.data?.results
              .filter(({ postcode }: { postcode: number }) => Boolean(postcode))
              .map(
                ({
                  address_line1,
                  address_line2,
                  place_id,
                  state,
                  city,
                  postcode,
                }: any) => {
                  return {
                    postcode,
                    address_line1,
                    address_line2,
                    state,
                    city,
                    label: `${address_line1},${address_line2}`,
                    id: place_id,
                  };
                }
              ),
          })
        );
      })
      .catch((err: any) => {
        dispatch(
          getAutoFillFailure({
            error: err.message,
          })
        );
      });
  };
