import React from "react";
import { StyledButton } from "./styledComponents";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: string;
}

export const Button = ({ 
    children,
    onClick,
}: ButtonProps) => {
    return (
        <StyledButton 
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
};
