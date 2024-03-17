import { useState } from "react";
import { Button } from "../../molecules/Button";
import {
  StyledModalContainer,
  StyledModalFooterContainer,
  StyledModalBody,
  StyledModalButton,
} from "./styledComponents";

export interface ModalProps {
  bodyContent?: string;
  modalButtonText: string;
}

export const Modal = ({
  bodyContent,
  modalButtonText
}: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  return (
    <>
      {isModalOpen && (
        <StyledModalContainer>
          <StyledModalBody>{bodyContent}</StyledModalBody>
          <StyledModalFooterContainer>
            <Button
              type="text"
              children="Cancel"
              onClick={() => {
                setIsModalOpen(false);
                setIsButtonVisible(true);
              }}
            />
            <Button
              children="Submit"
              onClick={() => {
                setIsModalOpen(false);
                setIsButtonVisible(true);
              }}
            />
          </StyledModalFooterContainer>
        </StyledModalContainer>
      )}
      {isButtonVisible && (
        <StyledModalButton
          onClick={() => {
            setIsModalOpen(true);
            setIsButtonVisible(false);
          }}
          children={modalButtonText}
        />
      )}
    </>
  );
};

export default Modal;
