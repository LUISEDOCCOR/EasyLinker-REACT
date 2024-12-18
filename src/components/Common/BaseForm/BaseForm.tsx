import { CButton, CInput } from "@/components";

export const BaseForm = ({ handleSubmit, form }) => {
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
