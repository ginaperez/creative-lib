import React from "react";
import {
  StyledPortalContainer,
  StyledPortalHeading,
  StyledTopInputs,
  StyledBottomInputs,
  StyledButtonsContainer,
  StyledPortalBodyContainer,
  StyledLineBreak,
} from "./styledComponents";
import { Input, Button, TextButton } from "../../components";

interface PaymentPortalProps {
  headingText?: string;
  addButtonClick: () => {};
  cancelButtonClick: () => {};
}

export const PaymentPortal = ({
  headingText,
  addButtonClick,
  cancelButtonClick,
}: PaymentPortalProps) => {
  return (
    <StyledPortalContainer>
      <StyledPortalHeading>{headingText}</StyledPortalHeading>
      <StyledLineBreak />
      <StyledPortalBodyContainer>
        <StyledTopInputs>
            <Input
                type="text"
                labelText="Card number"
                placeholder="0000 0000 0000 0000"
                width="19rem"
            />
            <Input
                type="password"
                labelText="CVV"
                maxLength={3}
                width="5rem"
                placeholder="CVV"
            />
        </StyledTopInputs>
        <StyledBottomInputs>
            <Input
                type="text"
                labelText="Name on card"
                placeholder="Eg. Saber Ali"
                width="19rem"
            />
            <Input
                type="month"
                labelText="Exp"
                width="5rem"
                placeholder="MM/YYYY"
            />
        </StyledBottomInputs>
        <StyledButtonsContainer>
            <Button onClick={addButtonClick}>Add Card</Button>
            <TextButton onClick={cancelButtonClick}>Cancel</TextButton>
        </StyledButtonsContainer>
      </StyledPortalBodyContainer>
    </StyledPortalContainer>
  );
};

export default PaymentPortal;
