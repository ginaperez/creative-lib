import React, { useState } from "react";
import { StyledModalContainer, StyledModalContent } from "./styledComponents";
import { Button } from "../../components";

interface ModalProps {
  content?: string;
  modalButtonText?: string;
}

export const Modal = ({
    content,
    modalButtonText
}: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && (
        <StyledModalContainer>
          <StyledModalContent>{content}</StyledModalContent>
        </StyledModalContainer>
      )}
      <Button onClick={() => setIsModalOpen(true)} children="Modal Button"/>
    </>
  );
};

export default Modal;
