import React from "react";
import Textfield, { TextFieldProps } from "@material-ui/core/TextField";

export interface IFormikTextFieldProps {
  name: string;
}

const FormikTextField = (props: IFormikTextFieldProps & TextFieldProps) => {
  return <Textfield {...props} />;
};

export default FormikTextField;
