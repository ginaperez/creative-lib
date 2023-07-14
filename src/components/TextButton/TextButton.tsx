import React from 'react';
import { StyledTextButton } from './styledComponents';

interface TextButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: string;
  }
  
  export const TextButton = ({ 
      children,
      onClick,
  }: TextButtonProps) => {
      return (
          <StyledTextButton 
              onClick={onClick}
          >
              {children}
          </StyledTextButton>
      )
  };

export default TextButton;