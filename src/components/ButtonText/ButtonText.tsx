import React from 'react';
import { StyledButtonText } from './styledComponents';

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: string;
  }
  
  export const ButtonText = ({ 
      children,
      onClick,
  }: ButtonProps) => {
      return (
          <StyledButtonText 
              onClick={onClick}
          >
              {children}
          </StyledButtonText>
      )
  };
