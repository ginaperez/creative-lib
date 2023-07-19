import React, { useState } from "react";
import { StyledDropDownButton, StyledDropDownContainer } from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { StyledDropDownContentContainer } from "./styledComponents/StyledDropDownContentContainer";

interface DropDownProps {
  id?: string;
  name?: string;
  placeholderText?: string;
  children: JSX.Element;
}

export const DropDown = ({
  id,
  name,
  placeholderText,
  children,
}: DropDownProps) => {
  const [ isActive, setIsActive ] = useState(false);

  return (
    <StyledDropDownContainer
      onMouseEnter={() => {
        setIsActive(true);
        console.log('this is active');
      }}
      onMouseLeave={() => {
        setIsActive(false);
        console.log('this has become inactive');
      }}
    >
      <StyledDropDownButton
          id={id}
          name={name}
      >
        {placeholderText}
        <FontAwesomeIcon icon={faCaretDown} />
      </StyledDropDownButton>
      {
        isActive && (
          <StyledDropDownContentContainer>
            {children}
          </StyledDropDownContentContainer>
        )
      }
    </StyledDropDownContainer>
  );
};
