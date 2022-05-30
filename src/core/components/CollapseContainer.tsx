import React from "react";
import "./collapseContainer.scss";
import PropTypes from "prop-types";

const ComponentPropTypes = {
  children: PropTypes.any,
};

type MyComponentProps = PropTypes.InferProps<typeof ComponentPropTypes>;

const CollapseContainer: React.FC<MyComponentProps> = ({ children }) => {
  return <div className="collapse-container">{children}</div>;
};

export default React.memo(CollapseContainer);
