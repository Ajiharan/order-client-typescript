import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";

const ComponentPropTypes = {
  formik: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

type MyComponentProps = PropTypes.InferProps<typeof ComponentPropTypes>;

const InputCheck: React.FC<MyComponentProps> = ({
  formik,
  name,
  placeholder,
  label,
  type,
}) => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            placeholder={placeholder}
            {...formik.fieldProps}
          />
        }
        label={label}
      />
    </div>
  );
};

export default InputCheck;
