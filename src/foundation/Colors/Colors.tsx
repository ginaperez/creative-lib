import React from 'react';
import { StyledColorBox, StyledColorsBoxContainer, StyledColorsLabel, StyledColorsLabelContainer } from './styledComponents';

interface ColorsProps {
    darkBlue?: string;
    labelText?: string;
}

export const Colors = ({
    darkBlue,
    labelText,
}: ColorsProps) => {
    return (
        <>
            {/* Primary Brand Colors */}
            <StyledColorsBoxContainer>
                <StyledColorsLabelContainer>
                    <StyledColorsLabel>Primary</StyledColorsLabel>
                    <StyledColorBox
                        textColor="#fff"
                        backgroundColor="#146C94"
                    >
                        #146C94
                    </StyledColorBox>
                </StyledColorsLabelContainer>
                <StyledColorsLabelContainer>
                    <StyledColorsLabel>Secondary</StyledColorsLabel>
                    <StyledColorBox
                        textColor="#fff"
                        backgroundColor="#19A7CE"
                    >
                        #19A7CE
                    </StyledColorBox>
                </StyledColorsLabelContainer>
            </StyledColorsBoxContainer>

            {/* Neutrals */}
            <StyledColorsBoxContainer>
                <StyledColorsLabelContainer>
                    <StyledColorsLabel>Black</StyledColorsLabel>
                    <StyledColorBox
                        textColor="#fff"
                        backgroundColor="#000"
                    >
                        #000000
                    </StyledColorBox>
                </StyledColorsLabelContainer>
                <StyledColorsLabelContainer>
                    <StyledColorsLabel>White</StyledColorsLabel>
                    <StyledColorBox
                        textColor="#000"
                        backgroundColor="#fff"
                    >
                        #FFFFFF
                    </StyledColorBox>
                </StyledColorsLabelContainer>
            </StyledColorsBoxContainer>

            {/* Soft Neutrals*/}

            <StyledColorsBoxContainer>
                <StyledColorsLabelContainer>
                    <StyledColorsLabel>Soft Black</StyledColorsLabel>
                    <StyledColorBox
                        textColor="#fff"
                        backgroundColor="#1A2027"
                    >
                        #1A2027
                    </StyledColorBox>
                </StyledColorsLabelContainer>
                <StyledColorsLabelContainer>
                    <StyledColorsLabel>Cream</StyledColorsLabel>
                    <StyledColorBox
                        textColor="#000000"
                        backgroundColor="#F6F1F1"
                    >
                        #F6F1F1
                    </StyledColorBox>
                </StyledColorsLabelContainer>
            </StyledColorsBoxContainer>
        </>
    );
};

export default Colors;