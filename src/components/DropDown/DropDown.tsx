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
  const [ isHovering, setIsHovering ] = useState(false);

  return (
    <StyledDropDownContainer>
      <StyledDropDownButton
          id={id}
          name={name}
      >
        {placeholderText}
        <FontAwesomeIcon icon={faCaretDown} />
      </StyledDropDownButton>
      <StyledDropDownContentContainer>
        {children}
      </StyledDropDownContentContainer>
    </StyledDropDownContainer>
  );
};
