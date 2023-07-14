import React from "react";
import { StyledInput, StyledInputLabel } from "./styledComponents";

interface InputProps {
  type: string;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  labelText?: string;
}

export const Input = ({
    type,
    id,
    name,
    value,
    placeholder,
    disabled,
    labelText,
    required
}: InputProps) => {
  return (
    <>
      <StyledInputLabel>{labelText}</StyledInputLabel>
      <StyledInput
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
    </>
  );
};

export default Input;
