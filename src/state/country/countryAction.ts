import { APIService } from "../../core/util/services/APIServices";
import { AppDispatch } from "../store";
import {
  getCountriesFailure,
  getCountriesLoading,
  getCountriesSuccess,
} from "./countrySlice";

export const getCountries =
  (baseUrl: string, params: any) => (dispatch: AppDispatch) => {
    dispatch(getCountriesLoading());
    const http = new APIService(baseUrl);
    http
      .getAll(params)
      .then((res: any) => {
        dispatch(
          getCountriesSuccess({
            data: res.data.map(
              (
                { name: { common } }: { name: { common: string } },
                i: number
              ) => ({
                id: i,
                label: common,
              })
            ),
          })
        );
      })
      .catch((err: any) => {
        dispatch(
          getCountriesFailure({
            error: err.message,
          })
        );
      });
  };
