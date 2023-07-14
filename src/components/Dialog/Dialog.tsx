import React from "react";
import { Button } from "../Button";
import { TextButton } from "../TextButton";
import { ButtonX } from "../ButtonX";
import {
  StyledDialogContainer,
  StyledDialogHeaderContainer,
  StyledDialogFooterContainer,
} from "./styledComponents";
import { StyledDialogBody } from "./styledComponents/StyledDialogBody";

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
      {/* <StyledDialogHeaderContainer>
        {headerContent}
        <ButtonX onClick={() => {}}/>
      </StyledDialogHeaderContainer> */}
      <StyledDialogBody>{bodyContent}</StyledDialogBody>
      <StyledDialogFooterContainer>
        <TextButton children="Cancel" onClick={() => {}} />
        <Button children="Submit" onClick={() => {}} />
      </StyledDialogFooterContainer>
    </StyledDialogContainer>
  );
};

export default Dialog;
