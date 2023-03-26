import React from 'react';
import { StyledButtonX } from "./styledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ButtonX = ({ 
    onClick,
}: ButtonProps) => {
    return (
        <StyledButtonX 
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faXmark} />
        </StyledButtonX>
    )
};