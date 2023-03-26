import React from "react";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { ButtonX } from "../ButtonX";
import {
  StyledDialogContainer,
  StyledDialogHeaderContainer,
  StyledDialogFooterContainer,
} from "./styledComponents";

interface DialogProps {
  headerContent?: string;
  bodyContent?: string;
}

export const Dialog = ({
  headerContent,
  bodyContent,
}: DialogProps) => {
  return (
    <StyledDialogContainer>
      <StyledDialogHeaderContainer>
        {headerContent}
        <ButtonX onClick={() => {}}/>
    </StyledDialogHeaderContainer>
      <div className="dialog-body">{bodyContent}</div>
      <StyledDialogFooterContainer>
        <ButtonText children="Cancel" onClick={() => {}} />
        <Button children="Submit" onClick={() => {}} />
      </StyledDialogFooterContainer>
    </StyledDialogContainer>
  );
};

export default Dialog;
