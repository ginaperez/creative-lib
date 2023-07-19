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
import { Input, Button } from "../../elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

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
                icon={<FontAwesomeIcon icon={faCreditCard} />}
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
                placeholder="Eg. Jane Smith"
                width="19rem"
            />
            <Input
                type="text"
                labelText="Exp"
                width="5rem"
                placeholder="MM/YY"
            />
        </StyledBottomInputs>
        <StyledButtonsContainer>
            <Button type='square' onClick={addButtonClick}>Add Card</Button>
            <Button type='text' onClick={cancelButtonClick}>Cancel</Button>
        </StyledButtonsContainer>
      </StyledPortalBodyContainer>
    </StyledPortalContainer>
  );
};

export default PaymentPortal;
