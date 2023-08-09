import React, { useState } from "react";
import { StyledModalContainer, StyledModalContent } from "./styledComponents";

interface ModalProps {
  content?: string;
}

export const Modal = ({
    content,
}: ModalProps) => {
  return (
    <StyledModalContainer>
      <StyledModalContent>{content}</StyledModalContent>
    </StyledModalContainer>
  );
};

export default Modal;
