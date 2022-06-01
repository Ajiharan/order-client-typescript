import React from "react";
import "./button.scss";

const CustomButton = ({ label = "SAVE" }) => {
  return (
    <div className="custom-button-container">
      <button type="submit" className="btn-submit">
        {label}
      </button>
    </div>
  );
};

export default React.memo(CustomButton);
