import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormValues } from "@/types";

export interface CInputProps {
  Icon?: React.FC<{ width: number }>;
  name: string;
  placeholder?: string;
  type?: string;
  label: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export const CInput: React.FC<CInputProps> = ({
  Icon,
  name,
  placeholder,
  type,
  label,
  register,
  errors,
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
        />
      </div>
      {errors[name] && (
        <span role="alert" className="xl:text-md text-s">
          {errors[name].message}
        </span>
      )}
    </label>
  );
};
