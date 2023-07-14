import React from "react";
import { StyledTextArea } from "./styledComponents";

interface TextAreaProps {
  id?: string;
  name?: string;
  placeholder?: string;
  maxCharacters?: number;
}

export const TextArea = ({
  id,
  name,
  placeholder,
  maxCharacters,
}: TextAreaProps) => {
  return (
    <StyledTextArea
      id={id}
      name={name}
      placeholder={placeholder}
      maxLength={maxCharacters}
    />
  );
};
