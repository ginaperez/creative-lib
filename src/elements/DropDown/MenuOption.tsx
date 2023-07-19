import React from 'react';
import { StyledOption } from './styledComponents/StyledOption';

interface MenuOptionProps {
    children: string;
    value?: string;
}

export const MenuOption = ({
    children,
    value,
}: MenuOptionProps) => {
    return (
        <StyledOption
            value={value}
        >
            {children}
        </StyledOption>
    )
}