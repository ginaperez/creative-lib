import React from "react";
import { StyledDropDown } from "./styledComponents";

interface DropDownProps {
  id?: string;
  name?: string;
  placeholder?: string;
  children: JSX.Element;
}

export const DropDown = ({
  id,
  name,
  placeholder,
  children,
}: DropDownProps) => {
  return (
    <StyledDropDown
        id={id}
        name={name}
        placeholder={placeholder}
    >
      {children}
    </StyledDropDown>
  );
};
