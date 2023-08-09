import React, { useState } from "react";
import { StyledDropdownLabel, StyledDropdownOption, StyledDropdownSelect } from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

interface OptionType {
  value: string;
  label: string;
}

interface DropDownProps {
  // options: OptionType[];
  value?: string;
  id?: string;
  name?: string;
  placeholderText: string;
  children: JSX.Element;
  labelText?: string;
  /**
   * Sets the width using a number
   * with rem. Default width is 10rem
   */
  width?: number;
  multiple?: boolean;
}

export const DropDown = ({
  id,
  name,
  placeholderText,
  children,
  labelText,
  width,
  multiple,
  // options,
  value
}: DropDownProps) => {

  return (
    <>
      <StyledDropdownLabel
        htmlFor={id}
      >
        {labelText}
      </StyledDropdownLabel>
      <StyledDropdownSelect
        id={id}
        name={name}
        placeholder={placeholderText}
        width={width}
        multiple={multiple}
        value={value}
      >
        <StyledDropdownOption>
          {children}
        </StyledDropdownOption>
        <FontAwesomeIcon icon={faCaretDown} />
      </StyledDropdownSelect>
    </>
  );
};
