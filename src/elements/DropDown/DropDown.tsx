import React, { useState } from "react";
import { StyledDropdownLabel, StyledDropdownOption, StyledDropdownSelect } from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

// interface OptionType {
//   value: string;
//   label: string;
// }

interface DropDownProps {
  options: HTMLOptionElement[];
  value?: string;
  id?: string;
  name?: string;
  placeholderText: string;
  children: JSX.Element;
  label?: string;
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
  label,
  width,
  multiple,
  options,
  value
}: DropDownProps) => {

  return (
    <>
      {label && (
        <StyledDropdownLabel
        htmlFor={id}
        >
          {label}
        </StyledDropdownLabel>
      )}
      <StyledDropdownSelect
        id={id}
        name={name}
        placeholder={placeholderText}
        width={width}
        multiple={multiple}
        value={value}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
        {/* <FontAwesomeIcon icon={faCaretDown} /> */}
      </StyledDropdownSelect>
    </>
  );
};
