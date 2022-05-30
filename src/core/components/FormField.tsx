import React from "react";
import InputText from "./InputText";
import SelectField from "./SelectField";
import AutoCompleteField from "./AutoCompleteField";
import InputCheck from "./InputCheck";

const FormField: React.FC<any> = (props) => {
  const components: any = {
    text: InputText,
    select: SelectField,
    auto: AutoCompleteField,
    check: InputCheck,
  };

  const renderDynamic = () => {
    return React.createElement(components[props.type], props);
  };

  return <React.Fragment>{renderDynamic()}</React.Fragment>;
};

export default React.memo(FormField);
