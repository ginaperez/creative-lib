import React from 'react';
import { StyledRadioButton } from './styledComponents';

interface RadioButtonProps {
    id?: string,
    name?: string,
}

export const RadioButton = ({
    id,
    name
}: RadioButtonProps) => {
    return (
        <StyledRadioButton 
            type="radio"
            id={id}
            name={name}
        />
    )
}