import { CButton, CInput, CInputProps, CButtonProps } from "@/components";
import React from "react";

export interface BaseFormProps {
  form: { inputs: CInputProps[]; buttons: CButtonProps[] };
  handleSubmit: () => void;
}

export const BaseForm: React.FC<BaseFormProps> = ({ handleSubmit, form }) => {
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {form.inputs.map((props, index) => (
        <CInput key={index} {...props} />
      ))}
      {form.buttons.map((props, index) => (
        <CButton key={index} {...props} />
      ))}
    </form>
  );
};
