import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const ComponentPropTypes = {
  formik: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

type MyComponentProps = PropTypes.InferProps<typeof ComponentPropTypes>;

const InputText: React.FC<MyComponentProps> = ({
  formik,
  name,
  placeholder,
}) => {
  return (
    <React.Fragment>
      <TextField
        name={name}
        placeholder={placeholder}
        {...formik.fieldProps}
        id="standard-basic"
        variant="standard"
      />
      {formik.touched && formik.errors ? (
        <h6>{formik.errors}</h6>
      ) : (
        <h6 style={{ opacity: 0 }}>{"null"}</h6>
      )}
    </React.Fragment>
  );
};

export default React.memo(InputText);
