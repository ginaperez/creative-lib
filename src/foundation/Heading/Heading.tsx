import React from 'react';
import { StyledHeadingContainer } from './styledComponents';

interface HeadingProps {
    h1Text?: string;
    h2Text?: string;
    h3Text?: string;
    h4Text?: string;
    h5Text?: string;
    h6Text?: string;
}

export const Heading = ({
    h1Text,
    h2Text,
    h3Text,
    h4Text,
    h5Text,
    h6Text,
}: HeadingProps) => {
    return (
        <StyledHeadingContainer>
            <h1>{h1Text}</h1>
            <h2>{h2Text}</h2>
            <h3>{h3Text}</h3>
            <h4>{h4Text}</h4>
            <h5>{h5Text}</h5>
            <h6>{h6Text}</h6>
        </StyledHeadingContainer>
    );
};

export default Heading;