import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useReduxService from "../util/services/useReduxService";
import PropTypes from "prop-types";
import { ADDRESS_BASE_URL } from "../util/services/APIBaseUrl";

const ComponentPropTypes = {
  formik: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  baseUrl: PropTypes.string,
  selector: PropTypes.any.isRequired,
  dispatchFunc: PropTypes.func.isRequired,
  params: PropTypes.any,
  onEventUpdate: PropTypes.func.isRequired,
};

type MyComponentProps = PropTypes.InferProps<typeof ComponentPropTypes>;

const AutoCompleteField: React.FC<MyComponentProps> = ({
  formik,
  name,
  placeholder,
  baseUrl = ADDRESS_BASE_URL,
  selector,
  dispatchFunc,
  params,
  onEventUpdate,
}) => {
  const { selectorData } = useReduxService(
    baseUrl,
    selector,
    dispatchFunc,
    params?.text,
    true,
    params
  );

  const handleChange = (_: any, location: any): void => {
    onEventUpdate(location);
  };

  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        options={selectorData}
        onChange={handleChange}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderInput={(params) => (
          <TextField
            {...params}
            {...formik.fieldProps}
            name={name}
            variant="standard"
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default AutoCompleteField;
