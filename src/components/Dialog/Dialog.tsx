import React, { useState } from "react";
import { Button } from "../../elements/Button";
import {
  StyledDialogContainer,
  StyledDialogFooterContainer,
  StyledDialogBody,
  StyledDialogButton,
} from "./styledComponents";

interface DialogProps {
  bodyContent?: string;
  dialogButtonText: string;
}

export const Dialog = ({
  bodyContent,
  dialogButtonText
}: DialogProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [ isButtonVisible, setIsButtonVisible ] = useState(true);

  return (
    <>
      {isDialogOpen && (
        <StyledDialogContainer>
        <StyledDialogBody>{bodyContent}</StyledDialogBody>
        <StyledDialogFooterContainer>
          <Button
            type='text'
            children="Cancel"
            onClick={() => {
              setIsDialogOpen(false); 
              setIsButtonVisible(true); 
            }} 
          />
          <Button
            children="Submit"
            onClick={() => {
              setIsDialogOpen(false);
              setIsButtonVisible(true);
            }} 
          />
        </StyledDialogFooterContainer>
        </StyledDialogContainer>
      )}
      {
        isButtonVisible && (
          <StyledDialogButton
            onClick={() => {
              setIsDialogOpen(true);
              setIsButtonVisible(false);
            }}
            children={dialogButtonText as string} 
          />
        )
      }
    </>
  );
};

export default Dialog;
