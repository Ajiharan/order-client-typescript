import React from "react";
import PropTypes from "prop-types";

const ComponentPropTypes = {
  value: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
};

type MyComponentProps = PropTypes.InferProps<typeof ComponentPropTypes>;

const TextGroup: React.FC<MyComponentProps> = ({ label, value }) => {
  return (
    <div className="group-text-container">
      <h5>{label}</h5>
      <p>{value}</p>
    </div>
  );
};

export default React.memo(TextGroup);
