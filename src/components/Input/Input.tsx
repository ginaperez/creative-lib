import React, { useState } from "react";
import { StyledInput, StyledInputContainer, StyledInputLabel } from "./styledComponents";

interface InputProps {
  type: string;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  labelText?: string;
  maxLength?: number;
  width?: string;
  hasLabel?: boolean;
  icon?: JSX.Element;
}

export const Input = ({
    type,
    id,
    name,
    value,
    placeholder,
    disabled,
    labelText,
    required,
    maxLength,
    width,
    hasLabel,
    icon
}: InputProps) => {
  const configuredIcon = icon ? icon : '';

  return (
    <>
      {
        hasLabel && <StyledInputLabel>{labelText}</StyledInputLabel> 
      }
      <StyledInputContainer>
        {configuredIcon}
        <StyledInput
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          width={width}
        />
      </StyledInputContainer>
    </>
  );
};

export default Input;
