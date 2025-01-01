import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { LucideIcon } from "lucide-react";

export interface CInputProps {
  Icon?: LucideIcon;
  name: string;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
  label: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  readonly?: boolean;
}

export const CInput: React.FC<CInputProps> = ({
  Icon,
  name,
  placeholder,
  type,
  label,
  register,
  errors,
  defaultValue,
  readonly,
}) => {
  return (
    <label htmlFor={name} className="flex w-full max-w-2xl flex-col gap-2">
      <span className="text-lg font-bold">{label}</span>
      <div className="flex items-center gap-2 rounded-md border-2 border-black p-2">
        {Icon && <Icon width={24} />}
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          className="w-full outline-none"
          {...register(name)}
          defaultValue={defaultValue}
          readOnly={readonly}
        />
      </div>
      {errors[name] && (
        <span role="alert" className="xl:text-md text-s">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </label>
  );
};
