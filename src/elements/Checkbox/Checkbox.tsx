import React from 'react';
import { StyledCheckbox } from './styledComponents';

interface CheckboxProps {
    id?: string;
    name?: string;
}

export const Checkbox = ({
    id,
    name,
}: CheckboxProps) => {
    return (
        <StyledCheckbox 
            type="checkbox"
            id={id}
            name={name}
        />
    )
}