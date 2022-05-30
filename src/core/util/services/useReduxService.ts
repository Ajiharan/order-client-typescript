import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useReduxService = (
  baseUrl: string | null,
  selector: any,
  dispatchFunc: any,
  text = "",
  hasCondition = false,
  options?: any
) => {
  const dispatch = useDispatch();
  const selectorData: any[] = useSelector(selector);

  useEffect(() => {
    if (!hasCondition) {
      dispatch(dispatchFunc(baseUrl, options));
      return;
    }
    if (text.length >= 4) {
      dispatch(dispatchFunc(baseUrl, options));
    }
  }, [text]);

  return { selectorData };
};

export default useReduxService;
