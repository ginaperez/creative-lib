import React from "react";
import { StyledButton } from "./styledComponents";

export type ButtonVariant = 'square' | 'text';

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: string;
  type?: ButtonVariant;
}

export const Button = ({ 
    children,
    onClick,
    type,
}: ButtonProps) => {
    const text = type === 'text';
    const square = type === 'square';
    return (
        <StyledButton 
            onClick={onClick}
            text={text}
            square={square}
        >
            {children}
        </StyledButton>
    )
};
